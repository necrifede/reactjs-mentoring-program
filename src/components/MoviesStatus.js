import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

const MoviesStatus = () => {
    const moviesNumber = useSelector((state) => state.movies?.totalAmount ?? 0);

    return (
        <Row>
            <Col>{moviesNumber} movies found</Col>
        </Row>
    );
};

export default MoviesStatus;
