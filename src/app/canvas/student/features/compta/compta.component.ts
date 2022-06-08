import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { UserService } from 'src/services/user.service';
import { StudentsService } from '../../../../../services/students.service';
import { UserModel } from '../../../models/user.model';


@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.css']
})
export class ComptaComponent implements OnInit {
  comptaPaymentDue: number | undefined
  currentUser: UserModel;
  studentDetails:Array<StudentModel>


  constructor(private studentsService: StudentsService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser)
       this.studentsService.getComptaInfo(this.currentUser.userId).pipe(
          map((compta) => {
            this.comptaPaymentDue = compta[0].compta_payment_due
            return compta[0].compta_payment_due
          })
        ).subscribe((res) => {
          return res
        })
    })


  }

}
