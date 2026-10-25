export interface SpecialistProfile {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  registrationNumber: string;
  specialty: string;
  clinicalInterests: string[];
  experienceYears: number;
  languages: string[];
  consultationFormats: ("home-visit" | "clinic-appointment")[];
  clinicLocations: string[];
  photo: string;
  demonstrationNotice: string;
  availableNextDate: string;
  bio: string;
}

export const specialistProfiles: SpecialistProfile[] = [
  {
    id: "dr-ananya-rao",
    name: "Dr. Ananya Rao",
    title: "Senior Consulting Ophthalmologist",
    qualifications: "MBBS, MS (Ophthalmology), DNB, FICO (Cornea & Anterior Segment)",
    registrationNumber: "Schema Sample (e.g. DMC-48291)",
    specialty: "Ophthalmology & Surgical Triage",
    clinicalInterests: [
      "Corneal Diseases & Dry Eye",
      "Cataract Evaluation & IOL Calculation",
      "Glaucoma Pressure Triage",
      "Ophthalmic Report Verification",
    ],
    experienceYears: 14,
    languages: ["English", "Hindi", "Kannada"],
    consultationFormats: ["clinic-appointment"],
    clinicLocations: ["South Extension Clinic, New Delhi", "Indiranagar Center, Bengaluru"],
    photo: "/images/specialist-dr-radhika-sharma.jpg",
    demonstrationNotice: "Demonstration profile illustrating senior ophthalmology oversight and countersignature workflow.",
    availableNextDate: "Tuesday, 28 Oct 2026",
    bio: "Senior cornea and anterior segment specialist supervising diagnostic protocols, digital fundus triage, and hospital surgical referral pathways.",
  },
  {
    id: "optom-priya-sharma",
    name: "Priya Sharma, B.Optom",
    title: "Senior Clinical Optometrist & Pediatric Specialist",
    qualifications: "B.Optom (Elite School of Optometry), Fellowship in Binocular Vision",
    registrationNumber: "Schema Sample (e.g. OCI-OPT-10928)",
    specialty: "Amblyopia & Vision Therapy",
    clinicalInterests: [
      "Pediatric Amblyopia Assessment",
      "Binocular Vision Anomalies & Strabismus",
      "Accommodative Dysfunction",
      "Parental Vision Therapy Guidance",
    ],
    experienceYears: 9,
    languages: ["English", "Hindi", "Punjabi"],
    consultationFormats: ["home-visit", "clinic-appointment"],
    clinicLocations: ["Saket Center, New Delhi", "Sector 29, Gurugram"],
    photo: "/images/specialist-dr-priya-nair.jpg",
    demonstrationNotice: "Demonstration profile illustrating qualified pediatric optometry and binocular vision therapy services.",
    availableNextDate: "Wednesday, 29 Oct 2026",
    bio: "Specializes in age-appropriate visual development testing, stereopsis evaluation, and home-guided binocular vision exercises for children.",
  },
  {
    id: "optom-vikram-menon",
    name: "Vikram Menon, M.Optom",
    title: "Lead Contact Lens & Cornea Specialist",
    qualifications: "M.Optom, FIACLE (International Association of Contact Lens Educators)",
    registrationNumber: "Schema Sample (e.g. KMC-OPT-7721)",
    specialty: "Contact Lens Fitting & Anterior Segment",
    clinicalInterests: [
      "Specialty Contact Lenses (Toric, Multifocal)",
      "Rigid Gas Permeable (RGP) & Scleral Lenses",
      "Keratoconus Contact Lens Rehabilitation",
      "Corneal Surface Slit-Lamp Biomicroscopy",
    ],
    experienceYears: 11,
    languages: ["English", "Malayalam", "Tamil", "Hindi"],
    consultationFormats: ["clinic-appointment", "home-visit"],
    clinicLocations: ["Koramangala Center, Bengaluru", "Bandra West, Mumbai"],
    photo: "/images/contact-lens-assessment.jpg",
    demonstrationNotice: "Demonstration profile illustrating specialty contact lens fitting and corneal health verification.",
    availableNextDate: "Thursday, 30 Oct 2026",
    bio: "Extensive expertise in customized soft, toric, and rigid gas permeable contact lens assessment, safe insertion/removal training, and corneal integrity checks.",
  },
  {
    id: "mr-rajesh-kulkarni",
    name: "Rajesh Kulkarni, B.Optom, BCO",
    title: "Board Certified Clinical Ocularist",
    qualifications: "B.Optom, Certified Ocularist (Ocular Prosthetics)",
    registrationNumber: "Schema Sample (e.g. AIOC-7041)",
    specialty: "Prosthetic Eye Services & Anophthalmic Care",
    clinicalInterests: [
      "Custom Hand-Painted Acrylic Ocular Prostheses",
      "Scleral Shells for Phthisical Eyes",
      "Pediatric Microphthalmia Expansion",
      "Prosthetic Hygiene & Socket Health Maintenance",
    ],
    experienceYears: 16,
    languages: ["English", "Marathi", "Hindi"],
    consultationFormats: ["clinic-appointment"],
    clinicLocations: ["Bandra West Specialist Suite, Mumbai", "Shivajinagar Clinic, Pune"],
    photo: "/images/prosthetic-eye-consultation.jpg",
    demonstrationNotice: "Demonstration profile illustrating certified custom ocular prosthetic consultations and fitting coordination.",
    availableNextDate: "Friday, 31 Oct 2026",
    bio: "Compassionate ocularist dedicated to restorative facial symmetry, custom impression fitting, and long-term socket comfort for anophthalmic patients.",
  },
  {
    id: "optom-sunita-deshmukh",
    name: "Sunita Deshmukh, M.Optom",
    title: "Low Vision Rehabilitation Specialist",
    qualifications: "M.Optom, Fellowship in Low Vision Care (LV Prasad Eye Institute)",
    registrationNumber: "Schema Sample (e.g. MMC-OPT-9102)",
    specialty: "Low Vision Assessment & Visual Rehabilitation",
    clinicalInterests: [
      "Functional Vision & Contrast Sensitivity Evaluation",
      "Optical & Digital Video Magnifier Prescription",
      "Macular Degeneration (AMD) & Diabetic Vision Support",
      "Workplace & Home Lighting Environmental Ergonomics",
    ],
    experienceYears: 12,
    languages: ["English", "Hindi", "Marathi"],
    consultationFormats: ["clinic-appointment", "home-visit"],
    clinicLocations: ["Central Delhi Clinic", "Koramangala Center, Bengaluru"],
    photo: "/images/low-vision-assessment.jpg",
    demonstrationNotice: "Demonstration profile illustrating low vision rehabilitation and assistive optical device assessment.",
    availableNextDate: "Saturday, 1 Nov 2026",
    bio: "Helps patients with irreversible sight impairment optimize remaining functional vision through bespoke magnification aids, high-contrast training, and environmental modifications.",
  },
  {
    id: "optom-neha-verma",
    name: "Neha Verma, B.Optom",
    title: "Lead Optometrist — Mobile Care & Refraction",
    qualifications: "B.Optom, Trained in Portable Clinical Diagnostics",
    registrationNumber: "Schema Sample (e.g. OCI-OPT-14221)",
    specialty: "Primary Eye Care & Senior Home Visits",
    clinicalInterests: [
      "Bedside Subjective & Objective Refraction",
      "Handheld Slit-Lamp Biomicroscopy",
      "Rebound Tonometry (Glaucoma Baseline)",
      "Digital Non-Mydriatic Fundus Screening",
    ],
    experienceYears: 8,
    languages: ["English", "Hindi"],
    consultationFormats: ["home-visit"],
    clinicLocations: ["Delhi NCR Mobile Dispatch Unit"],
    photo: "/images/hero-home-exam.jpg",
    demonstrationNotice: "Demonstration profile illustrating mobile home-visit optometric examinations.",
    availableNextDate: "Monday, 27 Oct 2026",
    bio: "Delivers comprehensive, unhurried bedside eye assessments for elderly and mobility-restricted individuals using sanitized, hospital-calibrated equipment.",
  },
];

