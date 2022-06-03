import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject } from 'rxjs';
import { RolesEnum } from 'src/app/canvas/models/roles.enum';
import { UserModel } from 'src/app/canvas/models/user.model';

@Injectable({providedIn: 'root'})
export class UserService {

  currentUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({} as UserModel);

  constructor(private keycloakService: KeycloakService,public router: Router) {

    this.keycloakService.loadUserProfile().then(profile =>{
      let user : UserModel  = profile;
      if (this.keycloakService.isUserInRole('student_role')) {
        user.route = 'canvas/student'
        user.role = RolesEnum.Student
      }
      if (this.keycloakService.isUserInRole('admins_role')) {
        user.route = 'canvas/admin'
        user.role = RolesEnum.Admin
      }
      if (this.keycloakService.isUserInRole('teachers_role')) {
        user.route = 'canvas/teacher'
        user.role = RolesEnum.Teacher
      }
      if (this.keycloakService.isUserInRole('academy_role')) {
        user.route = 'canvas/academy'
        user.role = RolesEnum.Academy
      }

      this.currentUser.next(user);
    })
  }


  logout(){

    this.keycloakService.logout().then(_ =>{
      this.currentUser.next({} as UserModel);
    });

  }

}
