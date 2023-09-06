import { BgFade, BgImg, FrontPage, SearchField, 
         I, HideLabel, FrontPageWrap, SearchWrap, 
         ResultsBox, ResultWrap, Wrap, StarsPositionWrap, 
         HeadingCards, Position
        } from "./style";
import { Link } from "react-router-dom";
import { BtnPrimary, LinkWrap } from "../../ui/btns/style";
import useFetch from "../../hooks/api";
import base, { page, created } from "../../constants.js";
import { useState } from "react";
import VenueCards from "../../ui/venue-cards";

export default function HomePage() {

    const url = `${base + created + page + 10}`;
    const { data, loading, error } = useFetch(url);
    const [ filteredData, setFilteredData ] = useState(data);
    const [ searchWord, setSearchWord ] = useState("");

    function handleFilter() {
        const newFilter = data.filter((value) => {
             let searchName = value.name.toLowerCase().includes(searchWord.toLowerCase());
             return searchName;
          })
          setFilteredData(newFilter);
    }
    return(
        <BgImg>
            <FrontPage>
                <BgFade>
                    <FrontPageWrap>
                        <h1>Find your destination</h1>
                        <SearchWrap>
                            <HideLabel htmlFor="search">Search </HideLabel>
                            <I className="fa-solid fa-search" aria-label="search icon"></I>
                            <SearchField 
                              type="text" 
                              id="search" 
                              aria-label="search input field" 
                              placeholder="search for destination, contry, venue .."
                              onChange={(e) => {
                                setSearchWord(e.target.value);
                                handleFilter()
                              }}
                              />
                        </SearchWrap>
                        <ResultsBox>
                            {filteredData && 
                              <ResultWrap>
                                {filteredData.map((data) => {
                                    try {
                                        return(
                                            <div key={data.id}>
                                                <h2>{data.name}</h2>
                                            </div>
                                            
                                        )
                                    } catch(error) {
                                        console.log(error)
                                        return(
                                            <p>{error}</p>
                                        )
                                    }
                                    })}
                               </ResultWrap> 
                            }
                        </ResultsBox>
                        <LinkWrap>
                            <Link to="venues">
                              <BtnPrimary>Explore</BtnPrimary>
                            </Link>
                        </LinkWrap>
                    </FrontPageWrap>
                </BgFade>
            </FrontPage>
        </BgImg>
    )
}