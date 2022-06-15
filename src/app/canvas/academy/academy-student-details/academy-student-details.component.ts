import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { StudentDetailsModel } from '../../models/student-details.model';
import {MatDialog} from '@angular/material/dialog'
import { AcademyDocumentsComponent } from '../academy-documents/academy-documents.component';

import { AcademyResitDetailsComponent } from '../academy-resit-details/academy-resit-details.component';
import { FileType } from '../../models/file.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './academy-student-details.component.html',
  styleUrls: ['./academy-student-details.component.scss']
})
export class AcademyStudentDetailsComponent implements OnInit {
  studentDetails: StudentDetailsModel;
  studentId:number;


  constructor(private studentsService: StudentsService, private route: ActivatedRoute, private dialogRef : MatDialog) {
    this.route.paramMap.subscribe(params => {
      this.studentId = Number(params.get('id'));
      this.studentsService.getStudentDetails(this.studentId).subscribe(data => {
        this.studentDetails = data;

      })
    });
  }


  ngOnInit(): void {

  }

  onGradeBulletinsClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '50vw',
      data:{id_student : this.studentId,title:'Grade bulletins',fileType: FileType.BULLETIN_GRADE}
    })
  }

  onAchievmentCertificateClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '50vw',
      data:{id_student : this.studentId,title:'Achievement certificates',fileType: FileType.ACHIEVEMENT_CERTIFIATE}
    })
  }

  resitDetails(){
    this.dialogRef.open(AcademyResitDetailsComponent, {
      width: '40vw',
     data: this.studentId
    })
  }
}
