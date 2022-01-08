import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Navbar, ProfileComponent } from "../../component";

function Profle() {
  return (
    <div>
      <Container>
        <Navbar />
        <ProfileComponent />
        <div>Profile page</div>
      </Container>
    </div>
  );
}

export default Profle;
