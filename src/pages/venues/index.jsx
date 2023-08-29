import CategoryCarousel from "../../ui/category-carousel";
import PageWrapper from "../../ui/pagewrapper";
import StarRating from "../../ui/start-rating";
import { SearchWrap, SearchField, HideLabel, I, FilterManager } from "./style";

export default function VenuesPage() {

    return(
        <PageWrapper>
            <CategoryCarousel />
            <h1>Venues</h1>
            <FilterManager>
                <fieldset>
                    <legend>Choose desired rating</legend>
                    <StarRating />
                </fieldset>
            </FilterManager>
            <SearchWrap>
                <HideLabel htmlFor="search">Search </HideLabel>
                <I className="fa-solid fa-search" aria-label="search icon"></I>
                <SearchField type="text" id="search" aria-label="search input field" placeholder="search for destination, contry, venue .."/>
            </SearchWrap>
        </PageWrapper>
    )
}