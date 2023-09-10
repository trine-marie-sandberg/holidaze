import React, { useState } from 'react';
import { FormContainer, Label, Input, TextArea, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon } from './style';
import { useSendData } from '../../hooks/api';

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   useSendData("https://api.noroff.dev/api/v1/holidaze/auth/login", {
  //     email: email,
  //     password: password,
  //   },"POST");

  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  function handlePassword(event) {
    setPassword(event.target.value)
  }

  return (
    <FormContainer onSubmit={async (event) => {
      event.preventDefault();
      const user = {
        email: email,
        password: password,
      }
      const dataToSend = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }
    console.log(dataToSend)
    const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", dataToSend);
    const json = await response.json();
    console.log(json)
    }}>
      <Heading>Login</Heading>
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
