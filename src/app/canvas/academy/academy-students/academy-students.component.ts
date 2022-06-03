import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { studentColumns } from '../../models/student-columns';
import { StudentModel } from '../../models/student.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-academy-students',
  templateUrl: './academy-students.component.html',
  styleUrls: ['./academy-students.component.css']
})
export class AcademyStudentsComponent implements OnInit {

  constructor(   private studentsService: StudentsService, private router: Router,public activatedRoute : ActivatedRoute
    ) {

      this.displayedRows = []
    }
  rows:Array<StudentModel>
  displayedRows: Array<StudentModel>
  displayedColumns: Array<ColumnDefinition>
  loading:boolean;
  filterHired:boolean=false;
  filterContratPro:boolean=false;

  ngOnInit(): void {

    this.displayedColumns = studentColumns;
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
    if(this.filterContratPro)
      this.displayedRows = this.rows.filter(x => x.has_contrat_pro == this.filterContratPro)
  }

  onFilterHiredChange(){
    if(this.filterHired)
      this.displayedRows = this.rows.filter(x => x.is_hired == this.filterHired)
  }



}
