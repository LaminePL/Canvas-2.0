import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/services/students.service';
import { StudentNotesService } from 'src/services/student_notes.service';
import { StudentProjectModel } from '../../models/student-project.model';
import { AcademyResitDetailsComponent } from '../academy-resit-details/academy-resit-details.component';

@Component({
  selector: 'app-academy-projects-details',
  templateUrl: './academy-projects-details.component.html',
  styleUrls: ['./academy-projects-details.component.scss']
})
export class AcademyProjectsDetailsComponent implements OnInit {

  studentId;
  projects: Array<StudentProjectModel>
  constructor(public dialogRef: MatDialogRef<AcademyResitDetailsComponent>, private studentsService: StudentsService,
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



