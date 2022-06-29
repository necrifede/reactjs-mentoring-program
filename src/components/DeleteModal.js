import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const DeleteModal = ({ show = false, hideFunction = () => {} }) => (
    <Modal show={show} onHide={hideFunction}>
        <Modal.Header closeButton>
            <Modal.Title>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={hideFunction}>
                Close
            </Button>
            <Button variant="primary" onClick={hideFunction}>
                confirm
            </Button>
        </Modal.Footer>
    </Modal>
);

DeleteModal.propTypes = {};

export default DeleteModal;
