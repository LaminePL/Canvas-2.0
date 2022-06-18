import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentDetailsModel } from 'src/app/canvas/models/student-details.model';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { UserModel } from 'src/app/canvas/models/user.model';
import { StudentsService } from 'src/services/students.service';
import {AcademyDocumentsComponent} from "../../../academy/academy-documents/academy-documents.component";
import {FileType} from "../../../models/file.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-compta-zoom',
  templateUrl: './compta-zoom.component.html',
  styleUrls: ['./compta-zoom.component.css']
})
export class ComptaZoomComponent implements OnInit {

  //comptaDetails: Compta[]
  comptaDetails: any[]
  //studentInfo: UserInfo[]
  studentInfo: any[]
  campus: string
  firstName: string;
  lastName: string;
  currentUser: UserModel;
  studentDetails: StudentModel[];

  loading: boolean;



  constructor(
    private studentsService: StudentsService,private dialogRef : MatDialog
  ) { }

  ngOnInit(): void {

    this.loading = true;
    this.studentsService.studentDetails.subscribe(res=>{
      this.getUserComptaDetails(res[0]?.id_student)
      this.studentDetails = res
    })

  }

  getUserComptaDetails(userId) {
    this.studentsService.getComptaInfo(userId).subscribe((res) => {
      this.comptaDetails = res

      this.loading = false;

      return res
    })
  }
  onGradeBulletinsClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '40vw',
      data:{id_student : this.studentDetails[0]?.id_student,title:'Acountings',fileType: FileType.BULLETIN_GRADE}
    })
  }

  onAchievmentCertificateClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '40vw',
      data:{id_student : this.studentDetails[0]?.id_student,title:'Achievement certificates',fileType: FileType.ACHIEVEMENT_CERTIFIATE}
    })
  }

}
