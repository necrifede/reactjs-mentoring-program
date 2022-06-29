import React from "react";
import PropTypes from "prop-types";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const MovieModal = ({ show = false, hideFunction = () => {} }) => (
    <Modal show={show} onHide={hideFunction}>
        <Modal.Header closeButton>Add/Edit Movie</Modal.Header>
        <Modal.Body>
            <form>
                <label htmlFor="movie-title">Title</label>
                <input id="movie-title" type="text" />
                <br />
                <label htmlFor="movie-url">Movie Url</label>
                <input id="movie-url" type="text" />
                <br />
                <label htmlFor="movie-genre">Genre</label>
                <select id="movie-genre">
                    <option>Genre 1</option>
                    <option>Genre 2</option>
                </select>
                <br />
                <label htmlFor="movie-release-date">Release Date</label>
                <input id="movie-release-date" type="date" />
                <br />
                <label htmlFor="movie-rating">Rating</label>
                <input id="movie-rating" type="input" />
                <br />
                <label htmlFor="movie-runtime">Runtime</label>
                <input id="movie-runtime" type="input" />
                <br />
                <label htmlFor="movie-overview">Overview</label>
                <input id="movie-overview" type="text" />
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={hideFunction}>
                Close
            </Button>
            <Button variant="primary" onClick={hideFunction}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
);

MovieModal.propTypes = {
    show: PropTypes.bool,
    hideFunction: PropTypes.func,
};

export default MovieModal;
