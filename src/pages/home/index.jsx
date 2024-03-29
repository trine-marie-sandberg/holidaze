import { BgFade, BgImg, FrontPage, SearchField, 
         I, HideLabel, FrontPageWrap, SearchWrap, 
         ResultsBox, BackgroundImages, TextBgImgWrap, TextWrap,
         ResultsWrap, Metas, CloseBtn,
        } from "./style";
import { Link } from "react-router-dom";
import { BtnPrimary, LinkWrap } from "../../ui/btns/style";
import useFetch from "../../hooks/api";
import base, { page, created } from "../../constants.js";
import { useState } from "react";

export default function HomePage() {

    const url = `${base + created + page + 10}`;
    const { data, loading, error } = useFetch(url);
    const [ filteredData, setFilteredData ] = useState(data);
    const [ searchWord, setSearchWord ] = useState("");
    const [ closeVisible, setCloseVisible ] = useState(false);
    const [ exploreVisible, setExploreVisible ] = useState(true);

    function handleFilter() {
        const newFilter = data.filter((value) => {
             let searchName = value.name.toLowerCase().includes(searchWord.toLowerCase());
             let searchLocation = value.location.country.toLowerCase().includes(searchWord.toLowerCase());
             return searchName + searchLocation;
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
                              placeholder="search for contry or venue .."
                              onChange={(e) => {
                                setCloseVisible(true);
                                setSearchWord(e.target.value);
                                handleFilter();
                                setExploreVisible(false);
                              }}
                              />
                              {closeVisible &&
                                <CloseBtn
                                    aria-label="Clear search"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setFilteredData([]);
                                        setCloseVisible(false);
                                        setExploreVisible(true);
                                    }}
                                    >
                                    <i className="fa-solid fa-xmark"></i>
                                </CloseBtn>
                              }
                        </SearchWrap>
                        <ResultsBox>
                            {filteredData && 
                              <ResultsWrap>
                                {filteredData.map((data) => {
                                    try {
                                        let imgSrc = data.media[0];
                                        if(data.media.length < 1) {
                                            imgSrc = "/placeholder-img.jpg";
                                        }
                                        return(
                                            <Link to={`/venue/${data.id}`} key={data.id}>
                                                <BackgroundImages 
                                                    style={{ 
                                                    backgroundImage: `url(${imgSrc})` 
                                                    }}>
                                                    <TextBgImgWrap>
                                                        <TextWrap>
                                                            <h2>{data.name}</h2>
                                                            <div>
                                                                <Metas>
                                                                    <p>Max guests: {data.maxGuests}</p>
                                                                    {data.meta.wifi &&
                                                                        <i className="fa-solid fa-wifi"></i>
                                                                    }
                                                                    {data.meta.pets && 
                                                                        <i className="fa-solid fa-paw"></i>
                                                                    }
                                                                    {data.meta.breakfast &&
                                                                        <i className="fa-solid fa-mug-saucer"></i>
                                                                    }
                                                                    {data.meta.parking &&
                                                                        <i className="fa-solid fa-square-parking"></i>
                                                                    }
                                                                </Metas>
                                                                <div>
                                                                    {data.location.country &&
                                                                        <p><i className="fa-solid fa-location-dot"></i> {data.location.country}</p>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </TextWrap>
                                                    </TextBgImgWrap>
                                                </BackgroundImages>
                                            </Link>
                                        )
                                    } catch(error) {
                                        console.log(error)
                                        return(
                                            <p>{error}</p>
                                        )
                                    }
                                    })}
                               </ResultsWrap> 
                            }
                        </ResultsBox>
                        {exploreVisible && 
                        <LinkWrap>
                            <Link to="venues">
                              <BtnPrimary>Explore</BtnPrimary>
                            </Link>
                        </LinkWrap>
                        }
                    </FrontPageWrap>
                </BgFade>
            </FrontPage>
        </BgImg>
    )
}