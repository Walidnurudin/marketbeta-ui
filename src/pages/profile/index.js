import React from "react";
import { Container, Grid, Form, Input, Button } from "semantic-ui-react";
import { Navbar, ProfileComponent, CardItem } from "../../component";

function Profle() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Container>
        <Navbar />
        <ProfileComponent />

        {/* FORM */}
        <h1 className="ui header" style={{ marginTop: "50px" }}>
          Form product
        </h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Name" placeholder="Input product name" />
            <Form.Input label="Price" placeholder="Input price product" />
            <Form.Input
              label="Description"
              placeholder="Input description product"
            />
          </Form.Group>
          <Button>Reset</Button>
          <Button>Create</Button>
        </Form>

        <h1 className="ui header" style={{ marginTop: "50px" }}>
          My product
        </h1>
        <Grid columns={4} container doubling stackable>
          {data.map((item) => (
            <Grid.Column>
              <CardItem key={item} isAdmin={true} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Profle;
