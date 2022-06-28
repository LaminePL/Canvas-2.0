import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-academy-profile',
  templateUrl: './academy-profile.component.html',
  styleUrls: ['./academy-profile.component.css']
})
export class AcademyProfileComponent implements OnInit {

  currentUser: UserModel
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user =>{
      this.currentUser = user;
    });
  }

}
