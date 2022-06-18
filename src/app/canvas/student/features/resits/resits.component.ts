import {Component, OnInit} from '@angular/core';
import {StudentDetailsModel} from "../../../models/student-details.model";
import {ResitModel} from "../../../models/resit.model";
import {StudentsService} from "../../../../../services/students.service";
import {StudentNotesService} from "../../../../../services/student_notes.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-resits',
  templateUrl: './resits.component.html',
  styleUrls: ['./resits.component.css']
})
export class ResitsComponent implements OnInit {
  studentId;
  resits: Array<ResitModel>
  resitNum: number

  constructor(private studentsService: StudentsService, private studentNotesService: StudentNotesService) {
  }

  ngOnInit(): void {
    this.studentsService.studentDetails.pipe(
      tap((data) => {
        this.studentId = data[0]?.id_student
        this.studentNotesService.getResitsDetails(this.studentId).subscribe(res => {
          this.resitNum = res.length
          this.resits = res;
        })

      })
    ).subscribe((res) => {



    })


  }

}
