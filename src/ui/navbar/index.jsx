import React, { useEffect, useRef } from "react";
import { Nav, Ul, Li, I, HoverText, MenuIconWrap, FormContainer, FormWrap, Close, RegisterCancelWrap, RegisterBtnWrap, RegisterBtn } from "./style";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MobileMenuIcon } from "../mobile-menu-icon";
import LoginForm from "../login-form";
import RegisterForm from "../register";
import { useLoad, useRemove } from "../../hooks/storage";

export function NavBar() {

    const [ visible, setVisible ] = useState("");
    const [ clicked, setClicked ] = useState("");
    const [ openLoginForm, setOpenLoginForm ] = useState(false);
    const [ openRegisterForm, setOpenRegisterForm ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        if(useLoad("user")) {
            setIsLoggedIn(true);
        }
        if(!useLoad("user")) {
            setIsLoggedIn(false);
        }
    })

    function menuHideShow() {
        if (visible === "") {
            setVisible("visible");
            setClicked("clicked");
        }
        else {
            setVisible("");
            setClicked("");
        }
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
                {isLoggedIn?  
                <Li>
                    <div onClick={() => {
                        useRemove("token");
                        setIsLoggedIn(false);
                    }}>
                        <I className="fa-solid fa-lock-open"></I>
                        <HoverText>Logout</HoverText>
                    </div>
                </Li>
                : 
                <Li>
                    <div onClick={() => setOpenLoginForm(true)}>
                        <I className="fa-solid fa-lock"></I>
                        <HoverText>Login</HoverText>
                    </div>
                </Li>
                }
                {isLoggedIn &&
                    <Li>
                        <NavLink to="account" aria-label="My account">
                            <I className="fa-solid fa-user"></I>
                            <HoverText>Account</HoverText>
                        </NavLink>
                    </Li>
                }
            </Ul>
        </Nav>
        {openLoginForm &&
            <FormContainer>
                <FormWrap>
                    <RegisterCancelWrap>
                        <RegisterBtnWrap>
                            <p>New here?</p>
                            <RegisterBtn onClick={() => {
                                setOpenRegisterForm(true);
                                setOpenLoginForm(false);
                            }}>Register</RegisterBtn>
                        </RegisterBtnWrap>
                        <Close className="fa-solid fa-xmark" onClick={() => setOpenLoginForm(false)}></Close>
                    </RegisterCancelWrap>
                <LoginForm>{setOpenLoginForm}</LoginForm>
                </FormWrap>
            </FormContainer>
        }
        {openRegisterForm &&
            <FormContainer>
                <FormWrap>
                <RegisterCancelWrap>
                     <p onClick={() => {
                        setOpenRegisterForm(false);
                        setOpenLoginForm(true);
                     }}><i className="fa-solid fa-angle-left"></i> back</p>
                    <Close className="fa-solid fa-xmark" onClick={() => setOpenRegisterForm(false)}></Close>
                </RegisterCancelWrap>
                <RegisterForm />
                </FormWrap>
            </FormContainer>
        }
        </>
    )
}