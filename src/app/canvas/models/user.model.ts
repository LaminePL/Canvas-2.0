import { RolesEnum } from "./roles.enum";

export interface UserModel{
  userId?:number;
  userTypeId?:number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: RolesEnum;
  route?:string;
  roleName?:string;
  isAdmin?:boolean;
  isActive?:boolean;
}
