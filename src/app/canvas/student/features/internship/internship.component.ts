import { Component, OnInit } from '@angular/core';
import {InternshipModel} from "../../../models/internship.model";
import {StudentsService} from "../../../../../services/students.service";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  offers: number
  loading: boolean;

  constructor(private studentService : StudentsService) { }

  ngOnInit(): void {

    this.studentService.getInternship().subscribe((offer)=>{
      this.offers = offer.length
    })
  }

}
