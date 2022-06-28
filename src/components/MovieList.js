import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";

const moviesTemporal = [
    {
        id: "123",
        title: "some title",
        genres: ["A", "B"],
        year: 2000,
        image: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
    {
        id: "124",
        title: "some title",
        genres: ["A", "B"],
        year: 2000,
        image: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
    {
        id: "125",
        title: "some title",
        genres: ["A", "B"],
        year: 2000,
        image: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
    {
        id: "126",
        title: "some title",
        genres: ["A", "B"],
        year: 2000,
        image: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
];

const MovieList = ({ movies = [] }) => (
    <Row xs={1} sm={2} md={3} className="g-4">
        {moviesTemporal.map(({ id, ...movie }) => (
            <MovieCard key={id} {...movie} />
        ))}
    </Row>
);

MovieList.propTypes = {
    movies: PropTypes.arrayOf(MovieCard.propTypes),
};

export default MovieList;
