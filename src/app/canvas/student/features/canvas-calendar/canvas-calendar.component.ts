import { Component, OnInit } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarView } from 'angular-calendar';
import { endOfHour, startOfHour } from 'date-fns';
import { StudentsService } from 'src/services/students.service';
@Component({
  selector: 'app-canvas-calendar',
  templateUrl: './canvas-calendar.component.html',
  styleUrls: ['./canvas-calendar.component.css'],

})
export class CanvasCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  freeDay = false
  studentId: number
  constructor(private studentService: StudentsService) { }


  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] = []
  ngOnInit(): void {
    this.studentService.studentDetails.subscribe((res) => {
      this.studentId = res[0].id_student
    })
    this.studentService.getCalendar(this.studentId).subscribe(res => {
      let events = res.map((x) => {
        return ({
          title: x.title,
          start: startOfHour(new Date(x.start)),
          end: endOfHour(new Date(x.end))

        })
      })
      this.events = events
      let today = new Date
      let date = this.events.find(date => { return date.start.getDate() === today.getDate() }) || [].length > 0
      if (date == false) {
        return this.events = [{
          title: 'You have nothing scheduled for today',
          start: new Date(),
          allDay: true,
        }]
      }
    })
  }

}
