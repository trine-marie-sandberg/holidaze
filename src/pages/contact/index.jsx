import ContactForm from "../../ui/contact-form";
import PageWrapper from "../../ui/pagewrapper";
import { BgImg } from "./style";

export default function ContactPage() {

    return(
        <BgImg>
            <PageWrapper>
                <ContactForm />
            </PageWrapper>
        </BgImg>
    )
}