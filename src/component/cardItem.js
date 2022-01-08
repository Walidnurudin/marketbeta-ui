import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { product } from "../assets/images";

const CardItem = () => {
  return (
    <Card centered>
      <Image src={product} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Name Product</Card.Header>
        <Card.Meta>
          <span className="date">From username</span>
          <br />
          <span className="date">email</span>
        </Card.Meta>
        <Card.Description>description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Price
        </a>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
