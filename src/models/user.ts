/* eslint-disable @typescript-eslint/no-explicit-any */
interface Department {
  departmentId: string;
  name: string;
  role: number;
}
interface Role {
  id: number;
  name: string;
}
export interface UserInstance {
  id: string;
  name: string;
  phoneNumber: string | null;
  email: string;
  isVerified: boolean;
  organizationId: string;
  organizationPlan: string;
  departments: Department[];
  role: Role;
  currentDepartmentId: string;
  language: string;
}