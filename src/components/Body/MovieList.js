import React from 'react';
import MovieCard from './MovieCard';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const movies = useSelector((state) => state.movies.data);

    return (
        <Row xs={1} sm={2} md={3} className="g-4 all-movies">
            {movies.map((movie) => (
                <MovieCard key={movie?.id} movie={movie} />
            ))}
        </Row>
    );
};

MovieList.propTypes = {};

export default MovieList;
