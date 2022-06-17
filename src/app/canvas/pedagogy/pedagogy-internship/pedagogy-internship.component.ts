import { Component, OnInit } from '@angular/core';
import {InternshipModel} from "src/app/canvas/models/internship.model";
import {StudentsService} from "src/services/students.service";

@Component({
  selector: 'app-internship-pedagogy',
  templateUrl: './pedagogy-internship.component.html',
  styleUrls: ['./pedagogy-internship.component.css']
})
export class PedagogyInternshipComponent implements OnInit {
  offers: number
  loading: boolean;

  constructor(private studentService : StudentsService) { }

  ngOnInit(): void {

    this.studentService.getInternship().subscribe((offer)=>{
      this.offers = offer.length
    })
  }

}
