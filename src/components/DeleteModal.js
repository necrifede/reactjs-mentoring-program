import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { deleteMovie } from '../store';
import { useDispatch } from 'react-redux';

const DeleteModal = ({ show = false, hideFunction = () => {}, movie: { id } = {} }) => {
    const dispatch = useDispatch();

    return (
        <Modal show={show} onHide={hideFunction}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideFunction}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        dispatch(deleteMovie({ id }));
                        hideFunction();
                    }}
                >
                    confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

DeleteModal.propTypes = {};

export default DeleteModal;
