import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsBoardComponent} from './admins/admins-board/admins-board.component'
import {TeachersBoardComponent} from './teachers/teachers-board/teachers-board.component'
import {CanvasResolver} from './canvas.resolver'
import {MaterialModule} from '../material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { StudentNavComponent } from './student/student-nav/student-nav.component';
import { AdminsNavComponent } from './admins/admins-nav/admins-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StudentBoardComponent } from './student/student-board/student-board.component'
import {TeachersNavComponent} from './teachers/teachers-nav/teachers-nav.component';
import { TestComponent } from './test/test.component';
import { CreditsECTSComponent } from './student/credits-ects/credits-ects.component'
import { ChartModule } from 'angular2-chartjs';
import { NgChartsModule } from 'ng2-charts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {CanvasCalendarComponent} from './features/canvas-calendar/canvas-calendar.component'
@NgModule({
  declarations: [
    AdminsBoardComponent,
    TeachersBoardComponent,
    StudentNavComponent,
    StudentBoardComponent,
    AdminsNavComponent,
    TeachersNavComponent,
    TestComponent,
    CreditsECTSComponent,
    CanvasCalendarComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ChartModule,
    NgChartsModule,
    CalendarModule.forRoot({
     provide: DateAdapter,
     useFactory: adapterFactory,
   }),

  ],
  providers: [
    CanvasResolver
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CanvasModule { }
