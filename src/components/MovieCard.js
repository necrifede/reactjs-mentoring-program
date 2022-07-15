import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DeleteModal from "./DeleteModal";
import AddEditMovieModal from "./AddEditMovieModal";
import { MovieShape } from "./shapes";
import { getYear } from "date-fns/esm";
import { useSelectedMovie } from "../hooks/useSelectedMovie";

const toggleButtonId = "dropdown-toggle-button-actions";

const MovieCard = ({
    movie: { id, title = "", genres = [], release_date, poster_path = "", ...movie } = {},
    deleteMovie = () => {},
    editMovie = () => {},
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [, setMovieSelected] = useSelectedMovie();

    return (
        <Col>
            <Card
                onClick={(e) => {
                    const classes = e.target.classList;
                    // TODO: find a better way to avoid click over these classes
                    if (!classes.contains("dropdown-toggle") && !classes.contains("dropdown-item")) {
                        setMovieSelected({ id, title, genres, release_date, poster_path, ...movie });
                    }
                }}
            >
                <Card.Img variant="top" src={poster_path} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{getYear(release_date) ?? ""}</Card.Subtitle>
                    {genres.map((genre) => (
                        <Button key={genre}>{genre}</Button>
                    ))}
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
                    action={() => deleteMovie({ id })}
                />
            )}
            {showEditModal && (
                <AddEditMovieModal
                    show={showEditModal}
                    hideFunction={() => setShowEditModal(false)}
                    movie={{ id, title, genres, release_date, poster_path, ...movie }}
                    actionMovie={editMovie}
                />
            )}
        </Col>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape(MovieShape),
    editMovie: PropTypes.func,
    deleteMovie: PropTypes.func,
};

export default MovieCard;
