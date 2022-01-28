import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import { Calendar } from 'devextreme-react/calendar';

const federalHolidays = [
    new Date('2022-01-01T00:00:00.000Z'),
    new Date('2022-01-17T00:00:00.000Z'),
    new Date('2022-02-21T00:00:00.000Z'),
    new Date('2022-05-30T00:00:00.000Z'),
    new Date('2022-06-19T00:00:00.000Z'),
    new Date('2022-07-04T00:00:00.000Z'),
    new Date('2022-09-05T00:00:00.000Z'),
    new Date('2022-10-10T00:00:00.000Z'),
    new Date('2022-11-11T00:00:00.000Z'),
    new Date('2022-11-24T00:00:00.000Z'),
    new Date('2022-12-25T00:00:00.000Z')
];

function App() {
    const minDate = new Date('2022-01-01T00:00:00.000Z');
    const maxDate = new Date('2022-12-31T00:00:00.000Z');
    
    return (
        <Calendar
        showTodayButton={true}
        defaultZoomLevel="year"
        min={minDate}
        max={maxDate}
        disabledDates={disabledDates}
        cellRender={CustomCell}
        >
        </Calendar>
    ); 
    
};

function disabledDates(data) {
    return data.view === 'month' && data.date.getDay() === 0;
};

function CustomCell(cell) {
    return (
        <span className={getCellCssClass(cell.date, cell.view)}>
            { cell.text }
        </span>
    );
};

function getCellCssClass(date, view) {
    let cssClass = '';
    federalHolidays.forEach((item) => {
        if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && view !== 'year') {
            cssClass = 'holiday';
        }
    });
    return cssClass;
};

export default App;