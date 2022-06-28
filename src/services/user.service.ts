import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { RolesEnum } from 'src/app/canvas/models/roles.enum';
import { UserTypeModel } from 'src/app/canvas/models/user-type.model';
import { UserModel } from 'src/app/canvas/models/user.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({ providedIn: 'root' })
export class UserService {

  currentUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({} as UserModel);

  constructor(private keycloakService: KeycloakService, public router: Router, private httpClient: HttpClient) {

    this.keycloakService.loadUserProfile().then(profile => {
      let user: UserModel = profile;
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


      this.getUserByEmail(user.email).subscribe(u => {
        if (u) {
          user.userId = u.userId;
          user.isActive = u.isActive;
          user.isAdmin = u.isAdmin;
          this.currentUser.next(user);
        } else {
          this.logout();
        }
      })

    })
  }


  logout() {

    this.keycloakService.logout().then(_ => {
      this.currentUser.next({} as UserModel);
    });

  }


  getUserByEmail(email): Observable<UserModel> {
    return this.httpClient.get<any>(`${API_URL}users/id/${email}`).pipe(map(x => {
      var u = x ? {
        userId: x.id_user,
        firstName: x.first_name,
        lastName: x.last_name,
        email: x.email,
        isAdmin: x.is_admin,
        isActive: x.is_active
      } as UserModel : null
      return u
    }));
  }


  getAllUsers(): Observable<UserModel[]> {
    return this.httpClient.get<any[]>(`${API_URL}users/list`).pipe(map(e => {
      return e.map( x =>{
      var u = x ? {
        userId: x.id_user,
        firstName: x.first_name,
        lastName: x.last_name,
        email: x.email,
        isAdmin: x.is_admin,
        isActive: x.is_active,
        roleName: x.type,
        userTypeId: x.id_userType
      } as UserModel : null
      return u })
      }))
    };


    editUserActivation(id:number,activate:boolean){
      return this.httpClient.put(`${API_URL}users/activation/${id}`,{activate : activate})
    }


    getUserTypes():Observable<UserTypeModel[]>{
      return this.httpClient.get<UserTypeModel[]>(`${API_URL}users/types`)
    }



}
