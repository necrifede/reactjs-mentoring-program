import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const MoviesStatus = ({ moviesNumber = 0 }) => (
    <Row>
        <Col>{moviesNumber} movies found</Col>
    </Row>
);

MoviesStatus.propTypes = {
    moviesNumber: PropTypes.number,
};

export default MoviesStatus;
