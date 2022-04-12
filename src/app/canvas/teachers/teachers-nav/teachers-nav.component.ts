import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {KeycloakService} from "keycloak-angular";
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-teachers-nav',
  templateUrl: './teachers-nav.component.html',
  styleUrls: ['./teachers-nav.component.css']
})
export class TeachersNavComponent implements OnInit {
  username:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,
    private keycloakService: KeycloakService) {}
  ngOnInit(): void {
    this.getUserInfo()

  }

  logout() {
    this.keycloakService.logout();
  }
  getUsername(){
    this.keycloakService.getUsername();
  }
  async getUserInfo(){
   let userDetails = await this.keycloakService.loadUserProfile();
   this.username =userDetails.firstName;

  }

}
