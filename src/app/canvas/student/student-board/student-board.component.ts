import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { SutdentService } from '../sutdent.service';

@Component({
  selector: 'app-student-board',
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css']
})
export class StudentBoardComponent implements OnInit {
  sideBarOpen = true;
  studentEmail =  ""
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
    private sutdentService: SutdentService
  ) {
    this.route.data.subscribe(data => {
      console.log(data['types'])
      this.studentEmail = data['types'];
    });
  }
  ngOnInit(): void {
    this.getStudentInfos()
  }
  getStudentInfos(){
    console.log(this.studentEmail)

    return this.sutdentService.getStudentInfo(this.studentEmail).pipe(
      map((user)=>{
        return user[0].id_user
      })
    ).subscribe((res)=>{
      localStorage.setItem('student_id' , res)
    })
  }

  getCalendar() {
    this.router.navigateByUrl('canvas/student/calendar');
  }
  getCreditEcts() {
    this.router.navigateByUrl('canvas/student/credit-ECTS');
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
