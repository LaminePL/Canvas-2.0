export interface UserInfo {
  id_user: number;
  id_userType: number;
  first_name: string;
  last_name: string;
  email: string;
  is_admin: number;
  id?: number;
  id_campus?: number;
  id_speciality?: any;
  id_level?: number;
  id_compta?: number;
  id_contrat_pro?: any;
  id_hiring?: any;
  date_of_birth?: Date;
  gender: string;
  region: string;
  adress: string;
  still_student?: number;
  number_absence?: number;
}
