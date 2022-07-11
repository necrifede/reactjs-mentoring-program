import React from "react";
import PropTypes from "prop-types";
import { MovieShape } from "./shapes";
import { Card, Col, Row } from "react-bootstrap";
import { getYear } from "date-fns";

const MovieDetails = ({ movie: { title, url, genres, date, rating, runtime, overview } = {} }) => {
    return (
        <Row>
            <Col md={4} className="p-4">
                <Card.Img variant="top" src={url} />
            </Col>
            <Col className="p-5">
                <h1>
                    {title} - <span className="h4">{rating}</span>
                </h1>
                <h6>{genres.join(", ")}</h6>

                <Row className="p-3">
                    <Col xs={2}>{getYear(date)}</Col>
                    <Col>{runtime}</Col>
                </Row>

                <p>{overview}</p>
            </Col>
        </Row>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.shape(MovieShape).isRequired,
};

export default MovieDetails;
