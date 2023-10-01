import React, { useState } from 'react';
import { FormContainer, Label, Input, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon, LoadingHeadingWrap } from './style';
import Loader from '../loader';
import { useSendData } from '../../hooks/api';
import useSave from '../../hooks/storage';
import { ErrorContainer } from '../error-messages/styled';

export default function LoginForm(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setOpenLoginForm = props.children;
  const [ loading, setLoading ] = useState(false);
  const [ userFeedback, setUserfeedback ] = useState("");
  const [ errorVisible, setErrorVisible ] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  function handlePassword(event) {
    setPassword(event.target.value)
  }

  return (
    <FormContainer onSubmit={async (event) => {
      event.preventDefault();
      setLoading(true);
      setErrorVisible(false);
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
    try {
      const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", dataToSend);
      const json = await response.json();
      console.log(json)
      const userDetails = {
        name: json.name,
        email: json.email,
        avatar: json.avatar,
        manager: json.venueManager,
        token: json.accessToken,
      }
      if(json.status === "Unauthorized") {
        setErrorVisible(true);
        setUserfeedback("Wrong password or username")
      }
      if(json.accessToken) {
        useSave("user", userDetails);
        setOpenLoginForm(false);
      }
    } catch(error) {
      setErrorVisible(true);
      setUserfeedback(`An error occured. Technical details: ${error}`)
    } finally {
      setLoading(false);
    }
    }}>
      <LoadingHeadingWrap>
        <Heading>Login</Heading>
        {loading && <Loader/>}
        {errorVisible &&
          <ErrorContainer>
            <p>{userFeedback}</p>
          </ErrorContainer>
        }
      </LoadingHeadingWrap>
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
          pattern="^[\w\-.]+@(stud.)?noroff.no$"
          title="Only @noroff.no domains are alowed to login."
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
