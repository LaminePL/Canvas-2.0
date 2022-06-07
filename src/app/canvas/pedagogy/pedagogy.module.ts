import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';
import { PedagogyStudentsComponent } from './pedagogy-students/pedagogy-students.component';
import { FormsModule } from '@angular/forms';
import { PedagogyStudentsFilterComponent } from './pedagogy-students-filter/pedagogy-students-filter.component';
import { PedagogyStudentDetailsComponent } from './pedagogy-student-details/pedagogy-student-details.component';
import { PedagogyModulesComponent } from './pedagogy-modules/pedagogy-modules.component';
import { PedagogyContributorsComponent } from './pedagogy-contributors/pedagogy-contributors.component';
import { PedagogyNotesComponent } from './pedagogy-notes/pedagogy-notes.component';

const ROUTES: Routes = [
  {
    path: 'students',
    component:PedagogyStudentsComponent ,
    children: []
  },
  {
    path: 'students/student-details/:id',
    component: PedagogyStudentDetailsComponent
  },
  {
    path: 'modules',
    component: PedagogyModulesComponent
  },
  {
    path: 'contributors',
    component: PedagogyContributorsComponent
  },
  {
    path: 'notes',
    component: PedagogyNotesComponent
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule],
  exports: [],
  declarations: [
    PedagogyStudentsComponent,
    PedagogyStudentsFilterComponent,
    PedagogyStudentDetailsComponent,
    PedagogyModulesComponent,
    PedagogyContributorsComponent,
    PedagogyNotesComponent
  ],
  providers: [],
})
export class PedagogyModule { }
