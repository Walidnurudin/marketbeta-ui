import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Register = () => (
  <Grid
    textAlign="center"
    style={{ height: "100vh", backgroundColor: "lightgrey" }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Create new account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Full name"
          />
          <Form.Select
            fluid
            placeholder="Gender"
            options={[
              { key: "m", value: "Male", text: "Male" },
              { key: "f", value: "Female", text: "Female" },
            ]}
          />
          <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="Email"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Register
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have account? <Link to="/login">Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Register;
