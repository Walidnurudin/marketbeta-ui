import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import { user } from "../assets/images";

const ProfileComponent = ({ name, gender, email }) => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Image src={user} />
      <Header.Content>
        {name}
        <span> ({gender})</span>
      </Header.Content>
      <Header.Subheader>{email}</Header.Subheader>
    </Header>
  </div>
);

export default ProfileComponent;
