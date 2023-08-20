import { BgFade, BgImg, FrontPage, SearchField, I, HideLabel, FrontPageWrap, Btn } from "./style";


export default function HomePage() {

    return(
        <BgImg>
            <FrontPage>
                <BgFade>
                    <FrontPageWrap>
                        <h1>Find your destination</h1>
                        <form>
                            <HideLabel htmlFor="search">Search </HideLabel>
                            <I className="fa-solid fa-search" aria-label="search input field"></I>
                            <SearchField type="text" id="search" placeholder="search for destination, contry, venue .."/>
                        </form>
                        <Btn>Explore</Btn>
                    </FrontPageWrap>
                </BgFade>
            </FrontPage>
        </BgImg>
    )
}