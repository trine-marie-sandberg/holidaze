import React, { useState } from 'react';
import { FormContainer, Label, Input, TextArea, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon } from './style';

export default function ContactForm() {

  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log('Full Name:', fullName);
    console.log('Subject:', subject);
    console.log('Email:', email);
    console.log('Body:', body);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Heading>Let us help you with your vacation planning</Heading>
      <FormElementsWrap>
        <Label htmlFor="userName">Username:</Label>
        <IconInputWrap>
        <InputIcon className="fa-solid fa-user"></InputIcon>
          <Input
            type="text"
            id="userName"
            value={fullName}
            onChange={handleFullNameChange}
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
            onChange={handleSubjectChange}
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
          onChange={handleEmailChange}
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
            onChange={handleBodyChange}
            minLength={3}
            required
          >
          </TextArea>
        </IconInputWrap>
      </FormElementsWrap>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};
