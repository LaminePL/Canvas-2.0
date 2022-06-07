import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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

  constructor(private studentsService: StudentsService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {

      this.currentUser = user;
      if (this.currentUser)

        this.studentsService.getComptaInfo(this.currentUser.userId).pipe(
          map((compta) => {
            console.log(compta)
            return compta[0].compta_payment_due
          })
        ).subscribe((res) => {
          this.comptaPaymentDue = res
          return res
        })
    })


  }

}
