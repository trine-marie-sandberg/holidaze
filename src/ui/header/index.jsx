import { NavBar } from "../navbar"
import { Head, Logo, MobileMenu } from "./style"

export default function Header() {

    return(
        <Head>
            <Logo src="/logo.svg" alt="Holidaze logo"/>
            <NavBar />
        </Head>
    )
}