import React from "react";
import PropTypes from "prop-types";
import MovieList from "./MovieList";
import { Col, Row } from "react-bootstrap";
import MoviesStatus from "./MoviesStatus";
import MoviesAction from "./MoviesAction";

const Body = () => (
    <>
        <MoviesAction />
        <MoviesStatus />
        <MovieList />
    </>
);

Body.propTypes = {};

export default Body;
