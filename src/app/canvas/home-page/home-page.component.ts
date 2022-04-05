import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, public router: Router) { }

  ngOnInit(): void {
    if (this.keycloakService.isUserInRole('student_role')) {
      this.router.navigateByUrl('canvas/student');
    } else if (this.keycloakService.isUserInRole('staff')) {
      this.router.navigateByUrl('canvas/admin');
    } else if (this.keycloakService.isUserInRole('teacher')) {
      this.router.navigateByUrl('canvas/teacher');
    }
  }

}
