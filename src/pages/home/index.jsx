import { BgFade, BgImg, FrontPage, SearchField, I, HideLabel, FrontPageWrap, SearchWrap } from "./style";
import { Link } from "react-router-dom";
import { BtnPrimary, LinkWrap } from "../../ui/btns/style";

export default function HomePage() {

    return(
        <BgImg>
            <FrontPage>
                <BgFade>
                    <FrontPageWrap>
                        <h1>Find your destination</h1>
                        <SearchWrap>
                            <HideLabel htmlFor="search">Search </HideLabel>
                            <I className="fa-solid fa-search" aria-label="search icon"></I>
                            <SearchField type="text" id="search" aria-label="search input field" placeholder="search for destination, contry, venue .."/>
                        </SearchWrap>
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