import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';
import { PedagogyStudentsComponent } from './pedagogy-students/pedagogy-students.component';
import { FormsModule } from '@angular/forms';
import { PedagogyStudentsFilterComponent } from './pedagogy-students-filter/pedagogy-students-filter.component';

const ROUTES: Routes = [
  {
    path: 'students',
    component:PedagogyStudentsComponent ,
    children: []
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule],
  exports: [],
  declarations: [
    PedagogyStudentsComponent,
    PedagogyStudentsFilterComponent
  ],
  providers: [],
})
export class PedagogyModule { }
