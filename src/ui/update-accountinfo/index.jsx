import React, { useState } from 'react';
import { FormContainer, Label, Input, TextArea, Button, Heading, FormElementsWrap, IconInputWrap, InputIcon } from './style';
import { useSendData } from '../../hooks/api';
import useSave, { useLoad } from '../../hooks/storage';

export default function UpdateAccountForm(props) {

  const [ setUpdateFormVisible, setAvatar, avatar ] = props.children;
  const [ newAvatar, setNewAvatar ] = useState("");
  const user = useLoad("user");

  return (
    <FormContainer 
      onSubmit={async (event) => {
      event.preventDefault();
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
      console.log(dataToSend)
      const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${user.name}/media`, dataToSend);
      const json = await response.json();
      console.log(json)
      useSave("user", {
        avatar: newAvatar,
        email: user.email,
        manager: user.manager,
        name: user.name,
        token: user.token,
      });
      setAvatar(newAvatar);
      setUpdateFormVisible(false);
      }}>
        <Heading>Login</Heading>
        <FormElementsWrap>
          <button
            onClick={() => setUpdateFormVisible(false)}
          >
            close
          </button>
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
