import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreditsECTSComponent} from './features/credits-ects/credits-ects.component';
import {ChartModule} from "angular2-chartjs";
import {MaterialModule} from "../../material.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {NgChartsModule} from "ng2-charts";
import {CanvasCalendarComponent} from './features/canvas-calendar/canvas-calendar.component'
import {CanvasCalendarZoomComponent} from './features/canvas-calendar-zoom/canvas-calendar-zoom.component'
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarNativeDateFormatter,
  DateAdapter,
  DateFormatterParams
} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {RouterModule, Routes} from "@angular/router";
import {StudentBoardComponent} from './student-board/student-board.component';
import {CreditsEctsZoomComponent} from './features/credits-ects-zoom/credits-ects-zoom.component';
import {StudentCalendarComponent} from './features/student-calendar/student-calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ComptaComponent} from './features/compta/compta.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);
import {CoursZoomComponent} from './features/cours-zoom/cours-zoom.component'
import {UserProfileComponent} from '../shared/user-profile/user-profile.component';
import {ComptaZoomComponent} from './features/compta-zoom/compta-zoom.component'
import {FormsModule} from '@angular/forms';
import {ContributorsComponent} from './features/contributors/contributors.component'
import {SharedModule} from "../shared/shared.module";
import {ContributorsZoomComponent} from './features/contributors-zoom/contributors-zoom.component';
import {AdministratifDocComponent} from './features/administratif-doc/administratif-doc.component';
import {AdministratifDocZoomComponent} from './features/administratif-doc-zoom/administratif-doc-zoom.component';
import {InternshipComponent} from './features/internship/internship.component';
import {InternshipZoomComponent} from './features/internship-zoom/internship-zoom.component';
import {ResitsComponent} from './features/resits/resits.component';
import {ResitsZoomComponent} from './features/resits-zoom/resits-zoom.component';
import { ModulesComponent } from './features/modules/modules.component';

class CustomDateFormatter extends CalendarNativeDateFormatter {
  public override dayViewHour({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat('fr-FR', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);

  }
}

const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: StudentBoardComponent,


  },
  {
    path: 'calendar',
    component: StudentCalendarComponent
  },
  {
    path: 'credit-ECTS',
    component: CreditsEctsZoomComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'courses',
    component: CoursZoomComponent
  },
  {
    path: 'contributors',
    component: ContributorsZoomComponent
  },
  {
    path: 'compta',
    component: ComptaZoomComponent
  },
  {
    path: 'resits',
    component: ResitsZoomComponent
  },
  {
    path: 'internship',
    component: InternshipZoomComponent
  },
  {
    path: 'documents',
    component: AdministratifDocZoomComponent
  },
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },

]

@NgModule({
  declarations: [CreditsECTSComponent,
    StudentBoardComponent,
    CanvasCalendarComponent,
    CanvasCalendarZoomComponent,
    CreditsEctsZoomComponent,
    StudentCalendarComponent,
    ComptaComponent,
    CoursZoomComponent,
    ComptaZoomComponent,
    ContributorsComponent,
    ContributorsZoomComponent,
    AdministratifDocComponent,
    AdministratifDocZoomComponent,
    InternshipComponent,
    InternshipZoomComponent,
    ResitsComponent,
    ResitsZoomComponent,
    ModulesComponent


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ChartModule,
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
    NgChartsModule,
    FullCalendarModule,
    FormsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }, {
      dateFormatter: {
        provide: CalendarDateFormatter,
        useClass: CustomDateFormatter
      }
    }),
    SharedModule,

  ],
  exports: [
    RouterModule
  ]
})
export class StudentModule {
}
