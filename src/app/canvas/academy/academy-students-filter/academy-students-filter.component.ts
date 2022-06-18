import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentFilterModel } from '../../models/studentFilter.model';

enum AdmissionFilterEnum  {
  All,Resit,Project
}

enum StatusFilterEnum  {
  All,StillStudents,OldStudents
}


@Component({
  selector: 'app-academy-students-filter',
  templateUrl: './academy-students-filter.component.html',
  styleUrls: ['./academy-students-filter.component.scss']
})
export class AcademyStudentsFilterComponent implements OnInit {

  admissionFilter:AdmissionFilterEnum = AdmissionFilterEnum.All;
  statusFilter:StatusFilterEnum = StatusFilterEnum.All;
  contratProFilter:boolean;
  hiredFilter:boolean;
  admissionFilterEnum = AdmissionFilterEnum;
  statusFilterEnum = StatusFilterEnum;

  constructor(private dialog: MatDialogRef<AcademyStudentsFilterComponent>) { }

  ngOnInit(): void {
  }


  applyFilter(){
      let filter = new StudentFilterModel();
      filter.hasContratPro = this.contratProFilter ? true : null;
      filter.isHired = this.hiredFilter ? true : null;
      filter.hasResitExams = this.admissionFilter == this.admissionFilterEnum.All ? null : this.admissionFilter == this.admissionFilterEnum.Resit;
      filter.hasProjects = this.admissionFilter == this.admissionFilterEnum.All ? null : this.admissionFilter == this.admissionFilterEnum.Project;
      //filter.isAdmitted = this.admissionFilter == this.admissionFilterEnum.All ? null : this.admissionFilter == this.admissionFilterEnum.Admis;
      filter.isOldStudent = this.statusFilter == this.statusFilterEnum.All ? null : this.statusFilter == this.statusFilterEnum.OldStudents;
      this.dialog.close(filter);
  }




}
