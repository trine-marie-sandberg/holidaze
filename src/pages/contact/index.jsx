import ContactForm from "../../ui/contact-form";
import PageWrapper from "../../ui/pagewrapper";
import { BgImg, ContactWrap } from "./style";

export default function ContactPage() {

    return(
        <BgImg>
            <ContactWrap>
                <ContactForm />
            </ContactWrap>
        </BgImg>
    )
}