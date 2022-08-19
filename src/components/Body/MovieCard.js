import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteModal from '../DeleteModal';
import AddEditMovieModal from '../AddEditMovieModal';
import { MovieShape } from '../shapes';
import { getYear, isValid } from 'date-fns/esm';
import GenreButtons from './GenreButtons';
import { useSearchParams } from 'react-router-dom';

const toggleButtonId = 'dropdown-toggle-button-actions';

const MovieCard = ({ movie: { id, title = '', genres = [], release_date, poster_path = '', ...movie } = {} }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [, setSearchParams] = useSearchParams();

    return (
        <Col>
            <Card
                onClick={(e) => {
                    const classes = e.target.classList;
                    // TODO: find a better way to avoid click over these classes
                    if (
                        !classes.contains('dropdown-toggle') &&
                        !classes.contains('dropdown-item') &&
                        !classes.contains('btn-outline-secondary') &&
                        !classes.contains('btn-outline-primary')
                    ) {
                        setSearchParams({ movie: id });
                    }
                }}
            >
                <Card.Img variant="top" src={poster_path} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{isValid(release_date) ? getYear(release_date) : ''}</Card.Subtitle>
                    <GenreButtons genres={genres} />
                    <Dropdown>
                        <Dropdown.Toggle id={toggleButtonId} variant="secondary">
                            Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setShowEditModal(true)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => setShowDeleteModal(true)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>

            {showDeleteModal && (
                <DeleteModal
                    show={showDeleteModal}
                    hideFunction={() => setShowDeleteModal(false)}
                    movie={{ id }} //
                />
            )}
            {showEditModal && (
                <AddEditMovieModal
                    show={showEditModal}
                    hideFunction={() => setShowEditModal(false)}
                    movie={{ id, title, genres, release_date, poster_path, ...movie }}
                />
            )}
        </Col>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape(MovieShape),
};

export default MovieCard;
