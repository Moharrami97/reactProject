import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import "./travelSelection.css"

export default function CalendarStart () {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="col-6 right p-0" >
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa" 
      inputPlaceholder="تاریخ رفت"
    /></div>
  );
};
