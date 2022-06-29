import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import Logo from "./Logo";

const AddPanel = () => {
    return (
        <div className="d-flex">
            <div className="me-auto p-2">
                <Logo />
            </div>
            <div>
                <Button>+ Add Movie</Button>
            </div>
        </div>
    );
};

AddPanel.propTypes = {};

export default AddPanel;
