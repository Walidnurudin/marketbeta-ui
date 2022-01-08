import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ResponMessage } from "../../component";

const Login = () => (
  <Grid
    textAlign="center"
    style={{ height: "100vh", backgroundColor: "lightgrey" }}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Login to your account
      </Header>
      <Form size="large">
        <Segment stacked>
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
            Login
          </Button>

          <ResponMessage isSuccess={false} msg="Error" />
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/register">Register</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Login;
