<script setup lang="ts">
import { ref } from 'vue';
import DxCalendar, { type DxCalendarTypes } from 'devextreme-vue/calendar';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

function changeYear(date: Date): Date {
  const thisDate = new Date();
  const thisYear = thisDate.getFullYear();
  return new Date(date.setFullYear(thisYear));
}

const federalHolidays = [
  changeYear(new Date('2022-01-01T00:00:00.000Z')),
  changeYear(new Date('2022-01-17T00:00:00.000Z')),
  changeYear(new Date('2022-02-21T00:00:00.000Z')),
  changeYear(new Date('2022-05-30T00:00:00.000Z')),
  changeYear(new Date('2022-06-19T00:00:00.000Z')),
  changeYear(new Date('2022-07-04T00:00:00.000Z')),
  changeYear(new Date('2022-09-05T00:00:00.000Z')),
  changeYear(new Date('2022-10-10T00:00:00.000Z')),
  changeYear(new Date('2022-11-11T00:00:00.000Z')),
  changeYear(new Date('2022-11-24T00:00:00.000Z')),
  changeYear(new Date('2022-12-25T00:00:00.000Z')),
];

const minDate = changeYear(new Date('2022-01-01T00:00:00.000Z'));
const maxDate = changeYear(new Date('2022-12-31T00:00:00.000Z'));

const zoomLevel = ref<DxCalendarTypes.CalendarZoomLevel>('year');
const currentValue = ref(new Date());
const cellTemplate = ref('custom');
const disabled = ref(false);
const showWeekNumbers = ref(true);
const weekNumberRule = ref<DxCalendarTypes.WeekNumberRule>('firstDay');

function getCellCssClass(date: Date | undefined, view: string): string {
  let cssClass = '';
  federalHolidays.forEach((item) => {
    if (date !== undefined) {
      if (
        date.getDate() === item.getDate() &&
        date.getMonth() === item.getMonth() &&
        view !== 'year'
      ) {
        cssClass = 'holiday';
      }
    }
  });
  return cssClass;
}

function disabledDates(data: { date: Date; view: string }): boolean {
  return data.view === 'month' && data.date.getDay() === 0;
}
</script>

<template>
  <div id="container">
    <DxCalendar
      :show-today-button="true"
      :zoom-level="zoomLevel"
      :min="minDate"
      :max="maxDate"
      :disabled-dates="disabledDates"
      :cell-template="cellTemplate"
      :show-week-numbers="showWeekNumbers"
      :week-number-rule="weekNumberRule"
      :disabled="disabled"
      v-model="currentValue"
    >
      <template #custom="{ data: cell }">
        <span :class="getCellCssClass(cell.date, cell.view)">
          {{ cell.text }}
        </span>
      </template>
    </DxCalendar>
  </div>
</template>

<style scoped>
#container {
  width: 400px;
}
</style>
