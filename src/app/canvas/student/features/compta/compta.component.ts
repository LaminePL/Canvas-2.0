import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { SutdentService } from '../../sutdent.service';

@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.css']
})
export class ComptaComponent implements OnInit {
  comptaPaymentDue: number | undefined

  constructor(private sutdentService: SutdentService) { }

  ngOnInit(): void {
    this.sutdentService.getComptaInfo(localStorage.getItem('student_id')).pipe(
      map((compta)=>{
        return compta[0].compta_payment_due
      })
    ).subscribe((res)=>{
      this.comptaPaymentDue = res
      return res
    })

  }

}
