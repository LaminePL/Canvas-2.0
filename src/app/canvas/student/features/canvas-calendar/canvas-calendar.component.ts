import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { endOfHour, startOfHour } from 'date-fns';
import { StudentsService } from 'src/services/students.service';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
}
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
  events: CalendarEvent[] = []
  level;
  stillStudent;

  constructor(private studentService: StudentsService) { }


  setView(view: CalendarView) {
    this.view = view;
  }
  ngOnInit(): void {


    this.studentService.studentDetails.subscribe((res) => {
      this.studentId = res[0]?.id_student
      this.level = res[0]?.study_length
      this.stillStudent = res[0]?.still_student
      if (this.stillStudent === 0){
        return this.events = [{
          title: 'Please contact the Admin to have access',
          color: colors.yellow,
          start: new Date(),
          allDay: true,
        }]
      }
      if (this.stillStudent === 1){
        this.studentService.getAgendaByLevel(this.level).subscribe(res => {
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
    })


  }

}
