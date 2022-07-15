import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieList = ({ deleteMovie = () => {}, editMovie = () => {} }) => {
    const movies = useSelector((state) => state.movies.data);

    return (
        <Row xs={1} sm={2} md={3} className="g-4">
            {movies.map((movie) => (
                <MovieCard key={movie?.id} movie={movie} deleteMovie={deleteMovie} editMovie={editMovie} />
            ))}
        </Row>
    );
};

MovieList.propTypes = {
    deleteMovie: PropTypes.func,
    editMovie: PropTypes.func,
};

export default MovieList;
