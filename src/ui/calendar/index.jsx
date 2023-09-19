import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useLoad } from "../../hooks/storage";
import { CalendarInput, CalendarWrap, GuestsInput, SubmitBtn, SubmitInputWrap } from "./style";

export default function DatePicker(props) {

    const [ range, setRange ] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        }
    ]);
    const [ guests, setGuests ] = useState(1);
    const [
        bookings,
        setBookings,
        newBooking,
        setNewBooking,
        id
    ] = props.children;
    const handleGuestChange = (e) => {
        setGuests(parseInt(e.target.value));
      };
    useEffect(() => {
        if(guests < 1) {
            setGuests(1);
        }
    }, [guests])

    //Exclude reserved bookings
    const excludeDateIntervals = bookings?.map((booking) => ({
        start: new Date(booking.dateFrom),
        end: new Date(booking.dateTo),
    }));
    // Calculate disabled dates
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
                        "guests": guests,
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
                    console.log(dataToSend)
                    const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings`, dataToSend);
                    const json = await response.json();
                    if(response.ok) {
                        alert(`Booked venue from ${newBooking.startDate} to ${newBooking.endDate}`)
                    }
                    if(!response.ok) {
                        console.log(json)
                    }
                    }}>
                    <SubmitInputWrap>
                        <CalendarInput 
                            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`} 
                            readOnly
                            className="inputBox"
                        />
                        <div>
                            <label htmlFor="guests">Total guests: </label>
                            <GuestsInput 
                                type="number"
                                id="guests"
                                value={guests}
                                onChange={handleGuestChange}
                            />
                        </div>
                        <SubmitBtn type="submit">Submit</SubmitBtn>
                    </SubmitInputWrap>
                    
                    <CalendarWrap>
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
                        months={1}
                        direction="horizontal"
                        className="calendarElement"
                        />
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