import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Compta } from 'src/interfaces/compta-interface';
import { SharedService } from 'src/services/shared.service';
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-compta-zoom',
  templateUrl: './compta-zoom.component.html',
  styleUrls: ['./compta-zoom.component.css']
})
export class ComptaZoomComponent implements OnInit {
  @Input('userId') public userId

  comptaDetails:Compta[]

  constructor(private sharedService: SharedService,
    private studentsService: StudentsService) { }

  ngOnInit(): void {
    console.log(this.userId)
    this.getUserCompta(7777)
    /*this.sharedService.getComptaInfo().subscribe((compta)=>{
      this.comptaDetails = compta
      console.log(compta)
    })*/
  }

  getUserCompta(userId) {
    this.studentsService.getComptaInfo(userId).pipe(
      map((compta) => {
        return compta
      })
    ).subscribe((res) => {

      this.comptaDetails = res
      return res
    })

  }
}

