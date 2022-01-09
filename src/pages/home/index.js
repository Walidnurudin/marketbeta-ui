import React, { useState, useEffect } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import { Navbar, CardItem } from "../../component";
import axios from "../../utils/axios";

function Home() {
  const [data, setData] = useState([]);

  const getAllProduct = () => {
    axios
      .get(`product`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <Container>
        <Header as="h1" color="teal" style={{ marginTop: "30px" }}>
          Marketbeta
        </Header>
        <Navbar />
        <h1 className="ui header">All product</h1>
        {data.length > 0 ? (
          <Grid columns={4} container doubling stackable>
            <>
              {data.map((item) => (
                <Grid.Column key={item._id}>
                  <CardItem
                    name={item.name}
                    username={item.userId.name}
                    email={item.userId.email}
                    desc={item.desc}
                    price={item.price}
                  />
                </Grid.Column>
              ))}
            </>
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

export default Home;
