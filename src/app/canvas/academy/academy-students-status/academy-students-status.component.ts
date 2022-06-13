import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CampusService } from 'src/services/campus.service';
import { ModulesService } from 'src/services/modules.service';
import { StudentsService } from 'src/services/students.service';
import { CampusModel } from '../../models/campus.model';
import { academyStudentColumns } from '../../models/columns/academy-student-columns';
import { academyStudentStatusColumns } from '../../models/columns/academy-student-status-columns';
import { StudentDetailsModel } from '../../models/student-details.model';
import { StudentStatusModel } from '../../models/student-status.model';
import { StudentModel } from '../../models/student.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';

@Component({
  selector: 'app-academy-students-status',
  templateUrl: './academy-students-status.component.html',
  styleUrls: ['./academy-students-status.component.css']
})
export class AcademyStudentsStatusComponent implements OnInit {


  displayedRows: Array<StudentStatusModel>
  displayedColumns: Array<ColumnDefinition>
  loading:boolean;
  studentDetails: StudentDetailsModel;
  rows: Array<StudentStatusModel>
  campusFilterValues: Array<CampusModel>
  campusFilter: CampusModel;
  constructor( public activatedRoute : ActivatedRoute
    , private route: ActivatedRoute,private moduleService: ModulesService, private campusService: CampusService) {

    }

  ngOnInit(): void {
    this.displayedColumns = academyStudentStatusColumns
    this.loading = true;
    this.displayedRows = []

    this.route.paramMap.subscribe(params => {
      this.moduleService.getStudentStatus(Number(params.get('id'))).subscribe(data => {
         this.displayedRows = data
         this.rows = data
         this.loading = false
      })
    })

    this.campusService.getCampusList().subscribe(data => {
      this.campusFilterValues = data;
    })
  }

  onCampusFilterChanged() {
    this.displayedRows = this.rows.filter(x => !!this.campusFilter ? x.id_campus == this.campusFilter.id : true);
  }
}
