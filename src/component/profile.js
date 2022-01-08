import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import { user } from "../assets/images";

const ProfileComponent = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Image src={user} />
      <Header.Content>
        Username
        <span> (Male)</span>
      </Header.Content>
      <Header.Subheader>username@gmail.com</Header.Subheader>
    </Header>
  </div>
);

export default ProfileComponent;
