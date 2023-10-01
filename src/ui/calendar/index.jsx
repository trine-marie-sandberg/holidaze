import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useLoad } from "../../hooks/storage";
import { CalendarInput, CalendarWrap, GuestsInput, LoadingMessageWrap, SubmitBtn, SubmitInputWrap } from "./style";
import Loader from "../loader";

export default function DatePicker(props) {

    const [ range, setRange ] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: "selection",
        }
    ]);
    const [ guests, setGuests ] = useState(1);
    const [ isLoading, setIsLoading ] = useState(false);
    const [
        bookings,
        setBookings,
        newBooking,
        setNewBooking,
        id,
        maxGuests,
    ] = props.children;

    const handleGuestChange = (e) => {
        setGuests(parseInt(e.target.value));
      };
    useEffect(() => {
        if(guests < 1) {
            setGuests(1);
        }
        if(guests > maxGuests) {
            setGuests(maxGuests);
        }
    }, [guests])

    const generateDisabledDates = () => {
        const dates = [];
        bookings?.forEach((booking) => {
          const startDate = new Date(booking.dateFrom);
          const endDate = new Date(booking.dateTo);
    
          while (startDate <= endDate) {
            dates.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 1);
          }
        });
        return dates;
      };
    const disabledDates = generateDisabledDates();

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
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
        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings`, dataToSend);
            const json = await response.json();
            if(response.ok) {
                alert(`Booked venue from ${newBooking.startDate} to ${newBooking.endDate}`)
            }
            if(!response.ok) {
                console.log(json)
            }
        } catch(error) {
            console.log(error)
        }
        finally {
            setIsLoading(false);
        }
    }

    return(
        <div>
            <form 
              className="calendarWrap"
              onSubmit={async (event) => handleSubmit(event)}
            >
                <LoadingMessageWrap>
                {isLoading &&
                    <Loader />
                }
                </LoadingMessageWrap>
                <CalendarInput 
                    value={`Reserve from ${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`} 
                    readOnly
                    disabled
                    className="inputBox"
                />
                <SubmitInputWrap>
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
                        disabledDates={disabledDates}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calendarElement"
                        minDate={new Date()}
                        rangeColors={["rgb(5, 42, 64)"]}
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