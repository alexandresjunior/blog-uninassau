import React from "react";
import { deleteArticle } from "../../service/index";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function DeleteArticleModal(props) {
  let history = useHistory();

  const handleDeleteArticle = () => {
    deleteArticle(`/article/${props.id}`).then(() => history.push(`/`));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you wish to delete this article?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="btn btn-primary"
          onClick={() => handleDeleteArticle()}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteArticleModal;
