import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const MoviesAction = ({ genres = [] }) => (
    <>
        {genres.map((genre) => (
            <Button>{genre}</Button>
        ))}
        Sort By:
        <select>
            <option>Release Date</option>
            <option>Title</option>
        </select>
    </>
);

MoviesAction.propTypes = {};

export default MoviesAction;
