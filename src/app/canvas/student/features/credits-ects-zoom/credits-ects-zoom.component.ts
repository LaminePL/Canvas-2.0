import { Component, OnInit } from '@angular/core';
import { ChartType, DatasetController, ChartDataset, ChartOptions } from 'chart.js';
import { forkJoin, map, merge, mergeMap, pipe, zip } from 'rxjs';
import { NotesModel } from 'src/app/canvas/models/notes.models';
import { ModulesService } from 'src/services/modules.service';
import { StudentsService } from 'src/services/students.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-credits-ects-zoom',
  templateUrl: './credits-ects-zoom.component.html',
  styleUrls: ['./credits-ects-zoom.component.css']
})
export class CreditsEctsZoomComponent implements OnInit {
  studentLevels = ['B.ENG 1', 'B.ENG 2', 'B.ENG 3', 'M.ENG 1', 'M.ENG 2']
  studentId: number;
  gradePerYear = []
  loading: boolean;
  level: string
  year: string
  notePerYear: any[] = []
  total_credits;
  max_credits;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
   barChartType: ChartType = 'bar';
   barChartLegend = true;
   barChartPlugins = [];
   public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  modules = []
  modulesList: NotesModel[] = []
  constructor(private studentsService: StudentsService, private userService: UserService,
    ) { }

  ngOnInit(): void {


    this.loading = true;
    this.studentsService.studentDetails.subscribe(
      (res) => {
        this.studentId = res[0].id_student
        this.year = res[0].study_length

      }
    )
    this.getStudentCreditsPerYear(this.studentId)
    this.getStudentNotesPerYear(this.studentId, this.year)




  }

  getStudentCreditsPerYear(studentId) {
    this.studentsService.getStudentLevelData().then(
      (res) => {
        res.pipe(
          map((level) => {
            this.studentLevels.length = this.studentLevels.indexOf(level.level) + 1
            for (let year = 1; year <= this.studentLevels.length; year++) {
              this.studentsService.getStudentCreditsPerYear(studentId, year).pipe(
                map((data)=>{
                  this.total_credits = data
                  this.max_credits = data
                  console.log(this.total_credits.total_credits)
                  this.barChartData = [
                    { data: [this.total_credits.total_credits], label: 'Series A' },
                    { data: [this.max_credits.max_credits], label: 'Series B' }
                  ]




                  return data

                })
              )
              .subscribe(
                (res) => {
                  this.gradePerYear.push(res)

                  this.loading = false;
                }

              )

            }
            return level.level
          })

        ).subscribe(
          ((res) => {
            return res
          })
        )

      })

  }

  getStudentNotesPerYear(studentId: number, year) {
    for (let item = 1; item <= Number(year); item++) {
      this.studentsService.getStudentNotesPerYear(studentId, item).subscribe((res) => {

        this.notePerYear.push(res)
        this.notePerYear.map((module:Array<any>) => {
          module.sort(function (a, b) { return b.year - a.year; });
        })
      })

    }

  }
// ratrappage
// liste des cours et prof

  getYearById(id) {
    if (id == 1) {
      return 'B.ENG 1'
    }
    if (id == 2) {
      return 'B.ENG 2'
    }
    if (id == 3) {
      return 'B.ENG 3'
    }
    if (id == 4) {
      return 'M.ENG 1'
    }
    if (id == 5) {
      return 'M.ENG 2'
    }


  }
  public onCardClick(url) {
    window.open(url, "_blank");
  }

}
