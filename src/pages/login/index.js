import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { ResponMessage } from "../../component";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { getDataUser } from "../../stores/actions/user";

const Login = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const [response, setResponse] = useState({
    isShow: false,
    isSuccess: false,
    msg: "",
    isLoading: false,
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    setResponse({
      ...response,
      isLoading: true,
    });

    axios
      .post(`user/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatch(getDataUser());

        setResponse({
          isShow: true,
          isSuccess: true,
          msg: res.data.msg,
          isLoading: false,
        });

        setTimeout(() => {
          setResponse({
            ...response,
            isShow: false,
            isSuccess: false,
            msg: "",
          });
          router.push("/");
        }, 3000);
      })
      .catch((err) => {
        setResponse({
          isShow: true,
          isSuccess: false,
          msg: err.response.data.msg,
          isLoading: false,
        });

        setTimeout(() => {
          setResponse({
            ...response,
            isShow: false,
            isSuccess: false,
            msg: "",
          });
        }, 3500);
      });
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", backgroundColor: "lightgrey" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="teal" textAlign="center">
          Marketbeta
        </Header>
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
              name="email"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />

            <Button
              loading={response.isLoading}
              color="teal"
              fluid
              size="large"
              onClick={login}
            >
              Login
            </Button>

            {response.isShow && (
              <ResponMessage
                isSuccess={response.isSuccess}
                msg={response.msg}
              />
            )}
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/register">Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
