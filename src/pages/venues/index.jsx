import { useEffect, useState } from "react";
import useFetch from "../../hooks/api";
import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import VenueCards from "../../ui/venue-cards";
import { ShowMoreBtn, BtnCardsWrap, FilterBg } from "./style";
import SearchFilters from "../../ui/filters";

export default function VenuesPage() {
    
    const [ limit, setLimit ] = useState(100);
    const page = `limit=${limit}`;
    const url = `https://api.noroff.dev/api/v1/holidaze/venues?sort=created&${page}`;
    const { data, loading, error } = useFetch(url);
    const [ filterObject, setFilterObject ] = useState({
        search: "",
        rating: "",
        wifi: false,
        pets: false,
        parking: false,
        breakfast: false,
        guests: 0,
    });
    const [ filteredData, setFilteredData ] = useState();
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
             let totalGuests = value.maxGuests >= guests;
             let totalRating = value.rating >= rating;
             
             let hasWifi = value.meta.wifi === wifi;
             let petsAllowed = value.meta.pets === pets;
             let hasParking = value.meta.parking === parking;
             let hasBreakFast = value.meta.breakfast === breakFast;
             return hasWifi & petsAllowed & hasParking & hasBreakFast & totalRating & totalGuests & searchName;
          })
          setFilteredData(newFilter);
    }

    useEffect(() => {
        handleFilter();
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
                    {loading && <h2>Loading . . .</h2>}
                    {error  && <h2>Error: Could not load content</h2>}
                    <FilterBg>
                    {filteredData &&
                        <BtnCardsWrap>
                            <VenueCards>
                                {filteredData}
                            </VenueCards>
                        </BtnCardsWrap>
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