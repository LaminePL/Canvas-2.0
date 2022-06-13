import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/services/students.service';
import { StudentNotesService } from 'src/services/student_notes.service';
import { ResitModel } from '../../models/resit.model';
import { StudentDetailsModel } from '../../models/student-details.model';

@Component({
  selector: 'app-academy-resit-details',
  templateUrl: './academy-resit-details.component.html',
  styleUrls: ['./academy-resit-details.component.scss']
})
export class AcademyResitDetailsComponent implements OnInit {

studentId;
studentDetails: StudentDetailsModel;
resits: Array<ResitModel>
  constructor(public dialogRef: MatDialogRef<AcademyResitDetailsComponent>, private studentsService:StudentsService, private studentNotesService:StudentNotesService,
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
