import React from "react";
import { Nav, Ul, Li, I, HoverText, MobileMenu, MenuIconWrap } from "./style";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MobileMenuIcon } from "../mobile-menu-icon";

export function NavBar() {

    const [ visible, setVisible ] = useState("");
    const [ clicked, setClicked ] = useState("");

    function login() {
        console.log("click")
    }
    function menuHideShow() {
        if (visible === "") {
            setVisible("visible");
            setClicked("clicked");
        }
        else {
            setVisible("");
            setClicked("");
        }
        
        console.log("click")
    }

    return(
        <>
        <MenuIconWrap onClick={menuHideShow}>
            <div className={clicked}>
                <MobileMenuIcon />
            </div>
        </MenuIconWrap>
        <Nav>
            <Ul id={visible}>
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
                        <HoverText>Contact</HoverText>
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
        </>
    )
}