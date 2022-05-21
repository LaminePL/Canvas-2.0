import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentsService } from '../../../../../services/students.service';

@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.css']
})
export class ComptaComponent implements OnInit {
  comptaPaymentDue: any

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getComptaInfo(localStorage.getItem('student_id')).pipe(
      map((compta)=>{
        return compta[0]?.compta_payment_due ? compta[0]?.compta_payment_due : 'pas de data'
      })
    ).subscribe((res)=>{
      this.comptaPaymentDue = res
      return res
    })

  }

}
