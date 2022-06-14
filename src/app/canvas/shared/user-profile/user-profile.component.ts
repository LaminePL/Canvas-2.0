import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/services/students.service';
import { UserService } from 'src/services/user.service';
import { StudentModel } from '../../models/student.model';
import {StudentDetailsModel} from "../../models/student-details.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loading: boolean;
  studentDetails: StudentDetailsModel;

  constructor(private userService : UserService, private studentService : StudentsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.studentService.studentDetails.subscribe((res)=>{
      console.log(res)
      return res
    })

    this.studentService.getStudentDetails(1).subscribe((res)=>{
      this.studentDetails = res
      console.log(this.studentDetails)
      this.loading = false;

      return res
    })

  }

}
