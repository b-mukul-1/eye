export type UserRole = "patient" | "optometrist" | "ophthalmologist" | "caregiver";

export type CareSetting = "home-visit" | "clinic-appointment";

export type AppointmentStatus =
  | "requested"
  | "scheduled"
  | "in-progress"
  | "completed"
  | "cancelled";

export type TriageUrgency = "routine" | "md-review-required" | "urgent-referral";

export interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  age: number;
  phone: string;
  isAuthorizedCaregiver: boolean;
  consentGrantedDate: string;
}

export interface PatientRecord {
  id: string;
  uhid: string; // Unique Health ID
  fullName: string;
  age: number;
  gender: "female" | "male" | "other";
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  knownConditions: string[]; // e.g., ["Type 2 Diabetes (5 yrs)", "Primary Open-Angle Glaucoma"]
  allergies: string[];
  currentDrops: string[];
  familyMembers: FamilyMember[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientAge: number;
  careSetting: CareSetting;
  serviceCategory: string; // e.g., "General Refraction & Glaucoma IOP", "Diabetic Retinal Triage"
  scheduledDate: string; // "2026-10-28"
  scheduledTimeWindow: string; // "10:30 AM - 11:30 AM"
  status: AppointmentStatus;
  practitionerId: string;
  practitionerName: string;
  practitionerRole: "Optometrist" | "Ophthalmologist";
  location: string;
  chiefComplaint: string;
  triagePriority: TriageUrgency;
  isDemoRecord: boolean;
}

// Ophthalmic Measurements Structure
export interface EyeMeasurement<T> {
  od: T; // Oculus Dexter (Right Eye)
  os: T; // Oculus Sinister (Left Eye)
  ou?: T; // Oculus Uterque (Both Eyes)
}

export interface RefractionValues {
  sphere: string; // e.g. "+1.50"
  cylinder: string; // e.g. "-0.75"
  axis: string; // e.g. "85"
  add?: string; // e.g. "+2.25"
  vaUncorrected: string; // e.g. "6/18"
  vaBestCorrected: string; // e.g. "6/6"
}

export interface TonometryReading {
  pressureMmHg: number; // e.g. 14.5
  method: "Rebound (Icare)" | "Non-Contact Air-Puff" | "Goldmann Applanation";
  timeOfMeasurement: string;
  measuredBy: string;
  statusInterpretation: "Normal" | "Borderline (19-21)" | "Elevated (>21)";
}

export interface SlitLampFindings {
  cornea: string; // e.g. "Clear bilaterally, no staining"
  anteriorChamber: string; // e.g. "Deep and quiet, van Herick Grade 4"
  irisPupil: string; // e.g. "Round, regular, reactive to light (PERRLA)"
  crystallineLens: string; // e.g. "Mild nuclear sclerosis Grade 1 (LOCS III)"
}

export interface FundusImaging {
  imageUrl?: string;
  opticDiscCupRatio: EyeMeasurement<string>; // e.g. { od: "0.45", os: "0.40" }
  maculaObservation: string; // e.g. "Foveal reflex sharp, no drusen or microaneurysms"
  vascularCondition: string; // e.g. "Normal A/V ratio, no hypertensive nicking"
}

export interface ClinicalEncounter {
  id: string;
  appointmentId: string;
  patientId: string;
  patientName: string;
  encounterDate: string;
  encounterType: "Home Visit" | "Clinic Suite Consultation";
  recordingOptometrist: {
    id: string;
    name: string;
    registrationNumber: string;
  };
  reviewingOphthalmologist?: {
    id: string;
    name: string;
    registrationNumber: string;
    status: "pending-review" | "countersigned" | "not-required";
    signOffTimestamp?: string;
    mdComments?: string;
  };
  chiefComplaint: string;
  refraction: EyeMeasurement<RefractionValues>;
  tonometry: EyeMeasurement<TonometryReading>;
  slitLamp: SlitLampFindings;
  fundus: FundusImaging;
  clinicalDiagnosis: string;
  patientInstructions: string;
  prescribedSpectacles?: {
    sphereOD: string;
    cylOD: string;
    axisOD: string;
    addOD: string;
    sphereOS: string;
    cylOS: string;
    axisOS: string;
    addOS: string;
    pupillaryDistanceMm: string;
  };
  followUpPlan: {
    recommendedRecall: string; // e.g. "3 months for IOP tonometry"
    referralHospital?: string;
    referralUrgency?: TriageUrgency;
  };
  timestamp: string;
  isDemoRecord: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  type: "visit" | "report" | "prescription" | "referral" | "recall";
  description: string;
  clinician: string;
  statusBadge: string;
  badgeVariant: "clinical" | "sage" | "amber" | "alert" | "neutral";
  actionHref?: string;
  actionLabel?: string;
}
