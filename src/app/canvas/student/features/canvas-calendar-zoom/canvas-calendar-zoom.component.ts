import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import endOfHour from 'date-fns/endOfHour';
import startOfHour from 'date-fns/startOfHour';
import { FrenchDateFormatter } from './french-date-formater.provider';


@Component({
  selector: 'app-canvas-calendar-zoom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './canvas-calendar-zoom.component.html',
  styleUrls: ['./canvas-calendar-zoom.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: FrenchDateFormatter,
    },
  ],
})
export class CanvasCalendarZoomComponent implements OnInit {
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Month;
  // events: CalendarEvent[] = [];
  locale: string = 'fr';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  setView(view: CalendarView) {
    this.view = view;
  }
  constructor() { }

  ngOnInit(): void {
  }

  events: CalendarEvent[] = [
    {
      title: '4PROJ',
      start: startOfHour(new Date(2022, 3, 20, 9, 0)),
      end: endOfHour(new Date(2022, 3, 20, 12, 0))

    },
    {
      title: '4PROJ',
      start: startOfHour(new Date(2022, 3, 20, 13, 0)),
      end: endOfHour(new Date(2022, 3, 20, 17, 0))

    },

  ]


}
