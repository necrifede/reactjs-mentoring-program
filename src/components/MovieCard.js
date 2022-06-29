import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";

const MovieCard = ({ title = "", genres = [], year = 0, image = "" }) => (
    <Col>
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{year}</Card.Subtitle>
                {genres.map((genre) => (
                    <Button key={genre}>{genre}</Button>
                ))}
            </Card.Body>
        </Card>
    </Col>
);

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
    image: PropTypes.string,
};

export default MovieCard;
