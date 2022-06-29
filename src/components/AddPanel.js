import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import Logo from "./Logo";
import MovieModal from "./MovieModal";
import { Modal } from "react-bootstrap";

const AddPanel = () => {
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
                <MovieModal show={show} hideFunction={() => setShow(false)} />
            </div>
        </div>
    );
};

AddPanel.propTypes = {};

export default AddPanel;
