import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { StudentDetailsModel } from '../../models/student-details.model';
import {MatDialog} from '@angular/material/dialog'
import { PedagogyDocumentsComponent } from '../pedagogy-documents/pedagogy-documents.component';
import { PedagogyProjectsDetailsComponent} from '../pedagogy-projects-details/pedagogy-projects-details.component';

import { PedagogyResitDetailsComponent } from '../pedagogy-resit-details/pedagogy-resit-details.component';
import { FileType } from '../../models/file.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './pedagogy-student-details.component.html',
  styleUrls: ['./pedagogy-student-details.component.scss']
})
export class PedagogyStudentDetailsComponent implements OnInit {
  studentDetails: StudentDetailsModel;
  studentId:number;
  loading:boolean;


  constructor(private studentsService: StudentsService, private route: ActivatedRoute, private dialogRef : MatDialog) {
    this.route.paramMap.subscribe(params => {
      this.studentId = Number(params.get('id'));
      this.loading = true;
      this.studentsService.getStudentDetails(this.studentId).subscribe(data => {
        this.studentDetails = data;
        this.loading = false;
      })
    });
  }


  ngOnInit(): void {

  }

  onGradeBulletinsClick(){
    this.dialogRef.open(PedagogyDocumentsComponent, {
      data:{id_student : this.studentId,title:'Grade bulletins',fileType: FileType.BULLETIN_GRADE}
    })
  }

  onAchievmentCertificateClick(){
    this.dialogRef.open(PedagogyDocumentsComponent, {
      data:{id_student : this.studentId,title:'Achievement certificates',fileType: FileType.ACHIEVEMENT_CERTIFIATE}
    })
  }

  onDissertationClick(){
    this.dialogRef.open(PedagogyDocumentsComponent, {
      data:{id_student : this.studentId,title:'Dissertation details',fileType: FileType.PROJECTS}
    })
  }

  resitDetails(){
    this.dialogRef.open(PedagogyResitDetailsComponent, {
     data: this.studentId
    })
  }

  projectsDetails(){
    this.dialogRef.open(PedagogyProjectsDetailsComponent, {
     data: this.studentId
    })
  }
}
