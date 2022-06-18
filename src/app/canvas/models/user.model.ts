import { RolesEnum } from "./roles.enum";

export interface UserModel{
  userId?:number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: RolesEnum;
  route?:string;
  roleName?:string;
}
