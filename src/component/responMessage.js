import React from "react";
import { Message } from "semantic-ui-react";

const ResponMessage = ({ isSuccess, msg }) => (
  <Message positive={isSuccess} negative={!isSuccess}>
    <Message.Header>{msg}</Message.Header>
  </Message>
);

export default ResponMessage;
