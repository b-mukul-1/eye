import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateBrochure() {
  const pdfDoc = await PDFDocument.create();
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Deep Ink (#16282C), Clinical Teal (#397E7A), Warm Ivory (#F8F7F2)
  const deepInk = rgb(22 / 255, 40 / 255, 44 / 255);
  const clinicalTeal = rgb(57 / 255, 126 / 255, 122 / 255);
  const clinicalSlate = rgb(85 / 255, 104 / 255, 107 / 255);
  const subtleAmber = rgb(217 / 255, 174 / 255, 112 / 255);
  const warmIvory = rgb(248 / 255, 247 / 255, 242 / 255);
  const white = rgb(1, 1, 1);

  // PAGE 1: COVER & CLINICAL PHILOSOPHY
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  // Background tint
  page1.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: warmIvory,
  });

  // Top header bar
  page1.drawRectangle({
    x: 0,
    y: height - 120,
    width,
    height: 120,
    color: deepInk,
  });

  page1.drawText("OCUHOME CLINICAL EYE CARE", {
    x: 48,
    y: height - 52,
    size: 20,
    font: fontBold,
    color: white,
  });

  page1.drawText("Comprehensive Home & Corporate Vision Assessment Protocols", {
    x: 48,
    y: height - 76,
    size: 11,
    font: fontHelvetica,
    color: subtleAmber,
  });

  // Body content - Page 1
  page1.drawText("1. Clinical Positioning & Medical Governance", {
    x: 48,
    y: height - 160,
    size: 14,
    font: fontBold,
    color: deepInk,
  });

  const p1Text = [
    "OcuHome is a clinically structured eye-care platform designed to deliver calibrated optometric",
    "examinations directly to homes, senior living residences, and workplace campuses across India.",
    "",
    "Our service model is grounded in medical integrity and dual-tier clinical oversight:",
    "• On-Site Examinations: Conducted by degree-qualified optometrists equipped with certified,",
    "  regularly calibrated portable diagnostic suites.",
    "• Ophthalmologist Review: Clinical refractions, slit-lamp observations, and digital retinal fundus",
    "  photographs are reviewed remotely by consulting ophthalmologists.",
    "• Transparent Triage: We explicitly distinguish home-appropriate examinations from procedures",
    "  requiring specialized tertiary care. Surgical procedures, lasers, and acute emergency cases are",
    "  directed immediately to accredited tertiary hospitals.",
    "",
    "2. Clinical Diagnostics Deployed at the Bedside",
    "Each mobile diagnostic suite includes:",
    "1. Precision Subjective & Objective Refraction (Full trial sets, portable auto-refractor)",
    "2. Handheld Slit-Lamp Biomicroscopy (Anterior segment, cornea, tear film, and crystalline lens)",
    "3. Rebound / Non-Contact Tonometry (Calibrated IOP monitoring for glaucoma risk baseline)",
    "4. Portable Non-Mydriatic Digital Fundus Imaging (Diabetic retinopathy and macula screening)",
    "5. Pupillary Reflex & Extraocular Motility Assessment (Neurological and strabismus checks)",
  ];

  let currentY = height - 190;
  for (const line of p1Text) {
    if (line.startsWith("2.")) {
      currentY -= 10;
      page1.drawText(line, {
        x: 48,
        y: currentY,
        size: 14,
        font: fontBold,
        color: deepInk,
      });
      currentY -= 20;
    } else {
      page1.drawText(line, {
        x: 48,
        y: currentY,
        size: 10,
        font: line.startsWith("•") || line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") || line.startsWith("4.") || line.startsWith("5.") ? fontBold : fontHelvetica,
        color: deepInk,
      });
      currentY -= 16;
    }
  }

  // Footer on Page 1
  page1.drawText("OcuHome Corporate Brochure | Confidential Clinical Overview | www.ocuhome.in", {
    x: 48,
    y: 36,
    size: 8,
    font: fontOblique,
    color: clinicalSlate,
  });

  // PAGE 2: CORPORATE & FAMILY CARE TIERS
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  page2.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: warmIvory,
  });

  page2.drawRectangle({
    x: 0,
    y: height - 70,
    width,
    height: 70,
    color: clinicalTeal,
  });

  page2.drawText("CORPORATE & INSTITUTIONAL PROGRAMMES", {
    x: 48,
    y: height - 44,
    size: 16,
    font: fontBold,
    color: white,
  });

  page2.drawText("3. Workplace & Executive Eye-Health Screening", {
    x: 48,
    y: height - 110,
    size: 14,
    font: fontBold,
    color: deepInk,
  });

  const p2Text = [
    "Modern knowledge workers face pervasive digital eye strain, uncorrected astigmatism, and early",
    "dry eye disease. Our corporate on-site vision clinics bring hospital-grade screening to enterprise offices:",
    "",
    "• Ergonomic Visual Comfort Audits: Assessing screen distance, blue-light exposure, and dry eye indices.",
    "• Comprehensive Employee Vision Screenings: Fast, non-disruptive 15-minute examination slots.",
    "• Asymptomatic Glaucoma & Diabetes Triage: Elevated IOP and microvascular changes caught early.",
    "• Executive Home Care Add-on: Comprehensive bedside visits extended to senior leadership and",
    "  their dependent aging parents.",
    "",
    "4. Clinical Governance & Referral Architecture",
    "OcuHome never leaves a patient without a clear medical pathway:",
    "• Category A (Routine): Clear refraction issued, preventive ergonomics advised, annual follow-up.",
    "• Category B (Specialist Review): Borderline IOP or early lens opacity; ophthalmologist consult arranged.",
    "• Category C (Urgent Tertiary Referral): Retinal hemorrhage, acute high IOP (>26 mmHg), or",
    "  advanced visual field loss. Direct handoff to partner ophthalmic surgical facilities.",
    "",
    "5. Metropolitan Operational Coverage (India)",
    "Active service hubs: Delhi NCR, Mumbai & MMR, Bengaluru, Hyderabad, Pune, and Chennai.",
    "",
    "Clinical Inquiries & Corporate Scheduling:",
    "Toll-Free Patient Care: 1800 209 4393 | Email: corporate@ocuhome.in | Web: www.ocuhome.in",
  ];

  let currentY2 = height - 140;
  for (const line of p2Text) {
    if (line.startsWith("4.") || line.startsWith("5.")) {
      currentY2 -= 10;
      page2.drawText(line, {
        x: 48,
        y: currentY2,
        size: 14,
        font: fontBold,
        color: deepInk,
      });
      currentY2 -= 20;
    } else {
      page2.drawText(line, {
        x: 48,
        y: currentY2,
        size: 10,
        font: line.startsWith("•") ? fontBold : fontHelvetica,
        color: deepInk,
      });
      currentY2 -= 16;
    }
  }

  // Footer on Page 2
  page2.drawText("Page 2 of 2 | OcuHome Clinical Eye Care Systems Pvt. Ltd. | Reg. Office: New Delhi, India", {
    x: 48,
    y: 36,
    size: 8,
    font: fontOblique,
    color: clinicalSlate,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), "public", "downloads", "ocuhome-corporate-eyecare-brochure.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Generated brochure at:", outputPath, "Bytes:", pdfBytes.length);
}

generateBrochure().catch(console.error);
