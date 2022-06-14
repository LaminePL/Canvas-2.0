import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { academyStudentColumns } from '../../models/columns/academy-student-columns';
import { pedagogyStudentNotesColumns } from '../../models/columns/pedagogy-notes-columns';
import { StudentModel } from '../../models/student.model';
import { LevelModel } from '../../models/level.model';
import { ModuleModel } from '../../models/module.model';
import { StudentNotesInfosModel } from '../../models/student-notes-infos.model';
import { ColumnDefinition } from '../../shared/models/columnDefinition';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PedagogyStudentsFilterComponent } from '../pedagogy-students-filter/pedagogy-students-filter.component';
import { StudentFilterModel } from '../../models/studentFilter.model';
import { CampusModel } from '../../models/campus.model';
import { PedagogyResitDetailsComponent } from '../pedagogy-resit-details/pedagogy-resit-details.component';
import { ModulesService } from 'src/services/modules.service';

@Component({
  selector: 'app-pedagogy-students',
  templateUrl: './pedagogy-notes.component.html',
  styleUrls: ['./pedagogy-notes.component.css']
})
export class PedagogyNotesComponent implements OnInit {

  constructor(   private studentsService: StudentsService, private modulesService: ModulesService, private router: Router,public activatedRoute : ActivatedRoute
    , private dialogRef: MatDialog) {

      this.displayedRows = []
    }
  rows:Array<StudentNotesInfosModel>
  displayedRows: Array<StudentNotesInfosModel>
  displayedColumns: Array<ColumnDefinition>
  loading:boolean;
  subject:string;
  body: string;
  studentId: number;
  studentMail : string;
  moduleFilterValues:Array<ModuleModel>;
  moduleFilter : ModuleModel;

  ngOnInit(): void {

    this.displayedColumns = pedagogyStudentNotesColumns;
    this.loading = true;
    this.studentsService.getAllStudentNotesAndInfos().subscribe(data =>{
      this.displayedRows = data ;
      this.rows = data;
      this.loading = false;
    })
    this.modulesService.getModules().subscribe(data =>{
      this.moduleFilterValues = data;
    })
    this.subject = "Rattrapage de la matière";
    this.body = "Bonjour, \n Votre note étant inférieure à 10, vous êtes prié de vous présenter aux rattrapages de la matière qui se dérouleront du 7 au 12 juillet 2022";
    
  }

  onModuleFilterChanged() {
    this.displayedRows = this.rows.filter(x => !!this.moduleFilter ? x.module_name == this.moduleFilter.module_name : true);
  }

  sendMailToStudent(module, email){
    window.open('mailto:'+email+'?subject='+this.subject+' : '+module+'&body='+this.body);
  }

  resitDetails(id){
    this.dialogRef.open(PedagogyResitDetailsComponent, {
      width: '40vw',
     data: id
    })
  }
  



}
