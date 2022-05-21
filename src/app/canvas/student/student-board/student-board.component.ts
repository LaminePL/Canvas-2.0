import { Component, OnInit } from '@angular/core';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../../services/students.service';
import { KeycloakService } from 'keycloak-angular';
import { LocalService } from 'src/services/local.service';

@Component({
  selector: 'app-student-board',
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css']
})
export class StudentBoardComponent implements OnInit {
  sideBarOpen = true;
  userId: string
  creditEtudiants: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'courses', cols: 8, rows: 1, img: '../../../../assets//img//book.png' },
          { title: 'notes', cols: 8, rows: 1 },
          { title: 'stages', cols: 8, rows: 1, img: '../../../../assets//img//loupe.png'},
          { title: 'Compta', cols: 8, rows: 1, img: '../../../../assets//img//calculatrice.png' },
          { title: 'Credits ECTS', cols: 8, rows: 2 },
          { title: 'Calendrier journalier', cols: 8, rows: 3, img: '../../../../assets//img//calendar.png' },
          { title: 'administration', cols: 2, rows: 1 },
          { title: 'ratrappage', cols: 2, rows: 1 },
          { title: 'contact', cols: 2, rows: 1 },
        ];
      }

      return [
        { title: 'courses', cols: 2, rows: 1, img: '../../../../assets//img//book.png' },
        { title: 'notes', cols: 2, rows: 1 },
        { title: 'stages', cols: 2, rows: 1, img: '../../../../assets//img//loupe.png' },
        { title: 'Compta', cols: 2, rows: 1, img: '../../../../assets//img//calculatrice.png' },
        { title: 'Credits ECTS', cols: 4, rows: 2 },
        { title: 'Calendrier journalier', cols: 4, rows: 2, img: '../../../../assets//img//calendar.png' },
        { title: 'administration', cols: 2, rows: 1 },
        { title: 'ratrappage', cols: 2, rows: 1 },
        { title: 'contact', cols: 2, rows: 1 },

      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private keycloakService: KeycloakService,
    private localService : LocalService
  ) {
  }
  ngOnInit(): void {
    this.getStudentInfos()
  }




  getStudentInfos(){
    return this.studentsService.getStudentInfo(this.localService.getJsonValue('userEmail')).pipe(
      map((user)=>{
        return user[0].id_user
      })
    ).subscribe((res: string)=>{
      this.userId = res
      return res
    })
  }

  getCalendar() {
    this.router.navigateByUrl('canvas/student/calendar');
  }
  getCreditEcts() {
    this.router.navigateByUrl('canvas/student/credit-ECTS');
  }
  getCompta() {
    this.router.navigateByUrl('canvas/student/compta');
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
