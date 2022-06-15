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
import { PedagogyNotesFiltersComponent } from './pedagogy-notes-filters/pedagogy-notes-filters.component';
import { PedagogyDashboardComponent } from './pedagogy-dashboard/pedagogy-dashboard.component';
import { PedagogyDocumentsComponent } from './pedagogy-documents/pedagogy-documents.component';
import { PedagogyResitDetailsComponent } from './pedagogy-resit-details/pedagogy-resit-details.component';
import { PedagogyCalendarComponent } from './pedagogy-calendar/pedagogy-calendar.component';
import { CanvasCalendarComponent } from './canvas-calendar/canvas-calendar.component';
import { PedagogyMailingComponent } from './pedagogy-mailing/pedagogy-mailing.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarDateFormatter, CalendarModule, CalendarNativeDateFormatter, DateAdapter, DateFormatterParams } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

class CustomDateFormatter extends CalendarNativeDateFormatter {
  public override dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat('ca', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }
}

const ROUTES: Routes = [
  {
    path: 'dashboard/students',
    component:PedagogyStudentsComponent ,
    children: []
  },
  {
    path: 'dashboard/students/student-details/:id',
    component: PedagogyStudentDetailsComponent
  },
  {
    path: 'dashboard/modules',
    component: PedagogyModulesComponent
  },
  {
    path: 'dashboard/contributors',
    component: PedagogyContributorsComponent
  },
  {
    path: 'dashboard/notes',
    component: PedagogyNotesComponent
  },
  {
    path: 'dashboard/calendar',
    component: CanvasCalendarComponent
  },
  {
    path: 'dashboard/mailing',
    component: PedagogyMailingComponent
  },
  {
    path: 'dashboard',
    component: PedagogyDashboardComponent
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES),SharedModule,MaterialModule,CommonModule,FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }, {
      dateFormatter: {
        provide: CalendarDateFormatter,
        useClass: CustomDateFormatter
      }
    }),
  ],
  exports: [],
  declarations: [
    PedagogyStudentsComponent,
    PedagogyStudentsFilterComponent,
    PedagogyStudentDetailsComponent,
    PedagogyModulesComponent,
    PedagogyContributorsComponent,
    PedagogyNotesComponent,
    PedagogyNotesFiltersComponent,
    PedagogyDashboardComponent,
    PedagogyDocumentsComponent,
    PedagogyResitDetailsComponent,
    PedagogyCalendarComponent,
    PedagogyMailingComponent
  ],
  providers: [],
})
export class PedagogyModule { }
