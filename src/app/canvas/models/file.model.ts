export class FileModel{

  file_description:string;
  id_file_type:number;
  file_path:string;
  file_name:string;
  id_student:number;
}


export enum FileType{
  BULLETIN_GRADE = 1,
  ACHIEVEMENT_CERTIFIATE
}
