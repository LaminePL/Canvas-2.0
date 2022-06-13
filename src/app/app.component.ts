import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { RolesEnum } from './canvas/models/roles.enum';
import { UserModel } from './canvas/models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SUPINFO';
  firstName: any;
  lastName: any;
  email: any;
  userRole: any;
  isExpanded: boolean = false;
  showFiller = false;
  currentUser: UserModel
  roles = RolesEnum;

  constructor(public router: Router,private userService : UserService) {
  }
  ngOnInit(): void {

     this.userService.currentUser.subscribe(user =>{
      this.currentUser = user;
    });
  }

  logout() {
    this.userService.logout();
  }


}

