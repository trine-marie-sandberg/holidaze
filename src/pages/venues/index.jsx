import { useEffect, useState } from "react";
import useFetch from "../../hooks/api";
import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import VenueCards from "../../ui/venue-cards";
import { ShowMoreBtn, BtnCardsWrap } from "./style";
import SearchFilters from "../../ui/filters";

export default function VenuesPage() {
    
    const [ limit, setLimit ] = useState(10);
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
        guests: "",
    });
    const [ filteredData, setFilteredData ] = useState(data);
    function handleFilter(e) {
        e.preventDefault();
        console.log("submitted")
        // setFilteredData(() => updateObject.data.filter((value) => {
        //     value.name.toLowerCase().includes(data.search.toLowerCase())
        //   })
        // )
    }

    try {
        return(
            <PageWrapper>
                {/* <CategoryCarousel /> */}
                <h1>Find venues</h1>
                <SearchFilters>
                    {setFilterObject}
                    <button type="submit" onClick={handleFilter}>Go <i className="fa-solid fa-arrow-pointer"></i></button>
                </SearchFilters>
                <div>
                    {loading && <h2>Loading . . .</h2>}
                    {error  && <h2>Error: Could not load content</h2>}
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