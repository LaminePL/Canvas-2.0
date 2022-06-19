import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { UserService } from 'src/services/user.service';
import { StudentsService } from '../../../../../services/students.service';
import { UserModel } from '../../../models/user.model';
import {AcademyDocumentsComponent} from "../../../academy/academy-documents/academy-documents.component";
import {FileType} from "../../../models/file.model";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-compta',
  templateUrl: './compta.component.html',
  styleUrls: ['./compta.component.css']
})
export class ComptaComponent implements OnInit {
  comptaPaymentDue: number | undefined
  currentUser: Array<StudentModel>;
  studentDetails:Array<StudentModel>
  comptaPaid :number;

  constructor(private studentsService: StudentsService,
    private userService: UserService, ) { }

  ngOnInit(): void {
    this.studentsService.studentDetails.subscribe(user => {
      this.currentUser = user;
       this.studentsService.getComptaInfo(this.currentUser[0]?.id_student).pipe(
          map((compta) => {
            this.comptaPaid = compta[0]?.compta_paid
            this.comptaPaymentDue = compta[0]?.compta_payment_due
            return compta[0]?.compta_payment_due
          })
        ).subscribe((res) => {
          return res
        })
    })


  }

}
