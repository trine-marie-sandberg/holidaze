import { useEffect, useState } from "react";
import useFetch from "../../hooks/api";
import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import VenueCards from "../../ui/venue-cards";
import { ShowMoreBtn, BtnCardsWrap, FilterBg } from "./style";
import SearchFilters from "../../ui/filters";

export default function VenuesPage() {
    
    const [ limit, setLimit ] = useState(20);
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
    function handleFilter() {
        let wifi = "false";
        if(filterObject.wifi === "on") {
            wifi = "true"
        }
        let guests = parseInt(filterObject.guests)
        const newFilter = data.filter((value) => {
             let filterSearch = value.name.toLowerCase().includes(filterObject.search.toLowerCase());
             let totalGuests = value.maxGuests >= guests;
             return  totalGuests & filterSearch
          })
          setFilteredData(newFilter)
        console.log(newFilter)
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
                    {setFilterObject}
                    {setIsSubmitted}
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
                        </BtnCardsWrap>}
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