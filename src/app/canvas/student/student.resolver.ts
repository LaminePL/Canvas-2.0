import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of, finalize } from 'rxjs';
import { SutdentService } from './sutdent.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolver implements Resolve<any> {
  user: any;
  constructor(private router: Router,
    private sutdentService: SutdentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.sutdentService.getStudentId()

  }
}
