import { BtnPrimary, PrimaryButton } from "../btns/style";
import { Arrow, CategoryWrap, Dot, DotsHeadingWrap, DotsWrap, Heading, Image, ImgArrowWrap, TextImgWrap } from "./style";

export default function CategoryCarousel() {

    return(
        <>
            <CategoryWrap>
                <DotsHeadingWrap>
                    <Heading id="categoty-heading">Tropical resorts</Heading>
                    <DotsWrap>
                        <Dot id="dot1"></Dot>
                        <Dot id="dot2"></Dot>
                        <Dot id="dot3"></Dot>
                        <Dot id="dot4"></Dot>
                    </DotsWrap>
                </DotsHeadingWrap>
                <TextImgWrap>
                <ImgArrowWrap>
                    <div id="arrow-left">
                        <Arrow className="fa-solid fa-arrow-left"></Arrow>
                    </div>
                    <div>
                        <Image src="tropical-resorts.jpg" id="category-img" alt="Straw huts standing on pilars in the blue water on a beutifull beach."/>
                    </div>
                    <div id="arrow-right">
                        <Arrow className="fa-solid fa-arrow-right"></Arrow>
                    </div>
                </ImgArrowWrap>
                <p>
                    Tired of winter? Treat yourself to a beautiful beach 
                    vacation with warm sand between your toes, feel 
                    the gentle breeze while you are enjoying a coconut 
                    drink, looking over the ocean. Want a luxury beach 
                    apartment, or an economy resort close to the beach? 
                    Have a look at our tropical venue listings!
                </p>
                <PrimaryButton><div>Go <i className="fa-solid fa-arrow-pointer"></i></div></PrimaryButton>
                </TextImgWrap>
            </CategoryWrap>
            <h1>Venues</h1>
        </>
    )
}