import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.css']
})
export class StudentCalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
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
      endTime: '18:00',
    },

    nowIndicator: true,
// api call
    dateClick: this.handleDateClick.bind(this),
    events: [
      {
        title: '4PROG',
        start: '2022-05-04T09:30:00',
        end: '2022-05-04T12:30:00',
        extendedProps: {
          department: 'salle des Géants'
        },
        description: 'Disccussion projet de fin d année'
      },
      {
        title: '4PROG',
        start: '2022-05-04T13:30:00',
        end: '2022-05-04T17:30:00',
        extendedProps: {
          department: 'salle des Géants'
        },
        description: 'Disccussion projet de fin d année'
      }
    ],
    eventClick: function (info) {
      Swal.fire({
        //position: 'top-end',
        title: info.event.title,
        text: info.event.extendedProps['description'],
        footer: info.event.extendedProps['department'],
        showConfirmButton: false,
        //timer: 1500
      })
      // change the border color just for fun
      info.el.style.borderColor = 'red';
    }

  };

  handleDateClick(arg: { dateStr: string; }) {
    console.log('date click! ' + arg.dateStr)
  }


  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  constructor() {
    const name = Calendar.name;
    console.log(name)

  }

  ngOnInit(): void {
  }

}
