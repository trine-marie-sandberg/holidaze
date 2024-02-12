import { useEffect, useState } from "react";
import useFetch from "../../hooks/api";
import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import VenueCards from "../../ui/venue-cards";
import { ShowMoreBtn, BtnCardsWrap, FilterBg, LoadingWrap, NoMatchMessage } from "./style";
import SearchFilters from "../../ui/filters";
import base, { page, created } from "../../constants.js";
import Loader from "../../ui/loader";

export default function VenuesPage() {
    
    const [ limit, setLimit ] = useState(10);
    //const url = `${base + created + page + limit}`;
    const url = `https://api.noroff.dev/api/v1/holidaze/venues`
    const { data, loading, error } = useFetch(url);
    const [ filteredData, setFilteredData ] = useState();
    const [ noMatch, setNoMatch ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState([""]);
    const [ wifi, setWifi ] = useState(false);
    const [ pets, setPets ] = useState(false);
    const [ parking, setParking ] = useState(false);
    const [ breakFast, setBreakFast ] = useState(false);
    const [ rating, setRating ] = useState(0);
    const [ guests, setGuests ] = useState(0);
    const [ search, setSearch ] = useState("");

    function handleFilter() {
        const newFilter = data.filter((value) => {
             let searchName = value.name.toLowerCase().includes(search.toLowerCase());
             let searchContry = value.location.country.toLowerCase().includes(search.toLowerCase());
             let searchWord = searchName || searchContry;
             let totalGuests = value.maxGuests >= guests;
             let totalRating = value.rating >= rating;
             
             let hasWifi = value.meta.wifi === wifi;
             let petsAllowed = value.meta.pets === pets;
             let hasParking = value.meta.parking === parking;
             let hasBreakFast = value.meta.breakfast === breakFast;
             return hasWifi & petsAllowed & hasParking & hasBreakFast & totalRating & totalGuests & searchWord;
          })
          setFilteredData(newFilter);
    }

    useEffect(() => {
        handleFilter();
        if(filteredData?.length === 0) {
            setNoMatch(true);
          } if(filteredData?.length >= 1) {
            setNoMatch(false);
          }
    }, isSubmitted)

    try {
        return(
            <PageWrapper>
                {/* <CategoryCarousel /> */}
                <h1>Find venues</h1>
                <SearchFilters>
                    {setIsSubmitted}
                    {isSubmitted}
                    {wifi}
                    {setWifi}
                    {pets}
                    {setPets}
                    {parking}
                    {setParking}
                    {breakFast}
                    {setBreakFast}
                    {rating}
                    {setRating}
                    {setGuests}
                    {setSearch}
                </SearchFilters>
                <div>
                    <LoadingWrap>
                        {loading && <Loader/>}
                    </LoadingWrap>
                    {error  && <h2>Error: Could not load content</h2>}
                    <FilterBg>
                    {filteredData &&
                        <div>
                            <BtnCardsWrap>
                                <VenueCards>
                                    {filteredData}
                                </VenueCards>
                            </BtnCardsWrap>
                            {noMatch &&
                                <NoMatchMessage>
                                    <p>No match for this search</p>
                                    <button onClick={() => setNoMatch(false)}>ok</button>
                                </NoMatchMessage>
                            }
                        </div>
                    }
                    </FilterBg>
                    {data &&
                        <BtnCardsWrap>
                            <VenueCards>
                                {data}
                            </VenueCards>
                            <ShowMoreBtn onClick={() => setLimit(limit + 10)}>Show more</ShowMoreBtn>
                        </BtnCardsWrap>
                    }
                </div>
            </PageWrapper>
        )
    }
    catch(error) {
        return(
            <PageWrapper>
                <h1>Error. Failed to load the page. Please try again later</h1>
            </PageWrapper>
        )
    }
}