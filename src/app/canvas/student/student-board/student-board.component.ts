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
  today = new Date()

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Modules', cols: 6, rows: 1, img: '../../../../assets//img//book.png'},
          {title: 'Internship', cols: 6, rows: 1, img: '../../../../assets//img//loupe.png'},
          {title: 'Resits', cols: 6, rows: 1, img: '../../../../assets//img//resit.png'},
          {title: 'Calendar', cols: 6, rows: 3, img: '../../../../assets//img//calendar.png'},
          {title: 'ECTS', cols: 6, rows: 2, img: '../../../../assets//img//ECTS.png'},
          {title: 'Accounting', cols: 6, rows: 1, img: '../../../../assets//img//calculatrice.png'},
          {title: 'Contributors', cols: 6, rows: 1, img: '../../../../assets//img//contributors.png'},
          {title: 'Documents', cols: 6, rows: 1,  img: '../../../../assets//img//document.png'},

        ];
      }

      return [
        {title: 'Modules', cols: 2, rows: 1, img: '../../../../assets//img//book.png'},
        {title: 'Resits', cols: 2, rows: 1, img: '../../../../assets//img//resit.png'},
        {title: 'Documents', cols: 2, rows: 1,  img: '../../../../assets//img//document.png'},
        {title: 'Calendar', cols: 3, rows: 2, img: '../../../../assets//img//calendar.png'},
        {title: 'ECTS', cols: 3, rows: 2, img: '../../../../assets//img//ECTS.png'},
        {title: 'Accounting', cols: 2, rows: 1, img: '../../../../assets//img//calculatrice.png'},
        {title: 'Contributors', cols: 2, rows: 1 , img: '../../../../assets//img//contributors.png'},
        {title: 'Internship', cols: 2, rows: 1, img: '../../../../assets//img//loupe.png'},



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
    private userService: UserService,

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


