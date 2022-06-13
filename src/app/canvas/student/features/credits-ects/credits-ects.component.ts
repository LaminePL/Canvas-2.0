import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { StudentsService } from '../../../../../services/students.service';

@Component({
  selector: 'app-credits-ects',
  templateUrl: './credits-ects.component.html',
  styleUrls: ['./credits-ects.component.css']
})
export class CreditsECTSComponent implements OnInit {
  studentgrade: any
  total_credits: number;
  max_credits: number;

  creditsNonValidés: number = 60;
  data : any;
  currentStudent: any;

  constructor(private studentsService: StudentsService,
    private userService: UserService, private studentService : StudentsService
  ) { }
  ngOnInit(): void {
    this.studentService.studentDetails.subscribe(user => {
      this.currentStudent = user;
      if (this.currentStudent)
      this.studentsService.getStudentGrade(this.currentStudent[0]?.id_student).pipe(
        map((grades: any)=>{
          this.total_credits = grades['total_credits']
          this.max_credits = grades['max_credits']
          return grades['total_credits']

        }
        )
      )
      .subscribe((res)=>{
        this.data = {
          labels: ["crédits validés", "crédits non validés"],
          datasets: [
            {
              label: "CREDITS ECTS",
              data: [this.total_credits, this.max_credits],
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
    })





   }

  type = 'doughnut';

  options = {
    responsive: true,
    maintainAspectRatio: false
  };


}
