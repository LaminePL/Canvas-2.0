import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export default class AdminProfileComponent implements OnInit {

  currentUser: UserModel
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user =>{
      this.currentUser = user;
    });
  }
}
