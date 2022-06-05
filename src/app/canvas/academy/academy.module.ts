import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';
import { AcademyStudentsComponent } from './academy-students/academy-students.component';
import { AcademyStudentDetailsComponent } from './academy-student-details/academy-student-details.component';
import { FormsModule } from '@angular/forms';
import { AcademyContributorsComponent } from './academy-contributors/academy-contributors.component';
import { AcademyModulesComponent } from './academy-modules/academy-modules.component';
import { AcademyPartnershipsComponent } from './academy-partnerships/academy-partnerships.component';
import { AcademyStudentsFilterComponent } from './academy-students-filter/academy-students-filter.component';

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
  {
    path: 'contributors',
    component: AcademyContributorsComponent
  },
  {
    path: 'modules',
    component: AcademyModulesComponent
  },
  {
    path: 'partnerships',
    component: AcademyPartnershipsComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule],
  exports: [],
  declarations: [
    AcademyStudentsComponent,
    AcademyStudentDetailsComponent,
    AcademyContributorsComponent,
    AcademyModulesComponent,
    AcademyPartnershipsComponent,
    AcademyStudentsFilterComponent
  ],
  providers: [],
})
export class AcademyModule { }
