import { useLoad } from "../../hooks/storage";
import PageWrapper from "../../ui/pagewrapper";
import { AccountContainer } from "./style";

export default function AccountPage() {
    const user = useLoad("user");

    return(
        <PageWrapper>
            <AccountContainer>
                <h1>Hi, {user.name}</h1>
                <p>Here is your account page.</p>
            </AccountContainer>
        </PageWrapper>
    )
}