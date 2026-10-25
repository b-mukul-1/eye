import { Appointment, ClinicalEncounter, PatientRecord } from "@/types/clinical";

export interface PractitionerProfile {
  id: string;
  name: string;
  role: "Optometrist" | "Ophthalmologist";
  title: string;
  registrationNumber: string;
  metroHub: string;
  activeShiftStatus: "On Route" | "In Consultation" | "Standby";
  assignedKitId: string;
  assignedVehicle: string;
  patientsInCareRelationshipCount: number;
}

export const demoPractitioner: PractitionerProfile = {
  id: "optom-priya-sharma",
  name: "Priya Sharma, B.Optom",
  role: "Optometrist",
  title: "Visiting Clinical Optometrist",
  registrationNumber: "OCI-OPT-10928 (Delhi Optometry Council)",
  metroHub: "South Delhi Clinical Hub (Saket)",
  activeShiftStatus: "On Route",
  assignedKitId: "Mobile Diagnostic Unit #04 (Calibrated 15 Oct 2026)",
  assignedVehicle: "DL 3C AB 4920 (Clinical Dispatch)",
  patientsInCareRelationshipCount: 18,
};

export const demoOphthalmologist: PractitionerProfile = {
  id: "dr-ananya-rao",
  name: "Dr. Ananya Rao, MS",
  role: "Ophthalmologist",
  title: "Senior Consulting Ophthalmologist",
  registrationNumber: "DMC-48291 (Delhi Medical Council)",
  metroHub: "South Extension Specialist Suite, New Delhi",
  activeShiftStatus: "In Consultation",
  assignedKitId: "Digital Review Station #01",
  assignedVehicle: "N/A (Clinic Based)",
  patientsInCareRelationshipCount: 142,
};

export const demoTodayVisits: (Appointment & {
  travelDistanceKm: number;
  contactNumber: string;
  addressFull: string;
  notesForClinician: string;
})[] = [
  {
    id: "apt-2026-1028",
    patientId: "pat-krishnamurthy-704",
    patientName: "Anand Krishnamurthy",
    patientAge: 68,
    careSetting: "home-visit",
    serviceCategory: "Glaucoma Follow-Up & Refraction Verification",
    scheduledDate: "Today, 28 Oct 2026",
    scheduledTimeWindow: "10:30 AM – 11:30 AM",
    status: "scheduled",
    practitionerId: "optom-priya-sharma",
    practitionerName: "Priya Sharma, B.Optom",
    practitionerRole: "Optometrist",
    location: "Hauz Khas Enclave, New Delhi",
    addressFull: "B-4/18, Hauz Khas Enclave (Near Deer Park Gate 2), New Delhi - 110016",
    contactNumber: "+91 98101 23456",
    chiefComplaint: "Quarterly IOP pressure tonometry & updated reading addition",
    triagePriority: "routine",
    travelDistanceKm: 3.2,
    notesForClinician:
      "Patient seated comfortably in ground-floor study room. Daughter Sunita will be present. Bring Icare rebound tonometer probes.",
    isDemoRecord: true,
  },
  {
    id: "apt-2026-1028-2",
    patientId: "pat-meera-sen-812",
    patientName: "Meera Sen",
    patientAge: 42,
    careSetting: "home-visit",
    serviceCategory: "Comprehensive Refraction & Astigmatism Check",
    scheduledDate: "Today, 28 Oct 2026",
    scheduledTimeWindow: "01:00 PM – 02:00 PM",
    status: "scheduled",
    practitionerId: "optom-priya-sharma",
    practitionerName: "Priya Sharma, B.Optom",
    practitionerRole: "Optometrist",
    location: "Saket, New Delhi",
    addressFull: "Flat 402, Block C, Silver Oak Apts, Saket, New Delhi - 110017",
    contactNumber: "+91 98711 54321",
    chiefComplaint: "Frequent digital eye strain and blur while working on laptop monitors",
    triagePriority: "routine",
    travelDistanceKm: 4.8,
    notesForClinician: "Test distance and intermediate 60cm computer screen working distance.",
    isDemoRecord: true,
  },
  {
    id: "apt-2026-1028-3",
    patientId: "pat-harpal-singh-601",
    patientName: "Col. Harpal Singh (Retd.)",
    patientAge: 79,
    careSetting: "home-visit",
    serviceCategory: "Geriatric Vision Assessment & Lens Clarity",
    scheduledDate: "Today, 28 Oct 2026",
    scheduledTimeWindow: "08:30 AM – 09:30 AM",
    status: "completed",
    practitionerId: "optom-priya-sharma",
    practitionerName: "Priya Sharma, B.Optom",
    practitionerRole: "Optometrist",
    location: "Vasant Vihar, New Delhi",
    addressFull: "A-12, Paschimi Marg, Vasant Vihar, New Delhi - 110057",
    contactNumber: "+91 98100 11223",
    chiefComplaint: "Gradual reduction in TV clarity over last 6 months",
    triagePriority: "routine",
    travelDistanceKm: 6.1,
    notesForClinician:
      "Completed: LOCS Grade 2.5 nuclear cataract noted OS. Referral for hospital phacoemulsification advised.",
    isDemoRecord: true,
  },
];

export const demoPendingReviews = [
  {
    encounterId: "enc-2026-1028-harpal",
    patientName: "Col. Harpal Singh (Retd.)",
    uhid: "OCU-DEL-2026-60102",
    age: 79,
    recordingClinician: "Priya Sharma, B.Optom",
    encounterDate: "Today, 09:30 AM",
    findingsSummary:
      "LOCS Grade 2.5 nuclear sclerosis OS with BCVA reduced to 6/18. Normal IOP (15 mmHg). Slit-lamp shows significant nuclear opacity.",
    tentativeTriage: "Hospital Ophthalmology Surgical Referral (Cataract Phacoemulsification)",
    requiresUrgentReview: false,
    fundusUploaded: true,
  },
  {
    encounterId: "enc-2026-0318",
    patientName: "Anand Krishnamurthy",
    uhid: "OCU-DEL-2026-70421",
    age: 68,
    recordingClinician: "Priya Sharma, B.Optom",
    encounterDate: "18 Mar 2026",
    findingsSummary:
      "Stable glaucoma suspect. Normal IOP 14.8 OD / 15.2 OS. Cup-to-disc 0.45 OD / 0.40 OS. Refraction updated +2.25 Add.",
    tentativeTriage: "Routine Follow-up (3 months)",
    requiresUrgentReview: false,
    fundusUploaded: true,
  },
];
