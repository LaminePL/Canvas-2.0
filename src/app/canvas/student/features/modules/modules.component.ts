import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../../../../services/students.service";

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  level;
  exit_level;
  stillStudent;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.studentDetails.subscribe((res)=>{
      this.stillStudent= res[0]?.still_student
      this.level = res[0]?.level
      this.exit_level= res[0]?.exit_level
      return res
    })
  }

}
