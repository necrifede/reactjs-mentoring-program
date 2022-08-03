import React from 'react';
import MovieList from './MovieList';
import MoviesStatus from './MoviesStatus';
import MoviesAction from './MoviesAction';

const Body = () => (
    <>
        <MoviesAction />
        <MoviesStatus />
        <MovieList />
    </>
);

Body.propTypes = {};

export default Body;
