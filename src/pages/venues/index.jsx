import { useState } from "react";
import useFetch from "../../hooks/api";
import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import StarRating from "../../ui/star-rating";
import VenueCards from "../../ui/venue-cards";
import { SearchWrap, SearchField, HideLabel, I, FilterManager, SearchFilterWrap, PaddingOnFilters, TotalGuestsInput, FilterLabels, FlexFilters, ShowMoreBtn, BtnCardsWrap } from "./style";

export default function VenuesPage() {
    
    const { page, setPage } = useState("");
    const url = "https://api.noroff.dev/api/v1/holidaze/venues";
    const { data, loading, error } = useFetch(url);

    try {
        return(
            <PageWrapper>
                <CategoryCarousel />
                <h1>Find venues</h1>
                <SearchFilterWrap>
                    <SearchWrap>
                        <HideLabel htmlFor="search">Search </HideLabel>
                        <I className="fa-solid fa-search" aria-label="search icon"></I>
                        <SearchField type="text" id="search" aria-label="search input field" placeholder="search for destination, contry, venue .."/>
                    </SearchWrap>
                    <PaddingOnFilters>
                        <FilterManager>
                            <StarRating />
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
                </SearchFilterWrap>
                <div>
                    {loading && <h2>Loading . . .</h2>}
                    {error  && <h2>Error: Could not load content</h2>}
                    {data && 
                    <BtnCardsWrap>
                        <VenueCards>
                            {data}
                        </VenueCards>
                        <ShowMoreBtn>Show more</ShowMoreBtn>
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