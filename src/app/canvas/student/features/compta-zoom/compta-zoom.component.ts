import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { StudentDetailsModel } from 'src/app/canvas/models/student-details.model';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { UserModel } from 'src/app/canvas/models/user.model';
//import { Compta } from 'src/interfaces/compta-interface';
//import { UserInfo } from 'src/interfaces/user-info.interface';
import { StudentsService } from 'src/services/students.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-compta-zoom',
  templateUrl: './compta-zoom.component.html',
  styleUrls: ['./compta-zoom.component.css']
})
export class ComptaZoomComponent implements OnInit {

  //comptaDetails: Compta[]
  comptaDetails: any[]
  //studentInfo: UserInfo[]
  studentInfo: any[]
  campus: string
  firstName: string;
  lastName: string;
  currentUser: UserModel;
  studentDetails: Array<StudentModel>
  loading: boolean;



  constructor(
    private studentsService: StudentsService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.currentUser.subscribe(user => {

      this.currentUser = user;
      if (this.currentUser)
        this.getUserComptaDetails(this.currentUser.userId)
      this.studentsService.getAllStudents().subscribe(data => {
        this.studentDetails = data.filter(user => user.id_user == this.currentUser.userId)
        console.log(this.studentDetails)
        this.loading = false;
      })

    })
  }

  getUserComptaDetails(userId) {
    this.studentsService.getComptaInfo(userId).pipe(
      map((compta) => {
        console.log(compta)
        return compta
      })
    ).subscribe((res) => {
      this.comptaDetails = res
      return res
    })
  }

}
