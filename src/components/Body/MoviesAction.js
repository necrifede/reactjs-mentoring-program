import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getAllGenders } from '../../utils';
import { setCriteriaSortBy, setCriteriaSortOrder } from '../../store';
import GenreButtons from './GenreButtons';

const order = {
    release_date: 'desc',
    vote_average: 'desc',
};

const MoviesAction = () => {
    const movies = useSelector((state) => state.movies.data);
    const dispatch = useDispatch();
    const [sortBy, setSortBy] = useState('release_date');

    const genres = getAllGenders(movies);

    useEffect(() => {
        dispatch(setCriteriaSortOrder(order[sortBy]));
        dispatch(setCriteriaSortBy(sortBy));
    }, [sortBy]);

    return (
        <Row className="m-2">
            <Col sm="9">
                <GenreButtons genres={genres} />
            </Col>
            <Col sm="3">
                Sort By:
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="release_date">Release Date</option>
                    <option value="vote_average">Rating</option>
                </select>
            </Col>
        </Row>
    );
};

MoviesAction.propTypes = {};

export default MoviesAction;
