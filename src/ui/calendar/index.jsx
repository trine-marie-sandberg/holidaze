import { useEffect, useRef, useState } from "react";
import { Calendar, DateRange, DateRangePicker } from "react-date-range";
import { addDays, subDays } from "date-fns";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useLoad } from "../../hooks/storage";
import { CalendarWrap } from "./style";

export default function DatePicker(props) {

    const [ open, setOpen ] = useState(false);
    const [ range, setRange ] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        }
    ]);
    const [
        bookings,
        setBookings,
        newBooking,
        setNewBooking,
        id
    ] = props.children;

    //Exclude reserved bookings
    const excludeDateIntervals = bookings?.map((booking) => ({
        start: new Date(booking.dateFrom),
        end: new Date(booking.dateTo),
    }));
    // Calculate disabled dates
    // console.log(excludeDateIntervals)
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
            <form 
              className="calendarWrap"
              onSubmit={async (event) => {
                event.preventDefault();
                const user = useLoad("user");
                const token = user.token;
                const data = {
                    "dateFrom": newBooking.startDate,
                    "dateTo": newBooking.endDate,
                    "guests": 1,
                    "venueId": id
                }
                  const dataToSend = {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
                const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings`, dataToSend);
                const json = await response.json();
                }}>
                <input 
                    value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`} 
                    readOnly
                    className="inputBox"
                />
                <button type="submit">Submit</button>
                <CalendarWrap>
                    {/* {open && */}
                    <DateRange
                    date={new Date()}
                    onChange={item => {
                        setRange([item.selection])
                        setNewBooking(item.selection);
                    }}
                    isClearable={true}
                    editableDateInputs= {true}
                    moveRangeOnFirstSelection={false}
                    excludeDateIntervals={disabledDates}
                    ranges={range}
                    months={2}
                    direction="horizontal"
                    className="calendarElement"
                    />
                    {/* } */}
                </CalendarWrap>
            </form>
        </div>
    )
}
//https://reactdatepicker.com/ 
//https://reactdatepicker.com/#example-date-range-for-one-datepicker-with-disabled-dates-highlighted 
//https://hypeserver.github.io/react-date-range/
//https://www.npmjs.com/package/react-date-range 
//https://www.youtube.com/watch?v=5OEOLDBow_0