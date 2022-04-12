import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Canvas';

  constructor(private keycloakService: KeycloakService, public router: Router) {
  }
  ngOnInit(): void {
    if (this.keycloakService.isUserInRole('student_role')) {
      this.router.navigateByUrl('canvas/student');
    }
    if (this.keycloakService.isUserInRole('admins_role')) {
      this.router.navigateByUrl('canvas/admin');
    }
    if (this.keycloakService.isUserInRole('teachers_role')) {
      this.router.navigateByUrl('canvas/teacher');
    }
  }
}

