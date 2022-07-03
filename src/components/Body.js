import React from "react";
import PropTypes from "prop-types";
import MovieList from "./MovieList";
import { Col, Row } from "react-bootstrap";
import MoviesStatus from "./MoviesStatus";
import MoviesAction from "./MoviesAction";
import MovieCard from "./MovieCard";

const Body = ({ editMovie = () => {}, deleteMovie = () => {}, movies = [] }) => (
    <>
        <MoviesAction />
        <MoviesStatus />
        <MovieList movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} />
    </>
);

Body.propTypes = {
    editMovie: PropTypes.func,
    deleteMovie: PropTypes.func,
    movies: PropTypes.arrayOf(PropTypes.shape(MovieCard.propTypes)),
};

export default Body;
