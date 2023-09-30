import React, { useState } from 'react';
import { FormContainer, Label, Input, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon, LoadingHeadingWrap } from './style';
import useSave from '../../hooks/storage';
import Loader from '../loader';
import { ErrorContainer } from '../error-messages/styled';

export default function RegisterForm(props) {

  const [ userName, setUserName ] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setOpenRegisterForm = props.children;
  const [ loading, setLoading ] = useState(false);
  const [ userFeedback, setUserfeedback ] = useState("");
  const [ errorVisible, setErrorVisible ] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setErrorVisible(false);
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
    try {
      const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/register", dataToSend);
      const json = await response.json();
      console.log(json)
      if(json.statusCode === 400) {
        setErrorVisible(true);
        setUserfeedback("Wrong input. Please check if your email is valid and not already in use.")
      }
  
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
    } catch(error) {
      setErrorVisible(true);
      setUserfeedback(`An error occured. Technical details: ${error}`);
    } finally {
      setLoading(false);
    }
  }
  return (
    <FormContainer 
      onSubmit={async (event) => handleSubmit(event)}>
      <LoadingHeadingWrap>
        <Heading>Register</Heading>
        {loading && <Loader/>}
        {errorVisible &&
          <ErrorContainer>
            <p>{userFeedback}</p>
          </ErrorContainer>
        }
      </LoadingHeadingWrap>
      <FormElementsWrap>
        <Label htmlFor="username">Username</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-user"></InputIcon>
        <Input
          type="text"
          id="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
          pattern="^[\w]+$"
          title="Username may only contain lowercase, uppercase, numbers and underscore. Example: My_user3"
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
          onChange={(event) => setEmail(event.target.value)}
          required
          pattern="^[\w\-.]+@(stud.)?noroff.no$"
          title="Only @noroff.no domains are alowed to register."
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
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={8}
          />
        </IconInputWrap>
      </FormElementsWrap>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};
