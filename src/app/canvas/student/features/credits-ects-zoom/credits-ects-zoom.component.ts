import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-credits-ects-zoom',
  templateUrl: './credits-ects-zoom.component.html',
  styleUrls: ['./credits-ects-zoom.component.css']
})
export class CreditsEctsZoomComponent implements OnInit {
  studentLevels = ['B.ENG 1','B.ENG 2','B.ENG 3','M.ENG 1','M.ENG 2']
  studentId:number;
  gradePerYear = []
  loading: boolean;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.loading = true;

    this.studentLevelPerYear()
    this.getStudentLevel(this.studentId)

  }

  studentLevelPerYear(){
    this.studentsService.getStudentData().then(
      (res) =>{
        res.pipe(
          map((studentId)=>{
           return studentId.id
          })
        ).subscribe(
          (res)=>{
            this.studentId = res
            return res
          }
        )
      }
    )
  }


  getStudentLevel(studentId){
    this.studentsService.getStudentLevelData().then(
    (res)=>{

      res.pipe(
        map((level)=>{
          this.studentLevels.length = this.studentLevels.indexOf(level.level) + 1
          for(let year = 1; year <= this.studentLevels.length; year++){
            this.studentsService.getStudentYearlyGrade(studentId,year).subscribe(
              (res)=>{
                this.gradePerYear.push(res)
                this.loading = false;
                return res
              }
            )
          }
          return  level.level
        })

      ).subscribe(
        ((res)=>{
          return res
        })
      )

    })
  }
}
