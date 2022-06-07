import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { StudentModule } from "./student/student.module";
import { AdminsModule } from "./admins/admins.module";
import { TeachersModule } from "./teachers/teachers.module";
import { CanvasComponent } from './canvas.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PedagogyStudentsComponent } from './pedagogy/pedagogy-students/pedagogy-students.component';
@NgModule({
  declarations: [
    CanvasComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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

