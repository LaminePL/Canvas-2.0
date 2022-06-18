import { Component, OnInit } from '@angular/core';
import {AcademyDocumentsComponent} from "../../../academy/academy-documents/academy-documents.component";
import {FileType} from "../../../models/file.model";
import {UserService} from "../../../../../services/user.service";
import {StudentsService} from "../../../../../services/students.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-administratif-doc',
  templateUrl: './administratif-doc.component.html',
  styleUrls: ['./administratif-doc.component.css']
})
export class AdministratifDocComponent implements OnInit {
  studentId:number;

  constructor(private userService : UserService, private studentService : StudentsService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.studentService.studentDetails.subscribe((res)=> {
      this.studentId = res[0]?.id_student
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
