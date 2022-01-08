import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import { Navbar, CardItem } from "../../component";

function Home() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Container>
        <Header as="h1" color="teal" style={{ marginTop: "30px" }}>
          Marketbeta
        </Header>
        <Navbar />
        <h1 className="ui header">All product</h1>
        <Grid columns={4} container doubling stackable>
          {data.map((item) => (
            <Grid.Column>
              <CardItem key={item} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
