import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';
import Swal from 'sweetalert2'
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-pedagogy-calendar',
  templateUrl: './pedagogy-calendar.component.html',
  styleUrls: ['./pedagogy-calendar.component.scss']
})
export class PedagogyCalendarComponent implements OnInit {
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
    this.studentService.getCalendar(4).subscribe(res=>{
      this.events = res
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

      }
      console.log(this.calendarOptions)
    })
  }

}
