import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DatePicker() {

    const [ calendar, setCalendar ] = useState("");
    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        setCalendar(format(new Date(), "MM/dd/yyyy"));
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hidenOnClickOutside, true);
    }, []);

    function handleSelect(date) {
        console.log(date)
        setCalendar(format(date, "MM/dd/yyyy"))
    }
    function hideOnEscape(event) {
        if(event.key === "Escape") {
            setOpen(false);
        }
    }
    const refOne = useRef(null)
    function hidenOnClickOutside(event) {
        if(refOne.current && !refOne.current.contains(event.target)) {
            setOpen(false);
        }
    }

    return(
        <div>
            <h2>Calendar</h2>
            <div className="calendarWrap">
                <input 
                  value={calendar} 
                  readOnly
                  className="inputBox"
                  onClick={() => setOpen(open => !open)}
                />
                <div ref={refOne}>
                    {open &&
                    <Calendar
                    date={new Date()}
                    onChange={handleSelect}
                    className="calendarElement"
                    />
                    }
                </div>
            </div>
        </div>
    )
}
//https://hypeserver.github.io/react-date-range/
//https://www.npmjs.com/package/react-date-range 
//https://www.youtube.com/watch?v=5OEOLDBow_0