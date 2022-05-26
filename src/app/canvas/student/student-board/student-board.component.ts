import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { studentColumns } from '../../models/student-columns';
import { StudentModel } from '../../models/student.model';

@Component({
  selector: 'app-student-board',
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css']
})
export class StudentBoardComponent implements OnInit {
  sideBarOpen = true;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          { title: 'Card A', cols: 8, rows: 1  },
          { title: 'Card B', cols: 8, rows: 1  },
          { title: 'Card C', cols: 8, rows: 1  },
          { title: 'Contabilité', cols: 8, rows: 1  },
          {title: 'Credits ECTS', cols: 8, rows: 2},
          {title: 'Calendrier journalier', cols: 8, rows: 2},
          {title: 'Card 4', cols: 8, rows: 2}
        ];
      }

      return [
        { title: 'Card A', cols: 2, rows: 1  },
        { title: 'Card B', cols: 2, rows: 1  },
        { title: 'Card C', cols: 2, rows: 1, img:'../../../../assets//img//pngegg (3).png'  },
        { title: 'Contabilité', cols: 2, rows: 1  },
        {title: 'Credits ECTS', cols: 4, rows: 2},
        {title: 'Calendrier journalier', cols: 4, rows: 2},
        {title: 'Card 4', cols: 4, rows: 1}
      ];
    })
  );


  displayedRows: Array<StudentModel>
  displayedColumns: Array<ColumnDefinition>

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,private studentSrv: StudentsService) {
    this.displayedRows = []
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

  ngOnInit(){
    this.displayedColumns = studentColumns;

    this.studentSrv.getAllStudents().subscribe(data =>{
      this.displayedRows = data ;
    })

  }
}


