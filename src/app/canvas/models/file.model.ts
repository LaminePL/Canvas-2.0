export class FileModel{
  file_description:string;
  id_file_type:number;
  file_path:string;
  file_name:string;
  is_rendered: boolean;
  is_validated: boolean;
  gratuated_date: Date;
}


export enum FileType{
  BULLETIN_GRADE = 1,
  ACHIEVEMENT_CERTIFIATE,
  OFFERS,
  PROJECTS
}
