import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
import { LocalService } from 'src/services/local.service';
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
  userProfileRoute = ''

  constructor(private keycloakService: KeycloakService, public router: Router,
    private localService : LocalService) {
  }
  ngOnInit(): void {
   // this.getUserInfo()

    if (this.keycloakService.isUserInRole('student_role')) {
      this.userProfileRoute = 'canvas/student'
    }
    if (this.keycloakService.isUserInRole('admins_role')) {
      this.userProfileRoute = 'canvas/admin'
    }
    if (this.keycloakService.isUserInRole('teachers_role')) {
      this.userProfileRoute = 'canvas/teacher'
    }
  }

  logout() {
    this.keycloakService.logout();
  }

  getUsername() {
    this.keycloakService.getUsername();
  }


  getuserRole() {
    if (this.keycloakService.isUserInRole('student_role')) {
      this.userRole = "etudiant"
    }


  }

}

