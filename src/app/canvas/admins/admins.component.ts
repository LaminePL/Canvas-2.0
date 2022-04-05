import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private keycloakService: KeycloakService,private router: Router) { }


  ngOnInit(): void {
    console.log(this.keycloakService.getToken())
    console.log(this.keycloakService.isLoggedIn())
    console.log(this.keycloakService.loadUserProfile())
    console.log(this.keycloakService.getUserRoles())

  }
  logout() {
    this.keycloakService.logout();
  }
  getUsername(){
    this.keycloakService.getUsername();
  }

}
