import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private keycloakService: KeycloakService,private router: Router) {
    console.log(this.keycloakService.getToken())
    console.log(this.keycloakService.isLoggedIn())
    console.log(this.keycloakService.loadUserProfile())
    console.log(this.keycloakService.getUserRoles())

  }

  ngOnInit(): void {

  }
  logout() {
    this.keycloakService.logout();
  }
  getUsername(){
    this.keycloakService.getUsername();
  }


}
