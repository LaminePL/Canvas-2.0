import {Component, OnInit} from '@angular/core';
import {ChartType, DatasetController, ChartDataset, ChartOptions} from 'chart.js';
import {forkJoin, map, merge, mergeMap, pipe, zip} from 'rxjs';
import {NotesModel} from 'src/app/canvas/models/notes.models';
import {ModulesService} from 'src/services/modules.service';
import {StudentsService} from 'src/services/students.service';
import {UserService} from 'src/services/user.service';

@Component({
  selector: 'app-credits-ects-zoom',
  templateUrl: './credits-ects-zoom.component.html',
  styleUrls: ['./credits-ects-zoom.component.css']
})
export class CreditsEctsZoomComponent implements OnInit {
  studentLevels = ['B.ENG 1', 'B.ENG 2', 'B.ENG 3', 'M.ENG 1', 'M.ENG 2']
  // studentLevels = ['M.ENG 2', 'M.ENG 1', 'B.ENG 3', 'B.ENG 2', 'B.ENG 1']
  studentId: number;
  gradePerYear = []
  loading: boolean;
  level: string
  year: string
  exit_level: string
  notePerYear = []
  total_credits;
  max_credits;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  public barChartData: ChartDataset[] = [];
  modules = []
  modulesList: NotesModel[] = []

  constructor(private studentsService: StudentsService, private userService: UserService,
  ) {
  }

  ngOnInit(): void {


    this.loading = true;
    this.studentsService.studentDetails.subscribe(
      (res) => {
        this.studentId = res[0].id_student
        this.year = res[0].study_length
        this.level = res[0]?.level
        this.exit_level = res[0]?.exit_level


      }
    )
    this.getStudentCreditsPerYear(this.studentId)
    this.getStudentNotesPerYear(this.studentId, this.year)
  }

  getStudentCreditsPerYear(studentId) {
    let creditsAvailable = []
    let maxCredits = []
    this.studentLevels.length = this.studentLevels.indexOf(this.level ? this.level : this.exit_level) + 1
    for (let year = 1; year <= this.studentLevels.length; year++) {
      this.studentsService.getStudentCreditsPerYear(studentId, year).pipe(
        map((data) => {
          this.total_credits = data
          this.max_credits = data
          creditsAvailable.unshift(this.total_credits.total_credits)
          maxCredits.unshift(60)
          this.barChartData = [
            {data: creditsAvailable, label: 'Validated'},
            {data: maxCredits, label: 'Still to validate'}
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


  }

  getStudentNotesPerYear(studentId, year) {
    for (let item = 1; item <= year; item++) {
      console.log(item)
      this.studentsService.getStudentNotesPerYear(studentId, item).pipe(
        map((data) => {
          this.notePerYear.unshift(data)
          this.notePerYear.map((module: Array<any>) => {
            module.sort(function (a, b) {
              return b.year - a.year;
            });
          })
          return this.notePerYear
        })
      )
        .subscribe((res) => {
          return res

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
