import { Link } from "react-router-dom"
import { NavBar } from "../navbar"
import { Head, Logo } from "./style"

export default function Header() {

    return(
        <Head>
            <Link to="/">
                <Logo src="/logo.svg" alt="Holidaze logo"/>
            </Link>
            <NavBar />
        </Head>
    )
}