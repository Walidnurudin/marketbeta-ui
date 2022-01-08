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

const Register = () => {
  const router = useHistory();
  const genderOptions = [
    { key: "m", value: "Male", text: "Male" },
    { key: "f", value: "Female", text: "Female" },
  ];

  const [response, setResponse] = useState({
    isShow: false,
    isSuccess: false,
    msg: "",
    isLoading: false,
  });

  const [data, setData] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleSelect = (e, { value }) => {
    setData({
      ...data,
      gender: e.target.textContent,
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const Register = () => {
    setResponse({
      ...response,
      isLoading: true,
    });
    axios
      .post(`${process.env.REACT_APP_API}user/register`, data)
      .then((res) => {
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
          router.push("/login");
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
              name="name"
              onChange={handleChange}
            />
            <Form.Select
              fluid
              placeholder="Gender"
              options={genderOptions}
              name="gender"
              onChange={handleSelect}
            />
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
              type="password"
              name="password"
              onChange={handleChange}
            />

            <Button
              loading={response.isLoading}
              color="teal"
              fluid
              size="large"
              onClick={Register}
            >
              Register
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
          Already have account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
