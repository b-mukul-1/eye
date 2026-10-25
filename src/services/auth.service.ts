import { UserRole } from "@/types/clinical";

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  displayId: string;
  isDemonstration: boolean;
  registrationNumber?: string;
  authorizedScope: string;
}

export const demoAuthUsers: Record<string, AuthUser> = {
  patient: {
    id: "pat-krishnamurthy-704",
    name: "Anand Krishnamurthy",
    role: "patient",
    email: "anand.krishna68@email.in",
    displayId: "UHID: OCU-DEL-2026-70421",
    isDemonstration: true,
    authorizedScope: "Own personal health records & authorized family members only",
  },
  optometrist: {
    id: "optom-priya-sharma",
    name: "Priya Sharma, B.Optom",
    role: "optometrist",
    email: "priya.sharma@ocuhome.in",
    displayId: "Demo Staff Optometrist",
    isDemonstration: true,
    registrationNumber: "Schema Sample (e.g. OCI-OPT-10928)",
    authorizedScope: "Assigned daily home-visit encounters & active care relationships only",
  },
  ophthalmologist: {
    id: "dr-ananya-rao",
    name: "Dr. Ananya Rao, MS",
    role: "ophthalmologist",
    email: "ananya.rao@ocuhome.in",
    displayId: "Demo Consulting Ophthalmologist",
    isDemonstration: true,
    registrationNumber: "Schema Sample (e.g. DMC-48291)",
    authorizedScope: "Assigned patient diagnostic queues, retinal triage & hospital referrals",
  },
};

/**
 * Client-side authentication service abstraction.
 * Note: Prepared for Phase 2 OAuth / ABDM Ayushman Bharat Digital Mission integration.
 * Does NOT pretend production JWT/cryptographic auth is active.
 */
export const authService = {
  getCurrentUser(role: UserRole = "patient"): AuthUser {
    return demoAuthUsers[role] || demoAuthUsers.patient;
  },

  checkPermission(user: AuthUser, requestedPatientId: string): boolean {
    if (user.role === "patient") {
      return user.id === requestedPatientId;
    }
    // Clinicians only have access if there is an authorized care relationship
    return true; // Controlled by backend in Phase 2
  },

  getDemonstrationNotice(): string {
    return "Phase 1 Demonstration Portal: Prepared for Phase 2 DISHA/ABDM healthcare provider identity & OTP authentication.";
  },
};
