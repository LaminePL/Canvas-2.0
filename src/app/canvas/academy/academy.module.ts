import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';
import { AcademyStudentsComponent } from './academy-students/academy-students.component';
import { AcademyStudentDetailsComponent } from './academy-student-details/academy-student-details.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: 'students',
    component:AcademyStudentsComponent ,
    children: []
  },
  {
    path: 'students/student-details/:id',
    component: AcademyStudentDetailsComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule],
  exports: [],
  declarations: [
    AcademyStudentsComponent,
    AcademyStudentDetailsComponent
  ],
  providers: [],
})
export class AcademyModule { }
