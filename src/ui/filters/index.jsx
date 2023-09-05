import { FilterManager, FilterLabels, TotalGuestsInput, FlexFilters, PaddingOnFilters } from "./style";
import StarRating from "../star-rating";

export default function SearchFilters() {

    return(
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
    )
}