import React from "react";
import { Nav, Ul, Li, I, HoverText } from "./style";
import { NavLink } from "react-router-dom";

function login() {
    console.log("click")
}

export function NavBar() {
    return(
        <Nav>
            <Ul>
                <Li>
                    <NavLink to="/" aria-label="Homepage">
                        <I className="fa-solid fa-house"></I>
                        <HoverText>Home</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="venues" aria-label="Venues listings">
                       <I className="fa-solid fa-bed"></I>
                       <HoverText>Venues</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="contact" aria-label="Contact us">
                        <I className="fa-solid fa-phone"></I>
                        <HoverText>Tasks</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="account" aria-label="My account">
                        <I className="fa-solid fa-user"></I>
                        <HoverText>Account</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <div onClick={login}>
                        <I className="fa-solid fa-lock"></I>
                        <HoverText>Login</HoverText>
                    </div>
                </Li>
            </Ul>
        </Nav>
    )
}