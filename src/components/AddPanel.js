import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Logo from "./Logo";
import AddEditMovieModal from "./AddEditMovieModal";
import { Modal } from "react-bootstrap";
import { PropTypes } from 'prop-types';

const AddPanel = ({ addMovie = () => {} }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="d-flex">
            <div className="me-auto p-2">
                <Logo />
            </div>
            <div>
                <Button variant="primary" onClick={() => setShow(true)}>
                    + Add Movie
                </Button>
                <AddEditMovieModal show={show} hideFunction={() => setShow(false)} actionMovie={addMovie} />
            </div>
        </div>
    );
};

AddPanel.propTypes = {
    addMovie: PropTypes.func,
};

export default AddPanel;
