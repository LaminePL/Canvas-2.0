import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/services/students.service';
import { UserService } from 'src/services/user.service';
import { StudentModel } from '../../models/student.model';
import {StudentDetailsModel} from "../../models/student-details.model";
import {AcademyDocumentsComponent} from "../../academy/academy-documents/academy-documents.component";
import {FileType} from "../../models/file.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loading: boolean;
  studentDetails: StudentDetailsModel;
  studentId:number;

  constructor(private userService : UserService, private studentService : StudentsService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.loading = true;
    this.studentService.studentDetails.subscribe((res)=>{
      this.studentId = res[0]?.id_student

      this.studentService.getStudentDetails(this.studentId).subscribe((res)=>{
        this.studentDetails = res
        console.log(res)
        this.loading = false;

        return res
      })

    })

  }

  onGradeBulletinsClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '40vw',
      data:{id_student : this.studentId,title:'Grade bulletins',fileType: FileType.BULLETIN_GRADE}
    })
  }

  onAchievmentCertificateClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '40vw',
      data:{id_student : this.studentId,title:'Achievement certificates',fileType: FileType.ACHIEVEMENT_CERTIFIATE}
    })
  }

}
/*Id: 1
activity_sector: null
adress: "162 Milwaukee Road"
age_of_entry: 18
campus_name: "Caen"
company_adress: null
company_hired: "Apple"
company_name: null
compta_paid: 1
compta_payment_due: 0
compta_payment_type: "Comptant"
compta_relance: null
cp_activity_sector: null
cp_company_adress: null
cp_company_name: null
cp_post_occupation: null
cp_start_date: null
date_of_birth: "1997-05-09T22:00:00.000Z"
email: "aaronkitchiner@canvasprojhotmail.onmicrosoft.com"
entry_level: "B.ENG 1"
exit_level: "M.ENG 2"
first_name: "Aaron"
gender: "Female"
h_company_hired: "Apple"
h_lenght_month_hired: 4
has_contrat_pro: 0
has_resit: 1
has_speciality: 0
id: 4441
id_campus: 1
id_compta: 5929
id_contrat_pro: null
id_hiring: 4441
id_level: 5929
id_speciality: null
id_student: 1
id_user: 6944
id_userType: 1
is_admin: 0
is_hired: 1
last_name: "Kitchiner"
lenght_month_hired: 4
level: null
nb_resit: 15
number_absence: 4
post_occupation: null
previous_level: "Bac"
region: "Normandie"
speciality_name: null
start_date: null
still_student: 0
study_length: 5
year_of_entry: "2015"
year_of_exit: "2020"

*/
