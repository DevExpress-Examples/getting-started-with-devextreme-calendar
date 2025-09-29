
export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

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

interface CellData {
  date?: Date;
  text?: string;
  view: string;
}

function getCellCssClass({ date, view }: CellData): string {
  let cssClass = '';

  if (view === 'month') {
    if (!date) {
      cssClass = 'week-number';
    } else {
      if (isWeekend(date)) {
        cssClass = 'weekend';
      }

      federalHolidays.forEach((item) => {
        if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth()) {
          cssClass = 'holiday';
        }
      });
    }
  }

  return cssClass;
}

interface CustomCellProps {
  data: CellData;
}

function CustomCell({ data: cell }: CustomCellProps): JSX.Element {
  const { text = '' } = cell;
  const className = getCellCssClass(cell);

  return <span className={className}>{text}</span>;
}

export default CustomCell;
