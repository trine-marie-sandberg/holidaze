import { useState } from "react";
import { FilterManager, FilterLabels, TotalGuestsInput, FlexFilters, PaddingOnFilters, SearchFilterWrap, SearchWrap, HideLabel, I, SearchField, RatingCounter, SubmitBtn } from "./style";
import StarRating from "../star-rating";

export default function SearchFilters(props) {

    const [ search, setSearch ] = useState("");
    const [ rating, setRating ] = useState(0);
    const [ guests, setGuests ] = useState(0);

    const 
    [   updateObject, 
        submitted, 
        isSubmitted, 
        wifi,
        setWifi,
        pets,
        setPets,
        parking,
        setParking,
        breakFast, setBreakFast

    ] = props.children;
    const newFilterObject = {
        search: search,
        rating: rating,
        guests: guests,

        wifi: wifi,
        pets: pets,
        parking: parking,
        breakfast: breakFast,
    }
    function submitFilters(e) {
        e.preventDefault();
        updateObject(newFilterObject);
        let submArray = [];
        if(isSubmitted[0] === "") {
            submArray.push("true")
            submitted([...submArray]);
            console.log(newFilterObject);
        } if(isSubmitted[0] === "true") {
            submArray.push("")
            submitted([...submArray]);
            console.log(newFilterObject);
        }
    }

    return(
        <form onSubmit={submitFilters}>
        <SearchFilterWrap>
            <SearchWrap>
                <HideLabel htmlFor="search">Search </HideLabel>
                <I className="fa-solid fa-search" aria-label="search icon"></I>
                <SearchField 
                  type="text" 
                  id="search" 
                  aria-label="search input field" 
                  placeholder="search for destination, contry, venue .." 
                  onChange={(e) => setSearch(e.target.value)} />
            </SearchWrap>
            <SubmitBtn type="submit">Go <i className="fa-solid fa-arrow-pointer"></i></SubmitBtn>
            <PaddingOnFilters>
            <FilterManager>
        <StarRating>{setRating}</StarRating>
        <RatingCounter>
            <p>{rating}</p>
        </RatingCounter>
        <PaddingOnFilters>
            <FlexFilters>
                <FilterLabels>
                    <i className="fa-solid fa-wifi" aria-label="wifi"></i>
                    <input type="checkbox" onChange={() => {
                        if(wifi === false) {
                            setWifi(true)
                        } if(wifi === true) {
                            setWifi(false)
                        }
                    }}></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-paw" aria-label="pets"></i>
                    <input type="checkbox" onChange={() => {
                        if(pets === false) {
                            setPets(true)
                        } if(pets === true) {
                            setPets(false)
                        }
                    }}></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-square-parking" aria-label="parking"></i>
                    <input type="checkbox" onChange={() => {
                        if(parking === false) {
                            setParking(true)
                        } if(parking === true) {
                            setParking(false)
                        }
                    }}></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-mug-saucer" aria-label="breakfast"></i>
                    <input type="checkbox" onChange={() => {
                        if(breakFast === false) {
                            setBreakFast(true)
                        } if(breakFast === true) {
                            setBreakFast(false)
                        }
                    }}></input>
                </FilterLabels>
            </FlexFilters>
        </PaddingOnFilters>
        <PaddingOnFilters>
            <label>
                Total guests: <TotalGuestsInput type="number" onChange={(e) => setGuests(e.target.value)}></TotalGuestsInput>
            </label>
        </PaddingOnFilters>
        </FilterManager>
            </PaddingOnFilters>
        </SearchFilterWrap>
        </form>
    )
}