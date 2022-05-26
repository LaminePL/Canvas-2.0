import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentModule} from "./student/student.module";
import {AdminsModule} from "./admins/admins.module";
import {TeachersModule} from "./teachers/teachers.module";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {CanvasComponent} from './canvas.component';
import {MaterialModule} from '../material.module'
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    CanvasComponent,
  ],
  imports: [
    CommonModule,
    StudentModule,
    AdminsModule,
    TeachersModule,
    MaterialModule,
    SharedModule



  ],
  providers: [
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CanvasModule {
}
