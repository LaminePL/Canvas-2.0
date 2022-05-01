import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentModule} from "./student/student.module";
import {AdminsModule} from "./admins/admins.module";
import {TeachersModule} from "./teachers/teachers.module";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {CanvasComponent} from './canvas.component';
import {MaterialModule} from '../material.module'
@NgModule({
  declarations: [

    PageNotFoundComponent,
    CanvasComponent,
  ],
  imports: [
    CommonModule,
    StudentModule,
    AdminsModule,
    TeachersModule,
    MaterialModule



  ],
  providers: [
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CanvasModule {
}
