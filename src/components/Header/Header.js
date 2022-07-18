import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import AddPanel from './AddPanel';
import SearchPanel from './SearchPanel';
import SearchButtonPanel from './SearchButtonPanel';
import MovieDetails from './MovieDetails';
import { useSelector } from 'react-redux';

const Header = ({ addMovie = () => {} }) => {
    const selectedMovie = useSelector((state) => state.selected);

    return (
        <Row>
            <Col>
                {selectedMovie ? (
                    <>
                        <SearchButtonPanel />
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
