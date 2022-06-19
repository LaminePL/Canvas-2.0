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
        this.loading = false;

        return res
      })

    })

  }

  onGradeBulletinsClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      data:{id_student : this.studentId,title:'Grade bulletins',fileType: FileType.BULLETIN_GRADE}
    })
  }

  onAchievmentCertificateClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      data:{id_student : this.studentId,title:'Achievement certificates',fileType: FileType.ACHIEVEMENT_CERTIFIATE}
    })
  }


}
