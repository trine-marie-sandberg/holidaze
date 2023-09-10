import React, { useRef } from "react";
import { Nav, Ul, Li, I, HoverText, MenuIconWrap, FormContainer, FormWrap, Close } from "./style";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MobileMenuIcon } from "../mobile-menu-icon";
import LoginForm from "../login-form";
import RegisterForm from "../register";

export function NavBar() {

    const [ visible, setVisible ] = useState("");
    const [ clicked, setClicked ] = useState("");
    const [ openLoginForm, setOpenLoginForm ] = useState(false);
    const [ openRegisterForm, setOpenRegisterForm ] = useState(false);

    function accessLogin() {
        setOpenLoginForm(true);
    }
    function closeLogin() {
        setOpenLoginForm(false);
    }
    function accessRegister() {
        setOpenRegisterForm(true);
        setOpenLoginForm(false)
    }
    function closeRegister() {
        setOpenRegisterForm(false);
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
                    <div onClick={accessLogin}>
                        <I className="fa-solid fa-lock"></I>
                        <HoverText>Login</HoverText>
                    </div>
                </Li>
            </Ul>
        </Nav>
        {openLoginForm &&
            <FormContainer>
                <FormWrap>
                <Close className="fa-solid fa-xmark" onClick={closeLogin}></Close>
                <p>New here?</p>
                <button onClick={accessRegister}>Register</button>
                <LoginForm />
                </FormWrap>
            </FormContainer>
        }
        {openRegisterForm &&
            <FormContainer>
                <FormWrap>
                <Close className="fa-solid fa-xmark" onClick={closeRegister}></Close>
                <RegisterForm />
                </FormWrap>
            </FormContainer>
        }
        </>
    )
}