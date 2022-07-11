import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import AddPanel from "./AddPanel";
import SearchPanel from "./SearchPanel";
import SearchButtonPanel from "./SearchButtonPanel";
import MovieDetails from "./MovieDetails";
import { useSelectedMovie } from "../hooks/useSelectedMovie";

const Header = ({ addMovie = () => {} }) => {
    const [selectedMovie, setSelectedMovie] = useSelectedMovie();

    return (
        <Row>
            <Col>
                {selectedMovie ? (
                    <>
                        <SearchButtonPanel unselectMovie={() => setSelectedMovie(undefined)} />
                        <MovieDetails movie={selectedMovie} />
                    </>
                ) : (
                    <>
                        <AddPanel addMovie={addMovie} />
                        <SearchPanel />
                    </>
                )}
            </Col>
        </Row>
    );
};

Header.propTypes = {
    addMovie: PropTypes.func,
};

export default Header;
