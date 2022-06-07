import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentFilterModel } from '../../models/studentFilter.model';

enum AdmissionFilterEnum  {
  Tous,Admis,Ajourne
}

enum StatusFilterEnum  {
  Tous,EnCours,Ancien
}


@Component({
  selector: 'app-academy-students-filter',
  templateUrl: './pedagogy-students-filter.component.html',
  styleUrls: ['./pedagogy-students-filter.component.css']
})
export class PedagogyStudentsFilterComponent implements OnInit {

  admissionFilter:AdmissionFilterEnum = AdmissionFilterEnum.Tous;
  statusFilter:StatusFilterEnum = StatusFilterEnum.Tous;
  contratProFilter:boolean;
  hiredFilter:boolean;
  admissionFilterEnum = AdmissionFilterEnum;
  statusFilterEnum = StatusFilterEnum;

  constructor(private dialog: MatDialogRef<PedagogyStudentsFilterComponent>) { }

  ngOnInit(): void {
  }


  applyFilter(){
      let filter = new StudentFilterModel();
      filter.hasContratPro = this.contratProFilter ? true : null;
      filter.isHired = this.hiredFilter ? true : null;
      filter.hasResitExams = this.admissionFilter == this.admissionFilterEnum.Tous ? null : this.admissionFilter == this.admissionFilterEnum.Ajourne;
      filter.isAdmitted = this.admissionFilter == this.admissionFilterEnum.Tous ? null : this.admissionFilter == this.admissionFilterEnum.Admis;
      filter.isOldStudent = this.statusFilter == this.statusFilterEnum.Tous ? null : this.statusFilter == this.statusFilterEnum.Ancien;
      this.dialog.close(filter);
  }




}
