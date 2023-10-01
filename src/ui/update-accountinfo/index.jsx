import React, { useState } from 'react';
import { FormContainer, Label, Input, LoadingHeadingWrap, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon, BtnHeadingWrap, CloseBtn } from './style';
import { ErrorContainer } from '../error-messages/styled';
import Loader from '../loader';
import useSave, { useLoad } from '../../hooks/storage';

export default function UpdateAccountForm(props) {

  const [ setUpdateFormVisible, setAvatar, avatar ] = props.children;
  const [ newAvatar, setNewAvatar ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ userFeedback, setUserfeedback ] = useState("");
  const [ errorVisible, setErrorVisible ] = useState(false);
  const user = useLoad("user");

  return (
    <FormContainer 
      onSubmit={async (event) => {
      event.preventDefault();
      setLoading(true);
      const userAvatar = {
        venueManager: user.manager,
        avatar: avatar,
      }
      const dataToSend = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userAvatar),
      }
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}/media`, dataToSend);
        await response.json();
        if(response.status === 200) {
          useSave("user", {
            avatar: newAvatar,
            email: user.email,
            manager: user.manager,
            name: user.name,
            token: user.token,
          });
          setAvatar(newAvatar);
          setUpdateFormVisible(false);
        }
        if(response.status > 299) {
          setErrorVisible(true);
          setUserfeedback("An error occured. Please try again later.")
        }
      } catch(error) {
        setErrorVisible(true);
        setUserfeedback("An error occured. Please try again later.")
      } finally {
        setLoading(false);
      }
      }}>
        <FormElementsWrap>
          <BtnHeadingWrap>
          <LoadingHeadingWrap>
            <Heading>Register</Heading>
            {loading && <Loader/>}
            {errorVisible &&
              <ErrorContainer>
                <p>{userFeedback}</p>
              </ErrorContainer>
            }
          </LoadingHeadingWrap>
          <CloseBtn
            onClick={() => setUpdateFormVisible(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </CloseBtn>
          </BtnHeadingWrap>
          <Label htmlFor="avatar">Avatar url</Label>
          <IconInputWrap>
            <InputIcon className="fa-solid fa-circle-user"></InputIcon>
            <Input
              type="text"
              id="avatar"
              value={newAvatar}
              onChange={(e) => setNewAvatar(e.target.value)}
              required
            />
          </IconInputWrap>
        </FormElementsWrap>
        <Button type="submit">Submit</Button>
    </FormContainer>
  );
};
