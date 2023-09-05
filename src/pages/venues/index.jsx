import { useEffect, useState } from "react";
import useFetch from "../../hooks/api";
import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import StarRating from "../../ui/star-rating";
import VenueCards from "../../ui/venue-cards";
import { SearchWrap, SearchField, HideLabel, I, SearchFilterWrap, PaddingOnFilters, ShowMoreBtn, BtnCardsWrap } from "./style";
import SearchFilters from "../../ui/filters";

export default function VenuesPage() {
    
    const [ limit, setLimit ] = useState(10);
    const page = `limit=${limit}`;
    const url = `https://api.noroff.dev/api/v1/holidaze/venues?sort=created&${page}`;
    const { data, loading, error } = useFetch(url);
    function filterSearch() {
        console.log("hello from filtersearch")
    }

    try {
        return(
            <PageWrapper>
                {/* <CategoryCarousel /> */}
                <h1>Find venues</h1>
                <form onSubmit={filterSearch}>
                    <SearchFilterWrap>
                        <SearchWrap>
                            <HideLabel htmlFor="search">Search </HideLabel>
                            <I className="fa-solid fa-search" aria-label="search icon"></I>
                            <SearchField type="text" id="search" aria-label="search input field" placeholder="search for destination, contry, venue .."/>
                        </SearchWrap>
                        <PaddingOnFilters>
                            <SearchFilters/>
                        </PaddingOnFilters>
                    </SearchFilterWrap>
                </form>
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