import { useState } from 'react';

import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import './CurrentDateCalendar.css';

export default function CurrentDateCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <div>
        <DatePicker
          className="CurrentDateCalendar"
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="dd.MM.yyyy"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
        />
      </div>
    </>
  );
}
