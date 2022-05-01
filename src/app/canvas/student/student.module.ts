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
import { CreditsEctsZoomComponent } from './features/credits-ects-zoom/credits-ects-zoom.component'

class CustomDateFormatter extends CalendarNativeDateFormatter {
  public override dayViewHour({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat('ca', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }
}

const ROUTES: Routes = [
  {
    path: '',
    component: StudentBoardComponent,

  },
  {
    path: 'calendar',
    component: CanvasCalendarZoomComponent
  },
  {
    path: 'credit-ECTS',
    component: CreditsEctsZoomComponent
  }

]

@NgModule({
  declarations: [CreditsECTSComponent, StudentBoardComponent, CanvasCalendarComponent, CanvasCalendarZoomComponent, CreditsEctsZoomComponent],
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
  exports: [
    RouterModule
  ]
})
export class StudentModule {
}
