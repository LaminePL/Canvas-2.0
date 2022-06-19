import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';
import Swal from 'sweetalert2'
import {StudentsService} from 'src/services/students.service';

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.css']
})
export class StudentCalendarComponent implements OnInit {
  events: any
  level
  stillStudent
  calendarOptions: CalendarOptions = {};

  handleDateClick(arg: { dateStr: string; }) {
  }


  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  constructor(private studentService: StudentsService) {
    const name = Calendar.name;
  }

  ngOnInit(): void {
    this.studentService.studentDetails.subscribe((res) => {
      this.stillStudent = res[0]?.still_student
      this.level = res[0]?.study_length
      if (this.stillStudent === 1) {
        this.studentService.getAgendaByLevel(this.level).subscribe(res => {
          this.events = res



          this.calendarOptions = {
            plugins: [timeGridPlugin, dayGridPlugin,],
            selectable: true,
            moreLinkClick: 'popover',

            weekNumbers: true,
            timeZone: 'America/New_York',
            //locales: [frLocale],
            //locale: 'fr',
            weekends: false,
            buttonText: {
              today: `Today`,
              month: 'Month',
              week: 'Week',
              day: 'Day'
            },
            headerToolbar: {
              left: 'today prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            dayHeaderFormat: {weekday: 'long', omitCommas: true},
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
                title: info.event.title,
                text: info.event.extendedProps['description'],
                footer: info.event.extendedProps['department'],
                showConfirmButton: false,
              })
              info.el.style.borderColor = 'red';
            },
            events: this.events,

          }

        })

      }
    })

  }

}
