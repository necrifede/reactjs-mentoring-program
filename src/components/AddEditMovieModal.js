import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MovieCard from "./MovieCard";
import uniqid from "uniqid";
import { format, parse } from "date-fns/esm";

const reducer = (state, action) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload };
        case "url":
            return { ...state, url: action.payload };
        case "genre":
            return { ...state, genre: action.payload };
        case "date":
            return { ...state, date: action.payload };
        case "rating":
            return { ...state, rating: action.payload };
        case "runtime":
            return { ...state, runtime: action.payload };
        case "overview":
            return { ...state, overview: action.payload };
        default:
            return state;
    }
};

const AddEditMovieModal = ({ show = false, hideFunction = () => {}, actionMovie = () => {}, movie: initial = {} }) => {
    const [movie, dispatch] = useReducer(reducer, initial);

    return (
        <Modal show={show} onHide={hideFunction}>
            <Modal.Header closeButton>Add/Edit Movie</Modal.Header>
            <Modal.Body>
                <form>
                    <label htmlFor="movie-title">Title</label>
                    <input
                        id="movie-title"
                        type="input"
                        value={movie.title ?? ""}
                        onChange={(e) => dispatch({ type: "title", payload: e.target.value })}
                    />
                    <br />
                    <label htmlFor="movie-url">Movie Url</label>
                    <input
                        id="movie-url"
                        type="input"
                        value={movie.url ?? ""}
                        onChange={(e) => dispatch({ type: "url", payload: e.target.value })}
                    />
                    <br />
                    <label htmlFor="movie-genre">Genre</label>
                    <select id="movie-genre">
                        <option>Genre 1</option>
                        <option>Genre 2</option>
                    </select>
                    <br />
                    <label htmlFor="movie-release-date">Release Date</label>
                    <input
                        id="movie-release-date"
                        type="date"
                        value={format(movie?.date ?? new Date(), "yyyy-MM-dd")}
                        onChange={(e) =>
                            dispatch({ type: "date", payload: parse(e.target.value, "yyyy-MM-dd", new Date()) })
                        }
                    />
                    <br />
                    <label htmlFor="movie-rating">Rating</label>
                    <input
                        id="movie-rating"
                        type="input"
                        value={movie.rating ?? ""}
                        onChange={(e) => dispatch({ type: "rating", payload: e.target.value })}
                    />
                    <br />
                    <label htmlFor="movie-runtime">Runtime</label>
                    <input
                        id="movie-runtime"
                        type="input"
                        value={movie.runtime ?? ""}
                        onChange={(e) => dispatch({ type: "runtime", payload: e.target.value })}
                    />
                    <br />
                    <label htmlFor="movie-overview">Overview</label>
                    <input
                        id="movie-overview"
                        type="text"
                        value={movie.overview ?? ""}
                        onChange={(e) => dispatch({ type: "overview", payload: e.target.value })}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideFunction}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        actionMovie({ ...movie, id: movie?.id ?? uniqid() });
                        hideFunction();
                    }}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

AddEditMovieModal.propTypes = {
    show: PropTypes.bool,
    hideFunction: PropTypes.func,
    actionMovie: PropTypes.func,
    movie: PropTypes.shape(MovieCard.propTypes),
};

export default AddEditMovieModal;
