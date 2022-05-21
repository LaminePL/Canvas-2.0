import { Component, Input, OnInit } from '@angular/core';
import { map,tap } from 'rxjs';
import { SharedService } from 'src/services/shared.service';
import { StudentsService } from '../../../../../services/students.service';

@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.css']
})
export class ComptaComponent implements OnInit {
  comptaPaymentDue: any
  @Input('userId') public userId

  constructor(private studentsService: StudentsService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getUserCompta(this.userId)


  }
  getUserCompta(userId) {
    this.studentsService.getComptaInfo(userId).pipe(
      tap((compta)=>{
        this.sharedService.loadComptaInfo(compta)
        return compta
      }),
      map((compta) => {
        return compta[0]?.compta_payment_due
      })
    ).subscribe((res) => {

      this.comptaPaymentDue = res
      return res
    })

  }
}
