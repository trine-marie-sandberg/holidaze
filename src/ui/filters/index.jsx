import { useState } from "react";
import { FilterManager, FilterLabels, TotalGuestsInput, FlexFilters, PaddingOnFilters, SearchFilterWrap, SearchWrap, HideLabel, I, SearchField } from "./style";
import StarRating from "../star-rating";

export default function SearchFilters() {

    const [ search, setSearch ] = useState("");
    const [ rating, setRating ] = useState(0);
    const [ wifi, setWifi ] = useState(false);
    const [ pets, setPets] = useState(false);
    const [ parking, setParking ] = useState(false);
    const [ breakfast, setBreakfast ] = useState(false);

    const filterObject = {
        search: search,
        rating: rating,
        wifi: wifi,
        pets: pets,
        parking: parking,
        breakfast: breakfast,
    }

    function useFilterSearch(e) {

        e.preventDefault();
        console.log(filterObject)
    }

    return(
        <form onSubmit={useFilterSearch}>
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
        <p>{rating}</p>
        <PaddingOnFilters>
            <FlexFilters>
                <FilterLabels>
                    <i className="fa-solid fa-wifi" aria-label="wifi"></i>
                    <input type="checkbox"></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-paw" aria-label="pets"></i>
                    <input type="checkbox"></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-square-parking" aria-label="parking"></i>
                    <input type="checkbox"></input>
                </FilterLabels>
                <FilterLabels>
                    <i className="fa-solid fa-mug-saucer" aria-label="breakfast"></i>
                    <input type="checkbox"></input>
                </FilterLabels>
            </FlexFilters>
        </PaddingOnFilters>
        <PaddingOnFilters>
            <label>
                Total guests: <TotalGuestsInput type="number"></TotalGuestsInput>
            </label>
        </PaddingOnFilters>
        </FilterManager>
            </PaddingOnFilters>
            <button type="submit">Go <i className="fa-solid fa-arrow-pointer"></i></button>
        </SearchFilterWrap>
    </form>
    )
}