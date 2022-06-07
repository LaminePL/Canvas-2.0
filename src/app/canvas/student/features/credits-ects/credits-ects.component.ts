import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { StudentsService } from '../../../../../services/students.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-credits-ects',
  templateUrl: './credits-ects.component.html',
  styleUrls: ['./credits-ects.component.css']
})
export class CreditsECTSComponent implements OnInit {
  studentgrade: any
  creditsValidés: number | undefined;
  creditsNonValidés: number = 60;
  data : any;
  currentUser: UserModel;

  constructor(private studentsService: StudentsService,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {

      this.currentUser = user;
      if (this.currentUser)
      this.studentsService.getStudentGrade(this.currentUser.userId).pipe(
        map((grades: any)=>{
          console.log(grades)
          this.creditsValidés = grades['total_credits']
          return grades['total_credits']

        }
        )
      )
      .subscribe((res)=>{
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
    })





   }

  type = 'pie';

  options = {
    responsive: true,
    maintainAspectRatio: false
  };


}
