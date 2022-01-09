import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

function ModalConfirm({
  title,
  header,
  desc,
  isOpen,
  onClose,
  onOpen,
  onSubmit,
}) {
  return (
    <Modal
      size="mini"
      open={isOpen}
      trigger={<Button color="red">{title}</Button>}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Header icon="warning" content={header} />
      <Modal.Content>
        <p>{desc}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
        <Button color="red" onClick={onSubmit}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalConfirm;
