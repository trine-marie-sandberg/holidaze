import React, { useState } from 'react';
import { FormContainer, Label, Input, TextArea, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon } from './style';
import useSave from '../../hooks/storage';

export default function RegisterForm(props) {

  const [ userName, setUserName ] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setOpenRegisterForm = props.children;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleUsername(event) {
    setUserName(event.target.value);
  }

  return (
    <FormContainer onSubmit={async (event) => {
      event.preventDefault();
      const user = {
        name: userName,
        email: email,
        password: password,
        avatar: "",
        venueManager: false,
      }
      const dataToSend = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }
    const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/register", dataToSend);
    await response.json();

    if(response.ok) {
      const loginResp = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", 
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
      const json = await loginResp.json();
      if(response.ok) {
        const userDetails = {
          name: json.name,
          email: json.email,
          avatar: json.avatar,
          manager: json.venueManager,
          token: json.accessToken,
        }
        console.log(json)
        useSave("user", userDetails);
        setOpenRegisterForm(false);
      }
    }
    }}>
      <Heading>Register</Heading>
      <FormElementsWrap>
        <Label htmlFor="username">Username</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-user"></InputIcon>
        <Input
          type="text"
          id="username"
          value={userName}
          onChange={handleUsername}
          required
        />
        </IconInputWrap>
      </FormElementsWrap>
      <FormElementsWrap>
        <Label htmlFor="email">Email</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-envelope"></InputIcon>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        </IconInputWrap>
      </FormElementsWrap>
      <FormElementsWrap>
        <Label htmlFor="password">Password</Label>
        <IconInputWrap>
          <InputIcon className="fa-solid fa-lock"></InputIcon>
          <Input 
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </IconInputWrap>
      </FormElementsWrap>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};
