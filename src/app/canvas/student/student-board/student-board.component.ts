import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from 'src/services/students.service';
import {ColumnDefinition} from '../../shared/models/columnDefinition';
import {academyStudentColumns} from '../../models/columns/academy-student-columns';
import {StudentModel} from '../../models/student.model';
import {UserService} from 'src/services/user.service';
import {UserModel} from '../../models/user.model';


@Component({
  selector: 'app-student-board',
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css']
})
export class StudentBoardComponent implements OnInit {
  sideBarOpen = true;
  studentEmail = ""
  creditEtudiants: any;
  loading: boolean

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Grades', cols: 6, rows: 1},
          {title: 'Internship', cols: 6, rows: 1, img: '../../../../assets//img//loupe.png'},
          {title: 'Accounting', cols: 6, rows: 1, img: '../../../../assets//img//calculatrice.png'},
          {title: 'Agenda', cols: 6, rows: 3, img: '../../../../assets//img//calendar.png'},
          {title: 'ECTS', cols: 6, rows: 2},
          {title: 'Documents', cols: 6, rows: 1},
          {title: 'Resits', cols: 6, rows: 1},
          {title: 'contributors', cols: 6, rows: 1},
        ];
      }

      return [
        {title: 'Internship', cols: 2, rows: 1, img: '../../../../assets//img//loupe.png'},
        {title: 'Resits', cols: 2, rows: 1},
        {title: 'Grades', cols: 2, rows: 1},
        {title: 'Agenda', cols: 3, rows: 2, img: '../../../../assets//img//calendar.png'},
        {title: 'ECTS', cols: 3, rows: 2},
        {title: 'Accounting', cols: 2, rows: 1, img: '../../../../assets//img//calculatrice.png'},
        {title: 'contributors', cols: 2, rows: 1},
        {title: 'Documents', cols: 2, rows: 1},


      ];
    })
  );


  currentUser: UserModel;
  studentDetails: Array<StudentModel>
  studentId: number;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private userService: UserService
  ) {
  }


  ngOnInit() {

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

  getCompta() {
    this.router.navigateByUrl('canvas/student/compta');
  }

  getCourses() {
    this.router.navigateByUrl('canvas/student/courses');
  }

  getContributors() {
    this.router.navigateByUrl('canvas/student/contributors');
  }

  getResits() {
    this.router.navigateByUrl('canvas/student/resits');
  }

  getInternship() {
    this.router.navigateByUrl('canvas/student/internship');
  }
  getDocument() {
    this.router.navigateByUrl('canvas/student/documents');
  }

}


