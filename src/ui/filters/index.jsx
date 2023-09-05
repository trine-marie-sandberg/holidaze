import { useState } from "react";
import { FilterManager, FilterLabels, TotalGuestsInput, FlexFilters, PaddingOnFilters, SearchFilterWrap, SearchWrap, HideLabel, I, SearchField, RatingCounter } from "./style";
import StarRating from "../star-rating";

export default function SearchFilters(props) {

    const [ search, setSearch ] = useState("");
    const [ rating, setRating ] = useState(0);
    const [ wifi, setWifi ] = useState(false);
    const [ pets, setPets] = useState(false);
    const [ parking, setParking ] = useState(false);
    const [ breakfast, setBreakfast ] = useState(false);
    const [ guests, setGuests ] = useState(0);

    const newFilterObject = {
        search: search,
        rating: rating,
        wifi: wifi,
        pets: pets,
        parking: parking,
        breakfast: breakfast,
        guests: guests,
    }
    const [ updateObject, submitted ] = props.children;
    //const updateObject = props.children;

    function submitFilters(e) {
        e.preventDefault();
        updateObject(newFilterObject);
        submitted(["true"]);
        console.log(newFilterObject);
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
                    <input type="checkbox" onChange={(e) => setWifi(e.target.value)}></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-paw" aria-label="pets"></i>
                    <input type="checkbox" onChange={(e) => setPets(e.target.value)}></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-square-parking" aria-label="parking"></i>
                    <input type="checkbox" onChange={(e) => setParking(e.target.value)}></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-mug-saucer" aria-label="breakfast"></i>
                    <input type="checkbox" onChange={(e) => setBreakfast(e.target.value)}></input>
                </FilterLabels>
            </FlexFilters>
        </PaddingOnFilters>
        <PaddingOnFilters>
            <label>
                Total guests: <TotalGuestsInput type="number" onChange={(e) => setGuests(e.target.value)}></TotalGuestsInput>
            </label>
        </PaddingOnFilters>
        <button type="submit">Go <i className="fa-solid fa-arrow-pointer"></i></button>
        </FilterManager>
            </PaddingOnFilters>
        </SearchFilterWrap>
        </form>
    )
}