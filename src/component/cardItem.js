import React, { useState } from "react";
import { Card, Icon, Image, Button, Modal } from "semantic-ui-react";
import { product } from "../assets/images";
import { ModalConfirm } from ".";
import { formatRp } from "../utils/formatRp";
import axios from "../utils/axios";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../stores/actions/user";

const CardItem = ({ name, username, email, desc, price, isAdmin, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [delProduct, setDelProduct] = useState(false);

  const deleteProduct = () => {
    axios
      .delete(`product/${id}`)
      .then((res) => {
        setIsOpen(false);
        setDelProduct(true);
        dispatch(getDataUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
                onSubmit={deleteProduct}
              />
            </div>
          )}
        </Card.Content>
      </Card>

      {/* MODAL SUCCESS DELETE */}
      <Modal
        onClose={() => setDelProduct(false)}
        open={delProduct}
        size="small"
      >
        <Modal.Header>Success delete product</Modal.Header>
        <Modal.Actions>
          <Button
            icon="check"
            content="OK"
            onClick={() => setDelProduct(false)}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CardItem;
