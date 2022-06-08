import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';
import Swal from 'sweetalert2'
import { StudentsService } from 'src/services/students.service';
import { CalendarModel } from 'src/app/canvas/models/calendar.model';

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.css']
})
export class StudentCalendarComponent implements OnInit {
  events: any
  calendarOptions: CalendarOptions = {


  };

  handleDateClick(arg: { dateStr: string; }) {
    console.log('date click! ' + arg.dateStr)
  }


  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  constructor(private studentService:StudentsService) {
    const name = Calendar.name;
  }

  ngOnInit(): void {
    this.studentService.getCalendar(8955).subscribe(res=>{
      this.events = res
      console.log(this.events)

      this.calendarOptions= {
        plugins: [timeGridPlugin, dayGridPlugin],
        selectable: true,
        moreLinkClick: 'popover',

        //  weekNumbers: true,
        timeZone: 'Europe/Paris',
        locales: [frLocale],
        locale: 'fr',
        initialView: 'timeGridWeek',
        weekends: false,
        buttonText: {
          today: `Aujourd'hui`,
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour'
        },
        headerToolbar: {
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        dayHeaderFormat: {weekday: 'short', month: 'short', day: '2-digit', omitCommas: true},
        businessHours: {
          daysOfWeek: [1, 2, 3, 4, 5], // lundi - vendredi
          startTime: '09:00',
          endTime: '19:00',
        },

        nowIndicator: true,
    // api call
        dateClick: this.handleDateClick.bind(this),
        eventClick: function (info) {
          Swal.fire({
            //position: 'top-end',
            title: info.event.title,
            text: info.event.extendedProps['description'],
            footer: info.event.extendedProps['department'],
            showConfirmButton: false,
            //timer: 1500
          })
          info.el.style.borderColor = 'red';
        },
       events : this.events
       /* events: [
          {
            title: '4PROG',
            start: '2022-06-08T07:00:00.000Z',
            end: '2022-06-08T16:00:00.000Z',
            department: 'salle des Géants',
            description: 'Disccussion projet de fin d année'
          },
           {
            title: '4PROG',
            start: '2022-06-09T07:00:00.000Z',
            end: '2022-06-09T16:00:00.000Z',
            department: 'salle des Géants',
            description: 'Disccussion projet de fin d année'
          },

        ],*/
      }
      console.log(this.calendarOptions)
    })
  }

}
