import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DatePicker() {
    const [ calendar, setCalendar ] = useState("");
    const handleSelect = (date) => {
        console.log(date)
    }

    return(
        <div>
            <h2>Calendar</h2>
            <div className="calendarWrap">
                <Calendar
                  date={new Date()}
                  onChange={handleSelect}
                  className="calendarElement"
                />
            </div>
        </div>
    )
}