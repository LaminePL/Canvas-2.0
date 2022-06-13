import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/services/students.service';
import { UserService } from 'src/services/user.service';
import { StudentModel } from '../../models/student.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  studentProfile: Array<any>
  loading: boolean;

  constructor(private userService : UserService, private studentService : StudentsService) { }

  ngOnInit(): void {
    this.loading = true;

    this.studentService.studentDetails.subscribe((res)=>{
      this.studentProfile = res
      console.log(this.studentProfile)
      this.loading = false;

      return res
    })
  }

}
