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
import { AcademyStudentsStatusComponent } from './academy-students-status/academy-students-status.component';
import { AcademyDashboardComponent } from './academy-dashboard/academy-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AcademyDocumentsComponent } from './academy-documents/academy-documents.component';
import { AcademyResitDetailsComponent } from './academy-resit-details/academy-resit-details.component';
import { AcademyProfileComponent } from './academy-profile/academy-profile.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AcademyDashboardComponent
  },
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
  {
    path: 'modules/students-status/:id',
    component: AcademyStudentsStatusComponent
  },
  {
    path: 'user-profile',
    component:AcademyProfileComponent ,
    children: []
  },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule,MatDialogModule],
  exports: [],
  declarations: [
    AcademyStudentsComponent,
    AcademyStudentDetailsComponent,
    AcademyContributorsComponent,
    AcademyModulesComponent,
    AcademyPartnershipsComponent,
    AcademyStudentsFilterComponent,
    AcademyStudentsStatusComponent,
    AcademyDashboardComponent,
    AcademyDocumentsComponent,
    AcademyResitDetailsComponent,
    AcademyProfileComponent,
  ],
  providers: [],
})
export class AcademyModule { }
