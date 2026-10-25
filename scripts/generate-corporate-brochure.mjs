import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateCorporateBrochure() {
  const pdfDoc = await PDFDocument.create();
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Deep Ink (#16282C), Clinical Teal (#397E7A), Warm Ivory (#F8F7F2), Subtle Amber (#D9AE70)
  const deepInk = rgb(22 / 255, 40 / 255, 44 / 255);
  const clinicalTeal = rgb(57 / 255, 126 / 255, 122 / 255);
  const clinicalSlate = rgb(85 / 255, 104 / 255, 107 / 255);
  const subtleAmber = rgb(217 / 255, 174 / 255, 112 / 255);
  const warmIvory = rgb(248 / 255, 247 / 255, 242 / 255);
  const softSage = rgb(225 / 255, 235 / 255, 229 / 255);
  const white = rgb(1, 1, 1);

  // Load and embed the corporate screening photograph
  const imagePath = path.join(process.cwd(), "public", "images", "corporate-eye-screening.jpg");
  let embeddedImage = null;
  if (fs.existsSync(imagePath)) {
    const imageBytes = fs.readFileSync(imagePath);
    embeddedImage = await pdfDoc.embedJpg(imageBytes);
  }

  // ==========================================
  // PAGE 1: COVER
  // ==========================================
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  // Background
  page1.drawRectangle({ x: 0, y: 0, width, height, color: warmIvory });

  // Top Deep Ink Banner
  page1.drawRectangle({ x: 0, y: height - 140, width, height: 140, color: deepInk });

  page1.drawText("OCUHOME CLINICAL EYE CARE", {
    x: 48,
    y: height - 54,
    size: 22,
    font: fontBold,
    color: white,
  });

  page1.drawText("CORPORATE EYE CAMPS & EMPLOYEE VISION CARE", {
    x: 48,
    y: height - 80,
    size: 13,
    font: fontBold,
    color: subtleAmber,
  });

  page1.drawText("Comprehensive On-Site Ergonomic Vision Screenings for Modern Workplaces in India", {
    x: 48,
    y: height - 104,
    size: 10,
    font: fontHelvetica,
    color: white,
  });

  // Embed photo on Page 1 if available
  if (embeddedImage) {
    const imgWidth = width - 96;
    const imgHeight = (imgWidth * 9) / 16;
    page1.drawImage(embeddedImage, {
      x: 48,
      y: height - 160 - imgHeight,
      width: imgWidth,
      height: imgHeight,
    });

    page1.drawRectangle({
      x: 48,
      y: height - 160 - imgHeight,
      width: imgWidth,
      height: 20,
      color: deepInk,
    });

    page1.drawText("Figure 1: On-site vision screening conducted with calibrated portable auto-refractometer", {
      x: 56,
      y: height - 160 - imgHeight + 6,
      size: 8,
      font: fontOblique,
      color: white,
    });
  }

  // Cover narrative box
  const coverBoxY = 160;
  page1.drawRectangle({
    x: 48,
    y: coverBoxY,
    width: width - 96,
    height: 180,
    color: white,
    borderColor: clinicalTeal,
    borderWidth: 1,
  });

  page1.drawText("Executive Summary & Clinical Philosophy", {
    x: 64,
    y: coverBoxY + 150,
    size: 12,
    font: fontBold,
    color: deepInk,
  });

  const coverLines = [
    "Modern knowledge workers face high digital display loads leading to asthenopia (eye strain),",
    "uncorrected refractive errors, and accelerated dry eye symptoms. Our corporate eye camp program",
    "brings hospital-calibrated primary screening directly into your enterprise campus or regional office.",
    "",
    "Key Operational Pillars:",
    "• Non-disruptive, organized 15-minute examination slots per employee.",
    "• Fully qualified, degree-holding optometrists deploying calibrated portable refractometers.",
    "• Dual-tier clinical oversight: Remote ophthalmologist review of complex refractive or retinal flags.",
    "• Transparent triage: Immediate referral pathways to tertiary eye hospitals for surgical or urgent care.",
  ];

  let textY = coverBoxY + 130;
  for (const line of coverLines) {
    page1.drawText(line, {
      x: 64,
      y: textY,
      size: 9,
      font: line.startsWith("•") || line.startsWith("Key") ? fontBold : fontHelvetica,
      color: deepInk,
    });
    textY -= 14;
  }

  // Footer Page 1
  page1.drawText("OcuHome Corporate Brochure | Confidential | Operating in Delhi NCR, Mumbai, Bengaluru, Hyderabad & Pune", {
    x: 48,
    y: 36,
    size: 8,
    font: fontOblique,
    color: clinicalSlate,
  });

  // ==========================================
  // PAGE 2: AVAILABLE SERVICES
  // ==========================================
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  page2.drawRectangle({ x: 0, y: 0, width, height, color: warmIvory });

  page2.drawRectangle({ x: 0, y: height - 70, width, height: 70, color: clinicalTeal });
  page2.drawText("SECTION 1: CLINICAL SERVICES OFFERED DURING CORPORATE CAMPS", {
    x: 48,
    y: height - 44,
    size: 13,
    font: fontBold,
    color: white,
  });

  page2.drawText("1.1 Workplace Vision & Ergonomic Assessment", {
    x: 48,
    y: height - 105,
    size: 12,
    font: fontBold,
    color: deepInk,
  });

  const p2Text = [
    "Every corporate camp is configured to match organizational scale and employee health priorities:",
    "",
    "1. High-Precision Visual Acuity Testing",
    "   Distance and near visual acuity measured using illuminated LogMAR / Snellen optotypes under",
    "   standardized lighting conditions to identify uncorrected myopia, hyperopia, and astigmatism.",
    "",
    "2. Objective & Subjective Refraction",
    "   Conducted with calibrated handheld auto-refractors and portable trial lens sets. Employees receive",
    "   accurate, verified spectacle prescriptions for standard and computer-distance glasses.",
    "",
    "3. Digital Eye Strain & Dry Eye Evaluation",
    "   Assessment of tear film break-up time (TBUT), blink rate awareness, and ergonomic screen-distance",
    "   recommendations tailored to the employee's specific workstation setup.",
    "",
    "4. Glaucoma & Pressure Baseline Triage",
    "   Non-contact / rebound tonometry available for senior staff and employees over 40 to identify elevated",
    "   intraocular pressure (IOP) that may indicate early, asymptomatic open-angle glaucoma.",
    "",
    "5. Eye-Health Awareness Seminars & Workshops",
    "   Interactive 30-minute presentations led by optometrists covering the 20-20-20 rule, blue-light reality,",
    "   proper contact lens hygiene, and nutrition for long-term retinal health.",
    "",
    "6. Anonymized Corporate Wellness Analytics",
    "   HR and medical officers receive an aggregated, anonymized report summarizing workforce refractive",
    "   prevalence, ergonomic risk factors, and recommended institutional lighting improvements.",
  ];

  let p2Y = height - 130;
  for (const line of p2Text) {
    const isHeading = line.match(/^[1-6]\./);
    page2.drawText(line, {
      x: 48,
      y: p2Y,
      size: isHeading ? 10 : 9,
      font: isHeading ? fontBold : fontHelvetica,
      color: isHeading ? clinicalTeal : deepInk,
    });
    p2Y -= 15;
  }

  // Clinical boundary note at bottom of Page 2
  page2.drawRectangle({
    x: 48,
    y: 70,
    width: width - 96,
    height: 60,
    color: softSage,
    borderColor: clinicalTeal,
    borderWidth: 0.5,
  });

  page2.drawText("Clinical Scope Boundary Disclaimer:", {
    x: 60,
    y: 114,
    size: 9,
    font: fontBold,
    color: deepInk,
  });

  page2.drawText(
    "Corporate eye camps provide non-invasive primary vision screening and refraction. They do not constitute a full hospital",
    { x: 60, y: 98, size: 8, font: fontHelvetica, color: deepInk }
  );
  page2.drawText(
    "surgical evaluation. Employees presenting with suspected retinal disease, cataracts, or severe IOP are referred to clinics.",
    { x: 60, y: 84, size: 8, font: fontHelvetica, color: deepInk }
  );

  page2.drawText("Page 2 of 4 | OcuHome Corporate Eye Camps | www.ocuhome.in", {
    x: 48,
    y: 36,
    size: 8,
    font: fontOblique,
    color: clinicalSlate,
  });

  // ==========================================
  // PAGE 3: HOW THE PROGRAMME WORKS
  // ==========================================
  const page3 = pdfDoc.addPage([595.28, 841.89]);
  page3.drawRectangle({ x: 0, y: 0, width, height, color: warmIvory });

  page3.drawRectangle({ x: 0, y: height - 70, width, height: 70, color: deepInk });
  page3.drawText("SECTION 2: FOUR-STAGE IMPLEMENTATION METHODOLOGY", {
    x: 48,
    y: height - 44,
    size: 13,
    font: fontBold,
    color: white,
  });

  const stages = [
    {
      stage: "Stage 1: Share Your Requirements & Workforce Profile",
      desc: [
        "The corporate HR team or facility administrator connects with our institutional desk to specify:",
        "• Office locations, total headcount, and operational shift timings.",
        "• Expected participation rate and preferred camp duration (single-day or multi-day).",
        "• Dedicated room requirements (a quiet conference room or training hall with standard power sockets).",
      ],
    },
    {
      stage: "Stage 2: Plan Scope, Staffing & Digital Slot Scheduling",
      desc: [
        "We develop a tailored operational plan ensuring zero office downtime:",
        "• Online pre-registration link provided to employees for self-scheduling 15-minute slots.",
        "• Allocation of verified optometrists and clinical support assistants based on throughput.",
        "• Mobilization of calibrated diagnostic kits, sanitized trial frames, and protective consumables.",
      ],
    },
    {
      stage: "Stage 3: Professional On-Site Execution",
      desc: [
        "On the scheduled camp dates, our certified clinical team manages the full workflow:",
        "• Rapid, hygienic employee check-in and digital visual history recording.",
        "• Complete refraction and anterior segment screening in a comfortable, professional manner.",
        "• Immediate issuance of digital prescription notes and ergonomic guidance.",
      ],
    },
    {
      stage: "Stage 4: Post-Camp Reporting & Specialist Referral Support",
      desc: [
        "Care continues beyond the camp conclusion:",
        "• Employees requiring secondary ophthalmic care receive direct referral documentation.",
        "• Optional home-visit extension for leadership teams and dependent aging family members.",
        "• Aggregated executive health summary provided to corporate medical and HR leadership.",
      ],
    },
  ];

  let p3Y = height - 105;
  for (const s of stages) {
    page3.drawText(s.stage, {
      x: 48,
      y: p3Y,
      size: 11,
      font: fontBold,
      color: clinicalTeal,
    });
    p3Y -= 16;

    for (const d of s.desc) {
      page3.drawText(d, {
        x: 60,
        y: p3Y,
        size: 9,
        font: d.startsWith("•") ? fontBold : fontHelvetica,
        color: deepInk,
      });
      p3Y -= 14;
    }
    p3Y -= 12;
  }

  page3.drawText("Page 3 of 4 | OcuHome Corporate Eye Camps | www.ocuhome.in", {
    x: 48,
    y: 36,
    size: 8,
    font: fontOblique,
    color: clinicalSlate,
  });

  // ==========================================
  // PAGE 4: ORGANISING A CAMP & CONTACT
  // ==========================================
  const page4 = pdfDoc.addPage([595.28, 841.89]);
  page4.drawRectangle({ x: 0, y: 0, width, height, color: warmIvory });

  page4.drawRectangle({ x: 0, y: height - 70, width, height: 70, color: clinicalTeal });
  page4.drawText("SECTION 3: ORGANISING YOUR CORPORATE VISION CAMP", {
    x: 48,
    y: height - 44,
    size: 13,
    font: fontBold,
    color: white,
  });

  page4.drawText("Checklist for Corporate Organisers", {
    x: 48,
    y: height - 105,
    size: 12,
    font: fontBold,
    color: deepInk,
  });

  const checklist = [
    "To initiate a corporate proposal, please have the following information available:",
    "1. Primary Office Address & Campus Location (Metro city and neighborhood).",
    "2. Approximate Employee Count to be screened (typically 40–60 employees per optometrist per day).",
    "3. Target Dates or Preferred Month (e.g. Health & Safety Month, Annual Wellness Drive).",
    "4. Facility Availability: A clean, quiet indoor room (approx 12x10 ft minimum) with ambient light control.",
    "5. Need for Additional Services: Glaucoma IOP screening, executive home-visit vouchers, or webinars.",
  ];

  let p4Y = height - 130;
  for (const item of checklist) {
    page4.drawText(item, {
      x: 48,
      y: p4Y,
      size: 9,
      font: item.match(/^[1-5]\./) ? fontBold : fontHelvetica,
      color: deepInk,
    });
    p4Y -= 16;
  }

  // Institutional Coordination & Booking Card
  const bookingCardY = height - 370;
  page4.drawRectangle({
    x: 48,
    y: bookingCardY,
    width: width - 96,
    height: 180,
    color: deepInk,
  });

  page4.drawText("REQUEST A TAILORED CORPORATE PROPOSAL", {
    x: 68,
    y: bookingCardY + 144,
    size: 13,
    font: fontBold,
    color: subtleAmber,
  });

  const contactDetails = [
    "Our corporate health desk responds with a structured proposal within 24 business hours.",
    "",
    "Institutional Health Coordinator:",
    "• Toll-Free Corporate Desk: 1800 209 4393 (Mon–Sat, 8:00 AM – 7:00 PM IST)",
    "• Official Corporate Email: corporate@ocuhome.in",
    "• Online Proposal Portal: www.ocuhome.in/corporate-camps",
    "",
    "Registered Office: OcuHome Clinical Eye Care Systems Pvt. Ltd.",
    "Serving Enterprises Across Delhi NCR, Mumbai & MMR, Bengaluru, Hyderabad, and Pune.",
  ];

  let cY = bookingCardY + 120;
  for (const line of contactDetails) {
    page4.drawText(line, {
      x: 68,
      y: cY,
      size: 9,
      font: line.startsWith("•") || line.startsWith("Institutional") ? fontBold : fontHelvetica,
      color: white,
    });
    cY -= 14;
  }

  // Quality & Accreditation Statement
  page4.drawText("Clinical Quality & Safety Standards:", {
    x: 48,
    y: bookingCardY - 30,
    size: 10,
    font: fontBold,
    color: deepInk,
  });

  page4.drawText("• Practitioners hold university degrees in optometry (B.Optom / M.Optom) and state council registrations.", {
    x: 48,
    y: bookingCardY - 48,
    size: 8.5,
    font: fontHelvetica,
    color: clinicalSlate,
  });

  page4.drawText("• Medical instruments comply with ISO/CE optical standards and undergo documented calibration protocols.", {
    x: 48,
    y: bookingCardY - 64,
    size: 8.5,
    font: fontHelvetica,
    color: clinicalSlate,
  });

  page4.drawText("• Patient data is handled in strict compliance with the Digital Personal Data Protection Act (DPDP) and DISHA guidelines.", {
    x: 48,
    y: bookingCardY - 80,
    size: 8.5,
    font: fontHelvetica,
    color: clinicalSlate,
  });

  page4.drawText("Page 4 of 4 | OcuHome Corporate Eye Camps | www.ocuhome.in", {
    x: 48,
    y: 36,
    size: 8,
    font: fontOblique,
    color: clinicalSlate,
  });

  const pdfBytes = await pdfDoc.save();

  // Save to both paths for backwards compatibility and exact prompt requirements
  const outPath1 = path.join(process.cwd(), "public", "downloads", "ocuhome-corporate-eye-camps-brochure.pdf");
  const outPath2 = path.join(process.cwd(), "public", "downloads", "ocuhome-corporate-eyecare-brochure.pdf");

  fs.writeFileSync(outPath1, pdfBytes);
  fs.writeFileSync(outPath2, pdfBytes);

  console.log("Successfully generated 4-page corporate brochure. Size:", pdfBytes.length, "bytes");
}

generateCorporateBrochure().catch(console.error);
