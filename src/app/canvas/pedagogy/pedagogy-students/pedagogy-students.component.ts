import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { academyStudentColumns } from '../../models/columns/academy-student-columns';
import { StudentModel } from '../../models/student.model';
import { LevelModel } from '../../models/level.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PedagogyStudentsFilterComponent } from '../pedagogy-students-filter/pedagogy-students-filter.component';
import { StudentFilterModel } from '../../models/studentFilter.model';
import { CampusModel } from '../../models/campus.model';

let LevelList: Array<LevelModel> = [
  {id_level:1, level: 'B.ENG 1'},
  {id_level:2, level: 'B.ENG 2'},
  {id_level:3, level: 'B.ENG 3'},
  {id_level:4, level: 'M.ENG 1'},
  {id_level:5, level: 'M.ENG 2'}
]

let CampusList: Array<CampusModel> = [
  {id:1, campus_name: 'Caen'},
  {id:2, campus_name: 'Distanciel'},
  {id:3, campus_name: 'Lille'},
  {id:4, campus_name: 'Lyon'},
  {id:5, campus_name: 'Paris'},
  {id:6, campus_name: 'Tours'},
]

@Component({
  selector: 'app-pedagogy-students',
  templateUrl: './pedagogy-students.component.html',
  styleUrls: ['./pedagogy-students.component.css']
})
export class PedagogyStudentsComponent implements OnInit {

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
  levelFilterValues:Array<LevelModel>;
  levelFilter: LevelModel;
  campusFilterValues:Array<CampusModel>;
  campusFilter : CampusModel;

  

  ngOnInit(): void {

    this.displayedColumns = academyStudentColumns;
    this.loading = true;
    this.studentsService.getAllStudents().subscribe(data =>{
      this.displayedRows = data ;
      this.rows = data;
      this.loading = false;
    })
    this.levelFilterValues = LevelList;
    this.campusFilterValues = CampusList;
  }
  DisplayStudentDetails(studentId){
    this.router.navigate(['student-details', ], {relativeTo: this.activatedRoute})
  }

  onLevelFilterChanged() {
    this.displayedRows = this.rows.filter(x => !!this.levelFilter ? x.level == this.levelFilter.level : true);
  }

  onCampusFilterChanged() {
    this.displayedRows = this.rows.filter(x => !!this.campusFilter ? x.campus_name == this.campusFilter.campus_name : true);
  }


  onFilterContratProChange(){
    this.displayedRows = this.rows.filter(x => !!this.filterContratPro ? x.has_contrat_pro == this.filterContratPro : true);
  }

  onFilterHiredChange(){
    this.displayedRows = this.rows.filter(x => !!this.filterHired ? x.is_hired == this.filterHired : true);
  }

  onFilterClick(){
    var dialogRef = this.dialog.open(PedagogyStudentsFilterComponent);
    dialogRef.afterClosed().subscribe((filter : StudentFilterModel) =>{
      if(filter){
        this.displayedRows = this.rows.filter((x) => {
          return (
          (filter.hasContratPro != null ? x.has_contrat_pro == filter.hasContratPro : true) &&
          (filter.isHired !=null ? x.is_hired == filter.isHired : true) &&
          (filter.isOldStudent != null ? x.still_student == !filter.isOldStudent : true));
        });
      }
    })
  }

  clearFilter(){
    this.displayedRows = this.rows;
  }



}
