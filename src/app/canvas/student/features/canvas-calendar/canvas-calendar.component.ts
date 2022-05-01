import { Component, OnInit } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarView } from 'angular-calendar';
import { endOfHour, startOfHour } from 'date-fns';
@Component({
  selector: 'app-canvas-calendar',
  templateUrl: './canvas-calendar.component.html',
  styleUrls: ['./canvas-calendar.component.css'],

})
export class CanvasCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  constructor() { }

  ngOnInit(): void {
  }
  setView(view: CalendarView) {
    this.view = view;
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
