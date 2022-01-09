import React, { useState } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { product } from "../assets/images";
import { ModalConfirm } from ".";
import { formatRp } from "../utils/formatRp";

const CardItem = ({ name, username, email, desc, price, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = () => {
    setIsOpen(false);
  };

  return (
    <Card centered>
      <Image src={product} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {!isAdmin && (
          <Card.Meta>
            <span className="date">From {username || "-"}</span>
            <br />
            <span className="date">{email}</span>
          </Card.Meta>
        )}
        <Card.Description>{desc}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h5>{formatRp(price)}</h5>
        {isAdmin && (
          <div className="ui two buttons" style={{ marginTop: "20px" }}>
            <Button color="green">Update</Button>
            <ModalConfirm
              title="Delete"
              header="Delete?"
              desc="Are you sure want to delete this product?"
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onOpen={() => setIsOpen(true)}
              onSubmit={() => onDelete()}
            />
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

export default CardItem;
