import React, { useState } from 'react';
import { FormContainer, Label, Input, TextArea, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon, LoadingHeadingWrap, SuccessContainer } from './style';
import Loader from '../loader';

export default function ContactForm() {

  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");
  const [ success, setSuccess ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const submitData = {
      name: fullName,
      subject: subject,
      email: email,
      message: body,
    }
    try {
      const timer = setTimeout(() => {
        console.log(submitData);
        setLoading(false);
        setSuccess(true);
        setFullName("");
        setSubject("");
        setEmail("");
        setBody("");
      }, 1000)
    } catch(error) {
      setError(`An error occured. Details: ${error}`);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LoadingHeadingWrap>
        <Heading>Let us help you with your vacation planning</Heading>
        {loading &&
          <Loader/>
        }
        {success &&
          <SuccessContainer>
            Your message has been sent.
            Feel free to message us again if you want to add something.
          </SuccessContainer>
        }
        {error}
      </LoadingHeadingWrap>
      <FormElementsWrap>
        <Label htmlFor="userName">Username:</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-user"></InputIcon>
          <Input
            type="text"
            id="userName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            minLength={3}
            required
          />
        </IconInputWrap>
      </FormElementsWrap>
      <FormElementsWrap>
        <Label htmlFor="subject">Subject:</Label>
        <IconInputWrap>
          <InputIcon className="fa-solid fa-heading"></InputIcon>
          <Input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            minLength={3}
            required
          />
        </IconInputWrap>
      </FormElementsWrap>
      <FormElementsWrap>
        <Label htmlFor="email">Email:</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-envelope"></InputIcon>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </IconInputWrap>
      </FormElementsWrap>
      <FormElementsWrap>
        <Label htmlFor="body">Message:</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-comment"></InputIcon>
          <TextArea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            minLength={5}
            required
          >
          </TextArea>
        </IconInputWrap>
      </FormElementsWrap>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};
