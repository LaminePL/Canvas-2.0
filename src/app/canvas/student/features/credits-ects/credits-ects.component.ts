import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentsService } from '../../../../../services/students.service';

@Component({
  selector: 'app-credits-ects',
  templateUrl: './credits-ects.component.html',
  styleUrls: ['./credits-ects.component.css']
})
export class CreditsECTSComponent implements OnInit {
  studentgrade: any
  creditsValidés: number | undefined;
  creditsNonValidés: number = 60;
  data: any;
  @Input('userId') public userId

  constructor(private studentsService: StudentsService )
   { }
  ngOnInit(): void {
    this.studentsService.getStudentGrade(this.userId).pipe(
      map((grades) => {
        console.log(grades)
        this.creditsValidés = grades['total_credits']
        return grades['total_credits']
      }
      )
    )
      .subscribe((res) => {
        console.log(res)
        this.data = {
          labels: ["crédits validés", "crédits non validés"],
          datasets: [
            {
              label: "CREDITS ECTS",
              data: [res, this.creditsNonValidés],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1.5
            }
          ]
        };
        return res
      })
  }

  type = 'pie';

  options = {
    responsive: true,
    maintainAspectRatio: false
  };





}
