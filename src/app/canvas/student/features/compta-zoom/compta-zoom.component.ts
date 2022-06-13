import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentDetailsModel } from 'src/app/canvas/models/student-details.model';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { UserModel } from 'src/app/canvas/models/user.model';
import { StudentsService } from 'src/services/students.service';

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
  studentDetails: StudentModel[];

  loading: boolean;



  constructor(
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {

    this.loading = true;
    this.studentsService.studentDetails.subscribe(res=>{
      console.log(res)
      this.getUserComptaDetails(res[0].id_user)
      this.studentDetails = res
    })

  }

  getUserComptaDetails(userId) {
    this.studentsService.getComptaInfo(userId).pipe(
      map((compta) => {
        return compta
      })
    ).subscribe((res) => {
      this.comptaDetails = res
      this.loading = false;

      return res
    })
  }

}
