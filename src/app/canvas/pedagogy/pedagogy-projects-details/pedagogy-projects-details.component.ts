import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/services/students.service';
import { StudentNotesService } from 'src/services/student_notes.service';
import { StudentProjectModel } from '../../models/student-project.model';
import { PedagogyResitDetailsComponent } from '../pedagogy-resit-details/pedagogy-resit-details.component';

@Component({
  selector: 'app-pedagogy-projects-details',
  templateUrl: './pedagogy-projects-details.component.html',
  styleUrls: ['./pedagogy-projects-details.component.css']
})
export class PedagogyProjectsDetailsComponent implements OnInit {

  studentId;
  projects: Array<StudentProjectModel>
  constructor(public dialogRef: MatDialogRef<PedagogyResitDetailsComponent>, private studentsService: StudentsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


  ngOnInit(): void {
    this.studentId = this.data
    this.studentsService.getProjects(this.studentId).subscribe(res => {
      this.projects = res;
    })

  }

}



