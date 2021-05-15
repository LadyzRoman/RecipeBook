export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
  firstName: string;
  phoneNumber: string;
  lastName: string;
  authdata?: string;
}
