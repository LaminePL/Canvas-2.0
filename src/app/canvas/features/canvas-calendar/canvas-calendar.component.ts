import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import {fr} from 'date-fns/esm/locale'
import { format } from 'date-fns/esm'
@Component({
  selector: 'app-canvas-calendar',
  templateUrl: './canvas-calendar.component.html',
  styleUrls: ['./canvas-calendar.component.css']
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
      start: startOfDay(new Date()),
      title: '4PROJ',
    },
    {
      start: startOfDay(new Date()),
      title: '4DEAP',
    }
  ]

}
