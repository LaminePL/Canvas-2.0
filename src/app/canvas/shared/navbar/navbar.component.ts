import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {KeycloakService} from "keycloak-angular";
import {typeWithParameters} from '@angular/compiler/src/render3/util';
import {KeycloakProfile} from 'keycloak-js';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstName: any;
  lastName: any;
  email: any;
  userRole: any;
  isExpanded: boolean = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,
              private keycloakService: KeycloakService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getUserInfo()
    this.getUserInfo()

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
