import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import MoviesStatus from './MoviesStatus';
import MoviesAction from './MoviesAction';

const Body = ({ editMovie = () => {}, deleteMovie = () => {} }) => (
    <>
        <MoviesAction />
        <MoviesStatus />
        <MovieList deleteMovie={deleteMovie} editMovie={editMovie} />
    </>
);

Body.propTypes = {
    editMovie: PropTypes.func,
    deleteMovie: PropTypes.func,
};

export default Body;
