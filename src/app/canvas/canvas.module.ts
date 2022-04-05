import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsComponent} from './students/students.component'
import {AdminsComponent} from './admins/admins.component'
import {TeachersComponent} from './teachers/teachers.component'
import {CanvasResolver} from './canvas.resolver'


@NgModule({
  declarations: [AdminsComponent,TeachersComponent,StudentsComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    CanvasResolver
  ],

})
export class CanvasModule { }
