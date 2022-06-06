import { RolesEnum } from "./roles.enum";

export interface UserModel{
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: RolesEnum;
  route?:string;
}
