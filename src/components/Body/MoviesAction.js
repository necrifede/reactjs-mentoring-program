import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getAllGenres } from '../../utils';
import { setCriteriaSortOrder } from '../../store';
import GenreButtons from './GenreButtons';
import { useSearchParams } from 'react-router-dom';

const order = {
    release_date: 'desc',
    vote_average: 'desc',
    title: 'asc',
};

const MoviesAction = () => {
    const movies = useSelector((state) => state.movies.data);
    const sortBy = useSelector((state) => state.criterias.sortBy);
    const dispatch = useDispatch();
    const [, setSearchParams] = useSearchParams();

    const genres = getAllGenres(movies);

    useEffect(() => {
        dispatch(setCriteriaSortOrder(order[sortBy]));
    }, [sortBy]);

    return (
        <Row className="m-2">
            <Col sm="9">
                <GenreButtons genres={genres} />
            </Col>
            <Col sm="3">
                Sort By:
                <select onChange={(e) => setSearchParams({ sortBy: e.target.value })} value={sortBy}>
                    <option value="release_date">Release Date</option>
                    <option value="vote_average">Rating</option>
                    <option value="title">Title</option>
                </select>
            </Col>
        </Row>
    );
};

MoviesAction.propTypes = {};

export default MoviesAction;
