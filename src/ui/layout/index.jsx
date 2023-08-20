import Footer from "../footer";
import Header from "../header";
import { Main, Wrapper } from "./style";

export default function Layout({children}) {
    return(
        <Wrapper>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
        </Wrapper>
    )
}