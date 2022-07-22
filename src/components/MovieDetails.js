import React from "react";
import PropTypes from "prop-types";
import { MovieShape } from "./shapes";
import { Card, Col, Row } from "react-bootstrap";
import { getYear } from "date-fns";

const MovieDetails = ({
    movie: { title, genres, release_date, poster_path, overview, vote_average, runtime } = {},
}) => {
    return (
        <Row>
            <Col md={4} className="p-4">
                <Card.Img variant="top" src={poster_path} />
            </Col>
            <Col className="p-5">
                <h1>
                    {title} - <span className="h4">{vote_average}</span>
                </h1>
                <h6>{genres.join(", ")}</h6>

                <Row className="p-3">
                    <Col xs={2}>{getYear(release_date)}</Col>
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
