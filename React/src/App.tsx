import { useCallback } from 'react';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';
import Calendar, { type CalendarTypes } from 'devextreme-react/calendar';
import CustomCell from './CustomCell';

function changeYear(date: Date): Date {
  const thisDate = new Date();
  const thisYear = thisDate.getFullYear();
  return new Date(date.setFullYear(thisYear));
}

function App(): JSX.Element {
  const minDate = changeYear(new Date('2022-01-01T00:00:00.000Z'));
  const maxDate = changeYear(new Date('2022-12-31T00:00:00.000Z'));

  const disabledDates = useCallback((data: CalendarTypes.DisabledDate): boolean => data.view === 'month' && data.date.getDay() === 0, []);

  const cellRender = useCallback((data: CalendarTypes.CellTemplateData) => <CustomCell data={data} />, []);

  return (
    <div id="container">
      <Calendar
        showTodayButton={true}
        defaultZoomLevel="year"
        min={minDate}
        max={maxDate}
        disabledDates={disabledDates}
        cellRender={cellRender}
        showWeekNumbers={true}
        weekNumberRule="firstDay"
      />
    </div>
  );
}

export default App;
