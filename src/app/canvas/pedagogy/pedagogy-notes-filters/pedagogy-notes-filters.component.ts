import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentFilterModel } from '../../models/studentFilter.model';

enum AdmissionFilterEnum  {
  Tous,Admis,Ajourne
}



@Component({
  selector: 'app-academy-students-filter',
  templateUrl: './pedagogy-notes-filters.component.html',
  styleUrls: ['./pedagogy-notes-filters.component.css']
})
export class PedagogyNotesFiltersComponent implements OnInit {

  admissionFilter:AdmissionFilterEnum = AdmissionFilterEnum.Tous;

  contratProFilter:boolean;
  hiredFilter:boolean;
  admissionFilterEnum = AdmissionFilterEnum;


  constructor(private dialog: MatDialogRef<PedagogyNotesFiltersComponent>) { }

  ngOnInit(): void {
  }


  applyFilter(){
      let filter = new StudentFilterModel();
      filter.hasContratPro = this.contratProFilter ? true : null;
      filter.isHired = this.hiredFilter ? true : null;
      filter.hasResitExams = this.admissionFilter == this.admissionFilterEnum.Tous ? null : this.admissionFilter == this.admissionFilterEnum.Ajourne;
      filter.isAdmitted = this.admissionFilter == this.admissionFilterEnum.Tous ? null : this.admissionFilter == this.admissionFilterEnum.Admis;

      this.dialog.close(filter);
  }




}
