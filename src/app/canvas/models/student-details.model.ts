export class StudentDetailsModel{

  adress: string
  age_of_entry: number
  campus_name: string
  date_of_birth: string
  email: string
  entry_level: string
  exit_level: string
  first_name: string
  gender: string
  last_name: string
  level: string
  number_absence: number
  previous_level: string
  region: string
  speciality_name: string
  still_student: boolean
  study_length: number
  year_of_entry: string
  year_of_exit: string
  has_speciality:boolean;
  is_hired:boolean;
  has_contrat_pro:boolean;
  has_projects:boolean;
  //compta
  compta_paid: boolean
  compta_payment_due: boolean
  compta_payment_type: string
  compta_relance: boolean
  // contrat pro
  cp_activity_sector: string
  cp_company_adress: string
  cp_company_name: string
  cp_post_occupation: string
  cp_start_date: string
  //hiring
  h_lenght_month_hired: number
  h_company_hired: string
  //Resit
  has_resit:boolean;
  nb_resit:number;

}
