import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { academyStudentColumns } from '../../models/columns/academy-student-columns';
import { StudentModel } from '../../models/student.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AcademyStudentsFilterComponent } from '../academy-students-filter/academy-students-filter.component';
import { StudentFilterModel } from '../../models/studentFilter.model';

@Component({
  selector: 'app-academy-students',
  templateUrl: './academy-students.component.html',
  styleUrls: ['./academy-students.component.scss']
})
export class AcademyStudentsComponent implements OnInit {

  constructor(   private studentsService: StudentsService, private router: Router,public activatedRoute : ActivatedRoute
    , private dialog: MatDialog) {

      this.displayedRows = []
    }
  rows:Array<StudentModel>
  displayedRows: Array<StudentModel>
  displayedColumns: Array<ColumnDefinition>
  loading:boolean;
  filterHired:boolean=false;
  filterContratPro:boolean=false;

  ngOnInit(): void {

    this.displayedColumns = academyStudentColumns;
    this.loading = true;
    this.studentsService.getAllStudents().subscribe(data =>{
      this.displayedRows = data ;
      this.rows = data;
      this.loading = false;
    })
  }
  DisplayStudentDetails(studentId){
    this.router.navigate(['student-details', ], {relativeTo: this.activatedRoute})
  }


  onFilterContratProChange(){
    this.displayedRows = this.rows.filter(x => !!this.filterContratPro ? x.has_contrat_pro == this.filterContratPro : true);
  }

  onFilterHiredChange(){
    this.displayedRows = this.rows.filter(x => !!this.filterHired ? x.is_hired == this.filterHired : true);
  }

  onFilterClick(){
    var dialogRef = this.dialog.open(AcademyStudentsFilterComponent);
    dialogRef.afterClosed().subscribe((filter : StudentFilterModel) =>{
      if(filter){
        this.displayedRows = this.rows.filter((x) => {
          return (
          (filter.hasContratPro != null ? x.has_contrat_pro == filter.hasContratPro : true) &&
          (filter.isHired !=null ? x.is_hired == filter.isHired : true) &&
          (filter.isOldStudent != null ? x.still_student == !filter.isOldStudent : true) &&
          (filter.hasResitExams != null ? x.has_resit == filter.hasResitExams : true));
        });
      }
    })
  }

  clearFilter(){
    this.displayedRows = this.rows;
  }



}
