import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import "./travelSelection.css"


export default function CalendarEnd (props) {
  const [selectedDay, setSelectedDay] = useState(null);
  const disable = props.disabled;
  if (disable){
    return (
      <div className="col-6 right p-0 border-right" style={{pointerEvents:"none"}}>
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          shouldHighlightWeekends
          locale="fa" 
          inputPlaceholder="تاریخ برگشت"
        />
      </div>
    );
  }
  return (
    <div className="col-6 right p-0 border-right">
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        locale="fa" 
        inputPlaceholder="تاریخ برگشت"
      />
    </div>
  );
};