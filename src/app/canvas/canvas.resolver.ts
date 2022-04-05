import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';

@Injectable()
export class CanvasResolver implements Resolve<any> {

  constructor(private router: Router,
              private keycloakService: KeycloakService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    if (this.keycloakService.isUserInRole('student_role')){
      console.log(route)
    }
    if (this.keycloakService.isUserInRole('staff')){
      console.log('admin page direction')
    }
  }
}
