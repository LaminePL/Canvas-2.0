import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected override router: Router, protected override keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }

      const requiredRoles = route.data['roles'];
      let granted: boolean = false;
      if (!requiredRoles || requiredRoles.length === 0) {
        granted = true;

      } else {
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
          }
        }
      }

      if (!granted) {
        this.router.navigate(['canvas/401']);
      } else {

        if (this.keycloakAngular.isUserInRole('student_role')) {
          this.router.navigate(['canvas/student']);
        }
        if (this.keycloakAngular.isUserInRole('admins_role')) {
          this.router.navigate(['canvas/admin']);
        }
        if (this.keycloakAngular.isUserInRole('teachers_role')) {
          this.router.navigate(['canvas/teacher']);
        }
        if (this.keycloakAngular.isUserInRole('academy_role')) {
          this.router.navigate(['canvas/academy']);
        }


      }



      resolve(granted);
    });
  }
}
