import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {StudentsService} from "../../../../../services/students.service";
import {MatDialog} from "@angular/material/dialog";
import {StudentDetailsModel} from "../../../models/student-details.model";
import {AcademyDocumentsComponent} from "../../../academy/academy-documents/academy-documents.component";
import {FileType} from "../../../models/file.model";
import {ResitModel} from "../../../models/resit.model";
import {ColumnDefinition} from "../../../shared/models/columnDefinition";
import {ModuleModel} from "../../../models/module.model";
import {StudentNotesService} from "../../../../../services/student_notes.service";
import {ModulesService} from "../../../../../services/modules.service";

@Component({
  selector: 'app-administratif-doc-zoom',
  templateUrl: './administratif-doc-zoom.component.html',
  styleUrls: ['./administratif-doc-zoom.component.css']
})
export class AdministratifDocZoomComponent implements OnInit {
  loading: boolean;
  studentDetails: StudentDetailsModel;
  studentId:number;
  rows: Array<ResitModel>
  displayedRows: Array<ResitModel>
  displayedColumns: Array<ColumnDefinition>
  moduleFilterValues: Array<ResitModel>
  moduleFilter: ModuleModel;
  constructor(private userService : UserService, private studentService : StudentsService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.loading = true;
    this.studentService.studentDetails.subscribe((res)=>{
      this.studentId = res[0]?.id_student

      return res
    })
  }

  onGradeBulletinsClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '40vw',
      data:{id_student : this.studentId,title:'Grade bulletins',fileType: FileType.BULLETIN_GRADE}
    })
  }

  onAchievmentCertificateClick(){
    this.dialogRef.open(AcademyDocumentsComponent, {
      width: '40vw',
      data:{id_student : this.studentId,title:'Achievement certificates',fileType: FileType.ACHIEVEMENT_CERTIFIATE}
    })
  }


}
