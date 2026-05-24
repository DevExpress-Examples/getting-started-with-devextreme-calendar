import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { DxCalendarTypes } from 'devextreme-angular/ui/calendar';

import { DxCalendarModule } from 'devextreme-angular/ui/calendar';

@Component({
    selector: 'app-root',
    imports: [DxCalendarModule, NgClass],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  federalHolidays = [
    this.changeYear(new Date('2022-01-01T00:00:00.000Z')),
    this.changeYear(new Date('2022-01-17T00:00:00.000Z')),
    this.changeYear(new Date('2022-02-21T00:00:00.000Z')),
    this.changeYear(new Date('2022-05-30T00:00:00.000Z')),
    this.changeYear(new Date('2022-06-19T00:00:00.000Z')),
    this.changeYear(new Date('2022-07-04T00:00:00.000Z')),
    this.changeYear(new Date('2022-09-05T00:00:00.000Z')),
    this.changeYear(new Date('2022-10-10T00:00:00.000Z')),
    this.changeYear(new Date('2022-11-11T00:00:00.000Z')),
    this.changeYear(new Date('2022-11-24T00:00:00.000Z')),
    this.changeYear(new Date('2022-12-25T00:00:00.000Z')),
  ];

  minDate = this.changeYear(new Date('2022-01-01T00:00:00.000Z'));

  maxDate = this.changeYear(new Date('2022-12-31T00:00:00.000Z'));

  zoomLevels: DxCalendarTypes.CalendarZoomLevel[] = [
    'month', 'year', 'decade', 'century',
  ];

  weekDays: { id: number; text: string }[] = [
    { id: 0, text: 'Sunday' },
    { id: 1, text: 'Monday' },
    { id: 2, text: 'Tuesday' },
    { id: 3, text: 'Wednesday' },
    { id: 4, text: 'Thursday' },
    { id: 5, text: 'Friday' },
    { id: 6, text: 'Saturday' },
  ];

  weekNumberRules: DxCalendarTypes.WeekNumberRule[] = [
    'auto', 'firstDay', 'firstFourDays', 'fullWeek',
  ];

  changeYear(date: Date): Date {
    const thisDate = new Date();
    const thisYear = thisDate.getFullYear();
    return new Date(date.setFullYear(thisYear));
  }

  getCellCssClass(date: Date, view: string): string {
    let cssClass = '';
    this.federalHolidays.forEach((item) => {
      if (date !== undefined) {
        if (
          date.getDate() === item.getDate()
          && date.getMonth() === item.getMonth()
          && view !== 'year'
        ) {
          cssClass = 'holiday';
        }
      }
    });
    return cssClass;
  }

  disabledDates(data: { date: Date; view: string }): boolean {
    return data.view === 'month' && data.date.getDay() === 0;
  }
}
