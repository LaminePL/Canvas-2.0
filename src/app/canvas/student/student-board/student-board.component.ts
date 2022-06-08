import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { academyStudentColumns } from '../../models/columns/academy-student-columns';
import { StudentModel } from '../../models/student.model';
import { UserService } from 'src/services/user.service';
import { UserModel } from '../../models/user.model';


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


 currentUser : UserModel;
 studentDetails: Array<StudentModel>
 studentId:number;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private userService: UserService
  ) {}


  ngOnInit(){
    this.userService.currentUser.subscribe(user => {

      this.currentUser = user;
      if (this.currentUser)
      this.studentsService.getAllStudents().subscribe(data => {
        this.studentDetails = data.filter(user => user.id_user == this.currentUser.userId)
        this.studentId= this.studentDetails[0].id_student
        this.studentsService.getStudentDetails(this.studentId).subscribe((res)=>{
          console.log(res)

        })
      })

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
  getCompta() {
    this.router.navigateByUrl('canvas/student/compta');
  }
  getCourses() {
    this.router.navigateByUrl('canvas/student/courses');
  }


}


