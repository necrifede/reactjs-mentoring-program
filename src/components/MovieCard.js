import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DeleteModal from "./DeleteModal";
import AddEditMovieModal from "./AddEditMovieModal";
import { MovieProptypes } from "./types";
import { getYear } from "date-fns/esm";

const MovieCard = ({
    movie: { id, title = "", genre = [], date, url = "", ...movie } = {},
    deleteMovie = () => {},
    editMovie = () => {},
}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{getYear(date) ?? ""}</Card.Subtitle>
                    {genre.map((genre) => (
                        <Button key={genre}>{genre}</Button>
                    ))}
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                            Actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item onClick={() => setShowEditModal(true)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => setShowDeleteModal(true)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
            <DeleteModal
                show={showDeleteModal}
                hideFunction={() => setShowDeleteModal(false)}
                action={() => deleteMovie({ id })}
            />
            <AddEditMovieModal
                show={showEditModal}
                hideFunction={() => setShowEditModal(false)}
                movie={{ id, title, genre, date, url, ...movie }}
                actionMovie={editMovie}
            />
        </Col>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape(MovieProptypes),
    editMovie: PropTypes.func,
    deleteMovie: PropTypes.func,
};

export default MovieCard;
