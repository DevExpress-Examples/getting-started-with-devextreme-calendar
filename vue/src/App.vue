<template>
    <DxCalendar
        :show-today-button="true"
        zoom-level="year"
        :min="minDate"
        :max="maxDate"
        :disabled-dates="disabledDates"
        cell-template="custom"
    >
        <template #custom="{ data: cell }">
            <span :class="getCellCssClass(cell.date, cell.view)">
                {{ cell.text }}
            </span>
        </template>
    </DxCalendar>
</template>

<script>
    import { DxCalendar } from 'devextreme-vue/calendar';

    function changeYear(date) {
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
        changeYear(new Date('2022-12-25T00:00:00.000Z'))
    ];

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                minDate: changeYear(new Date('2022-01-01T00:00:00.000Z')),
                maxDate: changeYear(new Date('2022-12-31T00:00:00.000Z'))
            }
        },
        methods: {
            getCellCssClass(date, view) {
                let cssClass = '';
                federalHolidays.forEach((item) => {
                    if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && view !== 'year') {
                        cssClass = 'holiday';
                    }
                });
                return cssClass;
            },
            disabledDates(data) {
                return data.view === 'month' && data.date.getDay() === 0;
            }
        }
    }
</script>

<style>
    .dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
        text-shadow: none;
        font-weight: bold;
        color: #ff3030;
    }
</style>