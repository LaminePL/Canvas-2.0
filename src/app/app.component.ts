import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Canvas';
  firstName: any;
  lastName: any;
  email: any;
  userRole: any;
  isExpanded: boolean = false;
  showFiller = false;

  constructor(private keycloakService: KeycloakService, public router: Router) {
  }
  ngOnInit(): void {

  }

  logout() {
    this.keycloakService.logout();
  }

  getUsername() {
    this.keycloakService.getUsername();
  }

  async getUserInfo() {
    let userDetails = await this.keycloakService.loadUserProfile();
    this.firstName = userDetails.firstName;
    this.lastName = userDetails.lastName;
    this.email = userDetails.email;
  }

  getuserRole() {
    if (this.keycloakService.isUserInRole('student_role')) {
      this.userRole = "etudiant"
    }


  }

}