export const specialistCategories = [
  {
    id: "ophthalmology",
    name: "Ophthalmology Consultation",
    lead: "Medical & surgical eye evaluation",
    description: "Consultation with senior eye surgeons for cataract staging, glaucoma management, diabetic retinal review, and surgical referral planning.",
    careSettings: ["clinic-appointment"],
    typicalDuration: "30–45 mins",
  },
  {
    id: "optometry",
    name: "Optometry & General Refraction",
    lead: "Comprehensive bedside eye examinations",
    description: "Distance and near subjective refraction, dry/cycloplegic testing, slit-lamp anterior segment evaluation, and IOP tonometry at home or in clinic.",
    careSettings: ["home-visit", "clinic-appointment"],
    typicalDuration: "45–60 mins",
  },
  {
    id: "amblyopia",
    name: "Amblyopia & Vision Therapy",
    lead: "Pediatric & binocular vision rehabilitation",
    description: "Age-appropriate visual development testing, stereoscopic eye coordination assessment, and clinician-directed therapy protocols for lazy eye.",
    careSettings: ["clinic-appointment", "home-visit"],
    typicalDuration: "45–60 mins",
  },
  {
    id: "contact-lenses",
    name: "Contact Lens Assessment & Fitting",
    lead: "Custom lens suitability and corneal checks",
    description: "Corneal curvature evaluation, tear film assessment, trial lens fitting (soft, toric, multifocal, or RGP), and hygienic handling training.",
    careSettings: ["clinic-appointment", "home-visit"],
    typicalDuration: "45 mins",
  },
  {
    id: "prosthetic-eye",
    name: "Prosthetic Eye Services",
    lead: "Custom ocular prosthesis consultation",
    description: "Dignified, specialized assessment by certified ocularists for custom-fitted prosthetic eyes, scleral shells, and ongoing socket maintenance.",
    careSettings: ["clinic-appointment"],
    typicalDuration: "60 mins",
  },
  {
    id: "low-vision",
    name: "Low Vision Assessment & Rehabilitation",
    lead: "Assistive devices for sight impairment",
    description: "Functional vision evaluation, optical and digital video magnification trials, contrast enhancement training, and caregiver daily-living guidance.",
    careSettings: ["clinic-appointment", "home-visit"],
    typicalDuration: "60 mins",
  },
];
