import React, { useEffect, useState } from "react";
import { Container, Grid, Form, Header, Button } from "semantic-ui-react";
import {
  Navbar,
  ProfileComponent,
  CardItem,
  ResponMessage,
} from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../stores/actions/user";
import axios from "../../utils/axios";

function Profle() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [response, setResponse] = useState({
    isShow: false,
    isSuccess: false,
    msg: "",
    isLoading: false,
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState("");

  const [data, setData] = useState({
    name: "",
    price: "",
    desc: "",
  });

  const resetFrom = () => {
    setData({
      name: "",
      price: "",
      desc: "",
    });

    setIsUpdate(false);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setResponse({
      ...response,
      isLoading: true,
    });

    axios
      .post("product", data)
      .then((res) => {
        setResponse({
          isShow: true,
          isSuccess: true,
          msg: res.data.msg,
          isLoading: false,
        });

        resetFrom();
        dispatch(getDataUser());

        setTimeout(() => {
          setResponse({
            ...response,
            isShow: false,
            isSuccess: false,
            msg: "",
          });
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

  const changeUpdate = (item) => {
    setIdUpdate(item._id);
    setData({
      name: item.name,
      price: item.price,
      desc: item.desc,
    });
    setIsUpdate(true);
  };

  const handleUpdate = () => {
    axios
      .patch(`product/${idUpdate}`, data)
      .then((res) => {
        setResponse({
          isShow: true,
          isSuccess: true,
          msg: res.data.msg,
          isLoading: false,
        });

        resetFrom();
        dispatch(getDataUser());

        setTimeout(() => {
          setResponse({
            ...response,
            isShow: false,
            isSuccess: false,
            msg: "",
          });
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

  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  return (
    <div>
      <Container>
        <Header as="h1" color="teal" style={{ marginTop: "30px" }}>
          Marketbeta
        </Header>
        <Navbar />
        <ProfileComponent
          name={user.data.name}
          gender={user.data.gender}
          email={user.data.email}
        />

        {/* FORM */}
        <h1 className="ui header" style={{ marginTop: "50px" }}>
          Form product
        </h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              placeholder="Input product name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <Form.Input
              label="Price"
              placeholder="Input price product"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <Form.Input
              label="Description"
              placeholder="Input description product"
              name="desc"
              value={data.desc}
              onChange={handleChange}
            />
          </Form.Group>
          <Button onClick={resetFrom}>Reset</Button>
          {isUpdate ? (
            <Button onClick={handleUpdate} loading={response.isLoading}>
              Update
            </Button>
          ) : (
            <Button onClick={handleSubmit} loading={response.isLoading}>
              Create
            </Button>
          )}
        </Form>

        {response.isShow && (
          <ResponMessage isSuccess={response.isSuccess} msg={response.msg} />
        )}

        <h1 className="ui header" style={{ marginTop: "50px" }}>
          My product
        </h1>
        {user.data.productId.length > 0 ? (
          <Grid columns={4} container doubling stackable>
            {user.data.productId.map((item) => (
              <Grid.Column key={item._id}>
                <CardItem
                  id={item._id}
                  isAdmin={true}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                  changeUpdate={() => changeUpdate(item)}
                />
              </Grid.Column>
            ))}
          </Grid>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <h5 className="ui header">Product not found</h5>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Profle;
