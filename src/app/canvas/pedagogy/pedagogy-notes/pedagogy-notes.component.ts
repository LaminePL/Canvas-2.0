import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { academyStudentColumns } from '../../models/columns/academy-student-columns';
import { pedagogyStudentNotesColumns } from '../../models/columns/pedagogy-notes-columns';
import { StudentModel } from '../../models/student.model';
import { LevelModel } from '../../models/level.model';
import { StudentNotesInfosModel } from '../../models/student-notes-infos.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PedagogyStudentsFilterComponent } from '../pedagogy-students-filter/pedagogy-students-filter.component';
import { StudentFilterModel } from '../../models/studentFilter.model';
import { CampusModel } from '../../models/campus.model';

@Component({
  selector: 'app-pedagogy-students',
  templateUrl: './pedagogy-notes.component.html',
  styleUrls: ['./pedagogy-notes.component.css']
})
export class PedagogyNotesComponent implements OnInit {

  constructor(   private studentsService: StudentsService, private router: Router,public activatedRoute : ActivatedRoute
    , private dialog: MatDialog) {

      this.displayedRows = []
    }
  rows:Array<StudentNotesInfosModel>
  displayedRows: Array<StudentNotesInfosModel>
  displayedColumns: Array<ColumnDefinition>
  loading:boolean;
  


  ngOnInit(): void {

    this.displayedColumns = pedagogyStudentNotesColumns;
    this.loading = true;
    this.studentsService.getAllStudentNotesAndInfos().subscribe(data =>{
      this.displayedRows = data ;
      this.rows = data;
      this.loading = false;
    })

  }
  



}
