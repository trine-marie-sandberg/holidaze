import { useEffect, useRef, useState } from "react";
import { Calendar, DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DatePicker(props) {

    const [ calendar, setCalendar ] = useState("");
    //const [ excludeDateIntervals, setExcludeDateIntervals ] = useState([]);
    const [ range, setRange ] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        }
    ]);
    const [ open, setOpen ] = useState(false);
    const [
        bookings,
        setBookings
    ] = props.children;
    //Exclude reserved bookings
    const excludeDateIntervals = bookings?.map((booking) => ({
        start: new Date(booking.dateFrom),
        end: new Date(booking.dateTo),
    }));
    // Calculate disabled dates
    console.log(excludeDateIntervals)
    const disabledDates = excludeDateIntervals?.flatMap(interval => {
    const currentDate = new Date(interval.startDate);
    const endDate = new Date(interval.endDate);

    const dates = [];
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    });

    //Toogle visibility
    // useEffect(() => {
    //     document.addEventListener("keydown", hideOnEscape, true);
    //     document.addEventListener("click", hidenOnClickOutside, true);
    // }, []);

    // function hideOnEscape(event) {
    //     if(event.key === "Escape") {
    //         setOpen(false);
    //     }
    // }
    // const refOne = useRef(null)
    // function hidenOnClickOutside(event) {
    //     if(refOne.current && !refOne.current.contains(event.target)) {
    //         setOpen(false);
    //     }
    // }
    //
    return(
        <div>
            <h2>Calendar</h2>
            <div className="calendarWrap">
                <input 
                    value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`} 
                    readOnly
                    className="inputBox"
                />
                <div>
                    {/* {open && */}
                    <DateRange
                    date={new Date()}
                    onChange={item => setRange([item.selection])}
                    editableDateInputs= {true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={2}
                    direction="horizontal"
                    className="calendarElement"
                    />
                    {/* } */}
                </div>
            </div>
        </div>
    )
}
//https://hypeserver.github.io/react-date-range/
//https://www.npmjs.com/package/react-date-range 
//https://www.youtube.com/watch?v=5OEOLDBow_0