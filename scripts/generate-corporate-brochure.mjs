import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

// Helper: Word-wrapping text based on precise font measurement
function wrapText(text, font, fontSize, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

// Helper: Draw wrapped text block and return the next available Y coordinate
function drawWrappedTextBlock(page, text, { x, y, font, fontSize, color, maxWidth, lineHeight, indent = 0 }) {
  const lines = wrapText(text, font, fontSize, maxWidth - indent);
  let curY = y;
  for (let i = 0; i < lines.length; i++) {
    page.drawText(lines[i], {
      x: i === 0 ? x : x + indent,
      y: curY,
      size: fontSize,
      font,
      color,
    });
    curY -= lineHeight;
  }
  return curY;
}

async function generateCorporateBrochure() {
  const pdfDoc = await PDFDocument.create();
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // OcuHome Curated Brand Palette
  const deepInk = rgb(22 / 255, 40 / 255, 44 / 255);       // #16282C
  const clinicalTeal = rgb(57 / 255, 126 / 255, 122 / 255); // #397E7A
  const clinicalSlate = rgb(85 / 255, 104 / 255, 107 / 255);// #55686B
  const subtleAmber = rgb(217 / 255, 174 / 255, 112 / 255); // #D9AE70
  const warmIvory = rgb(248 / 255, 247 / 255, 242 / 255);  // #F8F7F2
  const softSage = rgb(225 / 255, 235 / 255, 229 / 255);   // #E1EBE5
  const borderSubtle = rgb(215 / 255, 222 / 220 / 255, 218 / 255);
  const cardBg = rgb(255 / 255, 255 / 255, 255 / 255);
  const white = rgb(1, 1, 1);

  // Load and embed the corporate screening photograph
  const imagePath = path.join(process.cwd(), "public", "images", "corporate-eye-screening.jpg");
  let embeddedImage = null;
  if (fs.existsSync(imagePath)) {
    const imageBytes = fs.readFileSync(imagePath);
    embeddedImage = await pdfDoc.embedJpg(imageBytes);
  }

  const pageWidth = 595.28;
  const pageHeight = 841.89; // Standard A4 in points
  const marginX = 44;
  const contentWidth = pageWidth - marginX * 2; // 507.28 pt

  // Helper: Draw standardized page footer
  function drawFooter(page, pageNum) {
    page.drawLine({
      start: { x: marginX, y: 50 },
      end: { x: marginX + contentWidth, y: 50 },
      thickness: 0.75,
      color: clinicalTeal,
      opacity: 0.35,
    });

    page.drawText("OcuHome Clinical Eye Care Systems Pvt. Ltd. | Corporate Health Desk | www.ocuhome.in", {
      x: marginX,
      y: 34,
      size: 7.5,
      font: fontOblique,
      color: clinicalSlate,
    });

    const pageStr = `Page ${pageNum} of 4`;
    const pageStrWidth = fontHelvetica.widthOfTextAtSize(pageStr, 7.5);
    page.drawText(pageStr, {
      x: marginX + contentWidth - pageStrWidth,
      y: 34,
      size: 7.5,
      font: fontBold,
      color: clinicalSlate,
    });
  }

  // ==========================================
  // PAGE 1: COVER & EXECUTIVE VISION
  // ==========================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  page1.drawRectangle({ x: 0, y: 0, width: pageWidth, height: pageHeight, color: warmIvory });

  // Top Deep Ink Header Banner
  const headerHeightP1 = 132;
  page1.drawRectangle({
    x: 0,
    y: pageHeight - headerHeightP1,
    width: pageWidth,
    height: headerHeightP1,
    color: deepInk,
  });

  // Teal accent underline
  page1.drawRectangle({
    x: 0,
    y: pageHeight - headerHeightP1 - 3,
    width: pageWidth,
    height: 3,
    color: clinicalTeal,
  });

  page1.drawText("OCUHOME CLINICAL EYE CARE SYSTEMS", {
    x: marginX,
    y: pageHeight - 42,
    size: 9,
    font: fontBold,
    color: subtleAmber,
  });

  page1.drawText("CORPORATE EYE CAMPS & EMPLOYEE VISION CARE", {
    x: marginX,
    y: pageHeight - 68,
    size: 17,
    font: fontBold,
    color: white,
  });

  page1.drawText("Hospital-Calibrated On-Site Ergonomic Vision Screenings for Modern Workplaces in India", {
    x: marginX,
    y: pageHeight - 92,
    size: 9.5,
    font: fontHelvetica,
    color: warmIvory,
  });

  page1.drawText("Delhi NCR • Mumbai & MMR • Bengaluru • Hyderabad • Pune", {
    x: marginX,
    y: pageHeight - 110,
    size: 8,
    font: fontHelvetica,
    color: subtleAmber,
  });

  // Hero Photograph
  const photoY = pageHeight - headerHeightP1 - 250;
  const photoHeight = 225;

  if (embeddedImage) {
    page1.drawImage(embeddedImage, {
      x: marginX,
      y: photoY + 22,
      width: contentWidth,
      height: photoHeight - 22,
    });

    // Caption strip below the photo (not covering the photo!)
    page1.drawRectangle({
      x: marginX,
      y: photoY,
      width: contentWidth,
      height: 22,
      color: deepInk,
    });

    page1.drawText("Figure 1: On-site vision screening conducted with calibrated portable auto-refractometers at an enterprise campus", {
      x: marginX + 12,
      y: photoY + 7,
      size: 7.5,
      font: fontOblique,
      color: white,
    });
  }

  // Executive Summary & Clinical Philosophy Card
  const execCardY = 75;
  const execCardHeight = photoY - execCardY - 14; // Perfectly fills the remaining space down to footer
  page1.drawRectangle({
    x: marginX,
    y: execCardY,
    width: contentWidth,
    height: execCardHeight,
    color: cardBg,
    borderColor: clinicalTeal,
    borderWidth: 1,
  });

  page1.drawText("Executive Summary & Clinical Philosophy", {
    x: marginX + 16,
    y: execCardY + execCardHeight - 26,
    size: 12,
    font: fontBold,
    color: deepInk,
  });

  let curP1Y = execCardY + execCardHeight - 44;
  curP1Y = drawWrappedTextBlock(
    page1,
    "Modern knowledge workers face high digital display loads leading to asthenopia (eye strain), uncorrected refractive errors, and accelerated dry eye symptoms. Our corporate eye camp program brings hospital-calibrated primary screening directly into your enterprise campus or regional office without disrupting operational workflow.",
    {
      x: marginX + 16,
      y: curP1Y,
      font: fontHelvetica,
      fontSize: 8.5,
      color: deepInk,
      maxWidth: contentWidth - 32,
      lineHeight: 12.5,
    }
  );

  curP1Y -= 8;
  page1.drawText("Key Operational Pillars:", {
    x: marginX + 16,
    y: curP1Y,
    size: 9.5,
    font: fontBold,
    color: clinicalTeal,
  });
  curP1Y -= 16;

  const p1Pillars = [
    { title: "15-Minute Organized Slots", text: "Fast, non-disruptive employee bookings ensuring zero office downtime." },
    { title: "Degree-Qualified Optometrists", text: "University-trained clinicians (B.Optom/M.Optom) operating calibrated portable equipment." },
    { title: "Dual-Tier Clinical Governance", text: "Supervising tele-ophthalmologist review and digital countersignatures for all encounters." },
    { title: "Direct Tertiary Referral Protocols", text: "Transparent transfer documentation to secondary/tertiary eye hospitals when pathology is detected." },
  ];

  for (const pillar of p1Pillars) {
    page1.drawRectangle({
      x: marginX + 16,
      y: curP1Y - 26,
      width: contentWidth - 32,
      height: 32,
      color: softSage,
      borderColor: clinicalTeal,
      borderWidth: 0.5,
    });

    page1.drawText(`• ${pillar.title}:`, {
      x: marginX + 24,
      y: curP1Y - 14,
      size: 8.5,
      font: fontBold,
      color: deepInk,
    });

    page1.drawText(pillar.text, {
      x: marginX + 24,
      y: curP1Y - 24,
      size: 8,
      font: fontHelvetica,
      color: deepInk,
    });

    curP1Y -= 38;
  }

  drawFooter(page1, 1);

  // ==========================================
  // PAGE 2: CLINICAL SERVICES & DIAGNOSTIC SUITE
  // ==========================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  page2.drawRectangle({ x: 0, y: 0, width: pageWidth, height: pageHeight, color: warmIvory });

  // Top Teal Banner
  const headerHeightP2 = 64;
  page2.drawRectangle({
    x: 0,
    y: pageHeight - headerHeightP2,
    width: pageWidth,
    height: headerHeightP2,
    color: clinicalTeal,
  });

  page2.drawText("SECTION 1: CLINICAL SERVICES OFFERED DURING CORPORATE CAMPS", {
    x: marginX,
    y: pageHeight - 34,
    size: 12,
    font: fontBold,
    color: white,
  });

  page2.drawText("Hospital-Grade Primary Vision Diagnostics Configured for Workplace Campuses", {
    x: marginX,
    y: pageHeight - 49,
    size: 8.5,
    font: fontHelvetica,
    color: softSage,
  });

  // Section Header
  let curP2Y = pageHeight - headerHeightP2 - 24;
  page2.drawText("1.1 Comprehensive Workplace Diagnostic Modules", {
    x: marginX,
    y: curP2Y,
    size: 11.5,
    font: fontBold,
    color: deepInk,
  });
  curP2Y -= 14;

  curP2Y = drawWrappedTextBlock(
    page2,
    "Every corporate camp is configured to match organizational scale and occupational health goals. Diagnostic suites are deployed with full sterilization protocols and calibrated optical hardware:",
    {
      x: marginX,
      y: curP2Y,
      font: fontHelvetica,
      fontSize: 8.5,
      color: clinicalSlate,
      maxWidth: contentWidth,
      lineHeight: 12,
    }
  );
  curP2Y -= 8;

  // 6 Structured Services in 2 Columns x 3 Rows
  const colGap = 12;
  const colWidth = (contentWidth - colGap) / 2; // ~247.6 pt
  const cardHeightP2 = 126;

  const services = [
    {
      num: "01",
      title: "Visual Acuity Testing",
      desc: "Illuminated LogMAR / Snellen optotypes under standardized ambient illumination for distance and near vision to detect uncorrected refractive errors.",
    },
    {
      num: "02",
      title: "Objective & Subjective Refraction",
      desc: "Conducted with calibrated handheld auto-refractors and portable trial lens sets. Employees receive verified spectacle prescriptions for computer monitors.",
    },
    {
      num: "03",
      title: "Digital Eye Strain & Dry Eye Triage",
      desc: "Assessment of tear film break-up time (TBUT), blink rate awareness, and personalized 20-20-20 ergonomic screen-distance adjustments.",
    },
    {
      num: "04",
      title: "Glaucoma Tonometry Baseline",
      desc: "Non-contact rebound tonometry using sterile single-use probes for staff over 40 to identify asymptomatic intraocular pressure (IOP) elevation early.",
    },
    {
      num: "05",
      title: "Ergonomic Vision Workshops",
      desc: "Interactive 30-minute seminars led by optometrists covering digital display ergonomics, blue-light evidence, contact lens hygiene, and eye health.",
    },
    {
      num: "06",
      title: "Anonymized Workforce Analytics",
      desc: "HR and Chief Medical Officers receive an aggregated corporate report summarizing refractive prevalence, dry eye risk factors, and lighting advice.",
    },
  ];

  for (let i = 0; i < services.length; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cardX = marginX + col * (colWidth + colGap);
    const cardY = curP2Y - (row + 1) * cardHeightP2 - row * 10;

    page2.drawRectangle({
      x: cardX,
      y: cardY,
      width: colWidth,
      height: cardHeightP2,
      color: cardBg,
      borderColor: clinicalTeal,
      borderWidth: 0.75,
    });

    // Header strip for card
    page2.drawRectangle({
      x: cardX,
      y: cardY + cardHeightP2 - 24,
      width: colWidth,
      height: 24,
      color: softSage,
    });

    page2.drawText(services[i].num, {
      x: cardX + 10,
      y: cardY + cardHeightP2 - 17,
      size: 9,
      font: fontBold,
      color: clinicalTeal,
    });

    page2.drawText(services[i].title, {
      x: cardX + 28,
      y: cardY + cardHeightP2 - 17,
      size: 9,
      font: fontBold,
      color: deepInk,
    });

    drawWrappedTextBlock(page2, services[i].desc, {
      x: cardX + 12,
      y: cardY + cardHeightP2 - 38,
      font: fontHelvetica,
      fontSize: 8,
      color: deepInk,
      maxWidth: colWidth - 24,
      lineHeight: 12,
    });
  }

  // Clinical Scope Boundary Box at bottom of Page 2
  const discCardY = 72;
  const discCardHeight = 105;
  page2.drawRectangle({
    x: marginX,
    y: discCardY,
    width: contentWidth,
    height: discCardHeight,
    color: softSage,
    borderColor: clinicalTeal,
    borderWidth: 1,
  });

  page2.drawText("Clinical Scope Boundary & Medical Governance:", {
    x: marginX + 14,
    y: discCardY + discCardHeight - 20,
    size: 9.5,
    font: fontBold,
    color: deepInk,
  });

  drawWrappedTextBlock(
    page2,
    "Corporate eye camps deliver non-invasive primary vision screening, refractive assessment, and ergonomic advice. They do not constitute a full surgical evaluation or replace hospital slit-lamp biomicroscopy. Employees presenting with suspected retinal pathology, advanced cataracts, or intraocular hypertension (>21 mmHg) are provided immediate referral documentation to accredited secondary or tertiary ophthalmic hospitals.",
    {
      x: marginX + 14,
      y: discCardY + discCardHeight - 36,
      font: fontHelvetica,
      fontSize: 8,
      color: deepInk,
      maxWidth: contentWidth - 28,
      lineHeight: 11.5,
    }
  );

  drawFooter(page2, 2);

  // ==========================================
  // PAGE 3: FOUR-STAGE IMPLEMENTATION METHODOLOGY
  // ==========================================
  const page3 = pdfDoc.addPage([pageWidth, pageHeight]);
  page3.drawRectangle({ x: 0, y: 0, width: pageWidth, height: pageHeight, color: warmIvory });

  // Top Deep Ink Banner
  const headerHeightP3 = 64;
  page3.drawRectangle({
    x: 0,
    y: pageHeight - headerHeightP3,
    width: pageWidth,
    height: headerHeightP3,
    color: deepInk,
  });

  page3.drawText("SECTION 2: FOUR-STAGE IMPLEMENTATION METHODOLOGY", {
    x: marginX,
    y: pageHeight - 34,
    size: 12,
    font: fontBold,
    color: white,
  });

  page3.drawText("A Seamless, Zero-Downtime Execution Model Designed for Enterprise Campuses", {
    x: marginX,
    y: pageHeight - 49,
    size: 8.5,
    font: fontHelvetica,
    color: subtleAmber,
  });

  // Section Header
  let curP3Y = pageHeight - headerHeightP3 - 22;
  page3.drawText("2.1 End-to-End Enterprise Camp Lifecycle", {
    x: marginX,
    y: curP3Y,
    size: 11.5,
    font: fontBold,
    color: deepInk,
  });
  curP3Y -= 14;

  curP3Y = drawWrappedTextBlock(
    page3,
    "Our structured operational roadmap ensures predictable clinician throughput, respectful employee scheduling, and complete data integrity from onboarding through post-camp executive reporting:",
    {
      x: marginX,
      y: curP3Y,
      font: fontHelvetica,
      fontSize: 8.5,
      color: clinicalSlate,
      maxWidth: contentWidth,
      lineHeight: 12,
    }
  );
  curP3Y -= 10;

  // 4 Full-Width Process Cards
  const stageCardHeight = 135;
  const stageCardGap = 12;

  const stages = [
    {
      step: "STAGE 1",
      title: "Requirements & Workforce Profiling",
      bullets: [
        "Headcount & Location Scoping: Define campus locations, total employee population, and shift timings.",
        "Facility Sizing: Identify quiet indoor room (approx. 12x10 ft minimum) with ambient light control and standard 230V sockets.",
        "Diagnostic Tier Selection: Customize specialized testing modules including tonometry and ergonomic seminars.",
      ],
    },
    {
      step: "STAGE 2",
      title: "Staffing Calibration & Self-Service Slot Booking",
      bullets: [
        "Self-Service Pre-Registration: Custom corporate booking link allowing employees to self-select 15-minute slots.",
        "Clinical Team Assignment: Verified optometrists and clinical support assistants assigned based on target throughput.",
        "Equipment Mobilization: Certified, calibrated portable auto-refractor suites and sanitized trial frames dispatched.",
      ],
    },
    {
      step: "STAGE 3",
      title: "Professional On-Site Camp Execution",
      bullets: [
        "Hygienic Check-in: Contactless employee check-in and digital visual history recording.",
        "Comprehensive Testing: Distance/near visual acuity, auto-refraction, trial frame verification, and tear film check.",
        "Immediate Outcomes: Verified digital spectacle prescriptions and tailored ergonomic advice delivered on-site.",
      ],
    },
    {
      step: "STAGE 4",
      title: "Post-Camp Reporting & Referral Continuity",
      bullets: [
        "Specialist Hospital Referrals: Fast-track transfer documentation for staff requiring surgical or tertiary consultation.",
        "Aggregated Executive Analytics: Anonymized workforce ocular health summary delivered to HR and Medical Officers.",
        "Family Care Continuity: Optional at-home comprehensive eye examination vouchers for dependent aging parents.",
      ],
    },
  ];

  for (let i = 0; i < stages.length; i++) {
    const cardY = curP3Y - (i + 1) * stageCardHeight - i * stageCardGap;

    page3.drawRectangle({
      x: marginX,
      y: cardY,
      width: contentWidth,
      height: stageCardHeight,
      color: cardBg,
      borderColor: clinicalTeal,
      borderWidth: 0.8,
    });

    // Stage pill & title bar
    page3.drawRectangle({
      x: marginX,
      y: cardY + stageCardHeight - 26,
      width: contentWidth,
      height: 26,
      color: deepInk,
    });

    page3.drawText(stages[i].step, {
      x: marginX + 14,
      y: cardY + stageCardHeight - 18,
      size: 9,
      font: fontBold,
      color: subtleAmber,
    });

    page3.drawText(`: ${stages[i].title}`, {
      x: marginX + 64,
      y: cardY + stageCardHeight - 18,
      size: 9,
      font: fontBold,
      color: white,
    });

    let bulletY = cardY + stageCardHeight - 44;
    for (const bullet of stages[i].bullets) {
      bulletY = drawWrappedTextBlock(page3, `• ${bullet}`, {
        x: marginX + 16,
        y: bulletY,
        font: fontHelvetica,
        fontSize: 8,
        color: deepInk,
        maxWidth: contentWidth - 32,
        lineHeight: 11.5,
        indent: 10,
      });
      bulletY -= 5;
    }
  }

  drawFooter(page3, 3);

  // ==========================================
  // PAGE 4: ORGANISING A CAMP, CONTACT & COMPLIANCE
  // ==========================================
  const page4 = pdfDoc.addPage([pageWidth, pageHeight]);
  page4.drawRectangle({ x: 0, y: 0, width: pageWidth, height: pageHeight, color: warmIvory });

  // Top Teal Banner
  const headerHeightP4 = 64;
  page4.drawRectangle({
    x: 0,
    y: pageHeight - headerHeightP4,
    width: pageWidth,
    height: headerHeightP4,
    color: clinicalTeal,
  });

  page4.drawText("SECTION 3: ORGANISING YOUR CORPORATE VISION CAMP", {
    x: marginX,
    y: pageHeight - 34,
    size: 12,
    font: fontBold,
    color: white,
  });

  page4.drawText("Checklist, Coordination Protocol, and Tailored Proposal Initiation", {
    x: marginX,
    y: pageHeight - 49,
    size: 8.5,
    font: fontHelvetica,
    color: softSage,
  });

  // Section 1: Checklist Card
  const checkCardY = pageHeight - headerHeightP4 - 210;
  const checkCardHeight = 194;

  page4.drawRectangle({
    x: marginX,
    y: checkCardY,
    width: contentWidth,
    height: checkCardHeight,
    color: cardBg,
    borderColor: clinicalTeal,
    borderWidth: 0.8,
  });

  page4.drawRectangle({
    x: marginX,
    y: checkCardY + checkCardHeight - 26,
    width: contentWidth,
    height: 26,
    color: softSage,
  });

  page4.drawText("Checklist for Enterprise Health & Wellness Organisers", {
    x: marginX + 14,
    y: checkCardY + checkCardHeight - 18,
    size: 10,
    font: fontBold,
    color: deepInk,
  });

  const checklistItems = [
    { num: "1", title: "Primary Office Campus:", text: "Physical address, multi-building distribution, and visitor security protocol." },
    { num: "2", title: "Workforce Population:", text: "Target headcount (calibrated at 40–60 employees per optometrist per day)." },
    { num: "3", title: "Preferred Dates:", text: "Target execution dates or wellness month (e.g., Annual Health Week drive)." },
    { num: "4", title: "Room Allocation:", text: "Quiet conference room (min. 12x10 ft) with ambient lighting control and power points." },
    { num: "5", title: "Supplemental Options:", text: "Executive senior home visits, glaucoma pressure screening, or wellness webinars." },
  ];

  let curCheckY = checkCardY + checkCardHeight - 42;
  for (const item of checklistItems) {
    page4.drawText(`[${item.num}]`, {
      x: marginX + 16,
      y: curCheckY,
      size: 8.5,
      font: fontBold,
      color: clinicalTeal,
    });

    page4.drawText(item.title, {
      x: marginX + 34,
      y: curCheckY,
      size: 8.5,
      font: fontBold,
      color: deepInk,
    });

    page4.drawText(item.text, {
      x: marginX + 155,
      y: curCheckY,
      size: 8,
      font: fontHelvetica,
      color: deepInk,
    });

    curCheckY -= 28;
  }

  // Section 2: Institutional Coordination & Proposal Request Card
  const bookingCardY = checkCardY - 212;
  const bookingCardHeight = 196;

  page4.drawRectangle({
    x: marginX,
    y: bookingCardY,
    width: contentWidth,
    height: bookingCardHeight,
    color: deepInk,
  });

  page4.drawRectangle({
    x: marginX,
    y: bookingCardY,
    width: 6,
    height: bookingCardHeight,
    color: subtleAmber,
  });

  page4.drawText("REQUEST A TAILORED CORPORATE PROPOSAL", {
    x: marginX + 22,
    y: bookingCardY + bookingCardHeight - 26,
    size: 12,
    font: fontBold,
    color: subtleAmber,
  });

  page4.drawText("Our institutional health desk compiles tailored camp proposals with throughput estimates within 24 business hours.", {
    x: marginX + 22,
    y: bookingCardY + bookingCardHeight - 42,
    size: 8.5,
    font: fontHelvetica,
    color: warmIvory,
  });

  const contactBlocks = [
    { label: "Toll-Free Corporate Desk", val: "1800 209 4393 (Mon–Sat, 8:00 AM – 7:00 PM IST)" },
    { label: "Official Institutional Email", val: "corporate@ocuhome.in" },
    { label: "Online Proposal Portal", val: "www.ocuhome.in/corporate-camps" },
    { label: "Registered Corporate Entity", val: "OcuHome Clinical Eye Care Systems Pvt. Ltd., New Delhi, India" },
    { label: "Active Operational Hubs", val: "Delhi NCR • Mumbai & MMR • Bengaluru • Hyderabad • Pune" },
  ];

  let curContactY = bookingCardY + bookingCardHeight - 64;
  for (const block of contactBlocks) {
    page4.drawText(`• ${block.label}:`, {
      x: marginX + 22,
      y: curContactY,
      size: 8.5,
      font: fontBold,
      color: white,
    });

    page4.drawText(block.val, {
      x: marginX + 185,
      y: curContactY,
      size: 8.5,
      font: fontHelvetica,
      color: subtleAmber,
    });

    curContactY -= 22;
  }

  // Section 3: Clinical Quality & Regulatory Governance Standards
  const govCardY = 75;
  const govCardHeight = bookingCardY - govCardY - 14;

  page4.drawRectangle({
    x: marginX,
    y: govCardY,
    width: contentWidth,
    height: govCardHeight,
    color: softSage,
    borderColor: clinicalTeal,
    borderWidth: 1,
  });

  page4.drawText("Clinical Quality, Data Protection & Regulatory Compliance:", {
    x: marginX + 14,
    y: govCardY + govCardHeight - 22,
    size: 9.5,
    font: fontBold,
    color: deepInk,
  });

  const govItems = [
    { title: "Degree-Qualified Optometrists", text: "Every attending clinician holds a university degree in optometry (B.Optom / M.Optom) and active council registration." },
    { title: "Calibrated Instrumentation", text: "Portable auto-refractors, tonometers, and trial lenses comply with ISO/CE optical standards and documented maintenance schedules." },
    { title: "Statutory Data Protection", text: "Employee health information is managed in strict compliance with the Digital Personal Data Protection Act (DPDP) 2023 and DISHA standards." },
  ];

  let curGovY = govCardY + govCardHeight - 38;
  for (const gov of govItems) {
    page4.drawText(`• ${gov.title}:`, {
      x: marginX + 14,
      y: curGovY,
      size: 8,
      font: fontBold,
      color: deepInk,
    });

    page4.drawText(gov.text, {
      x: marginX + 155,
      y: curGovY,
      size: 7.8,
      font: fontHelvetica,
      color: deepInk,
    });

    curGovY -= 17;
  }

  drawFooter(page4, 4);

  // Save the PDF
  const pdfBytes = await pdfDoc.save();

  // Save to both paths for backwards compatibility and links
  const outPath1 = path.join(process.cwd(), "public", "downloads", "ocuhome-corporate-eye-camps-brochure.pdf");
  const outPath2 = path.join(process.cwd(), "public", "downloads", "ocuhome-corporate-eyecare-brochure.pdf");

  fs.writeFileSync(outPath1, pdfBytes);
  fs.writeFileSync(outPath2, pdfBytes);

  console.log("Successfully generated clean 4-page corporate brochure. Size:", pdfBytes.length, "bytes");
}

generateCorporateBrochure().catch(console.error);
