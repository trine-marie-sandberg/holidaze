import { NavBar } from "../navbar"
import { Head, Logo } from "./style"

export default function Header() {

    return(
        <Head>
            <Logo src="logo.svg" alt="Holidaze logo"/>
            <NavBar />
        </Head>
    )
}