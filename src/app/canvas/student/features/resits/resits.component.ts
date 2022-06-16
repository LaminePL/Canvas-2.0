import { Component, OnInit } from '@angular/core';
import {StudentDetailsModel} from "../../../models/student-details.model";
import {ResitModel} from "../../../models/resit.model";
import {StudentsService} from "../../../../../services/students.service";
import {StudentNotesService} from "../../../../../services/student_notes.service";

@Component({
  selector: 'app-resits',
  templateUrl: './resits.component.html',
  styleUrls: ['./resits.component.css']
})
export class ResitsComponent implements OnInit {
  studentId;
  studentDetails: StudentDetailsModel;
  resits: Array<ResitModel>
  resitNum: number
  constructor(private studentsService:StudentsService, private studentNotesService:StudentNotesService) { }

  ngOnInit(): void {
    this.studentsService.studentDetails.subscribe((res)=>{
      this.studentId = res[0]?.id_student
        if(res[0]?.has_resit){
          this.studentNotesService.getResitsDetails(this.studentId).subscribe( res => {
            this.resitNum = res.length
            this.resits = res;
            console.log(this.resits)
          })
        }

    })

  }

}
