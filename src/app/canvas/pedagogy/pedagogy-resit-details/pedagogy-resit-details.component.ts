import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/services/students.service';
import { StudentNotesService } from 'src/services/student_notes.service';
import { ResitModel } from '../../models/resit.model';
import { StudentDetailsModel } from '../../models/student-details.model';

@Component({
  selector: 'app-pedagogy-resit-details',
  templateUrl: './pedagogy-resit-details.component.html',
  styleUrls: ['./pedagogy-resit-details.component.css']
})
export class PedagogyResitDetailsComponent implements OnInit {

studentId;
studentDetails: StudentDetailsModel;
resits: Array<ResitModel>
  constructor(public dialogRef: MatDialogRef<PedagogyResitDetailsComponent>, private studentsService:StudentsService, private studentNotesService:StudentNotesService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


  ngOnInit(): void {
    this.studentId= this.data
    this.studentsService.getStudentDetails(this.studentId).subscribe(data => {
      this.studentDetails = data;
      if(this.studentDetails?.has_resit){
        this.studentNotesService.getResitsDetails(this.studentId).subscribe( res => {
          this.resits = res;
        })
      }
    })
  }

}
