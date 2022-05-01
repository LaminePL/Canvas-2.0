import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class FrenchDateFormatter extends CalendarDateFormatter {

  public override dayViewHour({ date, locale }: DateFormatterParams): string {
   // return formatDate(date, 'HH:mm', locale);
   return  formatDate(date,'HH:mm', 'fr');
  }
  public override weekViewHour({ date, locale }: DateFormatterParams): string {
    return this.dayViewHour({ date, locale });
  }
}
