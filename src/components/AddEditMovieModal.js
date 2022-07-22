import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import uniqid from "uniqid";
import { format, parse } from "date-fns/esm";
import { MovieShape } from "./shapes";

const reducer = (state, action) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload };
        case "genres":
            return { ...state, genres: action.payload };
        case "release_date":
            return { ...state, release_date: action.payload };
        case "poster_path":
            return { ...state, poster_path: action.payload };
        case "overview":
            return { ...state, overview: action.payload };
        case "vote_average":
            return { ...state, vote_average: action.payload };
        case "runtime":
            return { ...state, runtime: action.payload };
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
                        id="movie-poster-path"
                        type="input"
                        value={movie.poster_path ?? ""}
                        onChange={(e) => dispatch({ type: "poster_path", payload: e.target.value })}
                    />
                    <br />
                    <label htmlFor="movie-genres">Genres</label>
                    <select id="movie-genres">
                        {movie?.genres?.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    <br />
                    <label htmlFor="movie-release-date">Release Date</label>
                    <input
                        id="movie-release-date"
                        type="date"
                        value={format(movie?.release_date ?? new Date(), "yyyy-MM-dd")}
                        onChange={(e) =>
                            dispatch({ type: "release_date", payload: parse(e.target.value, "yyyy-MM-dd", new Date()) })
                        }
                    />
                    <br />
                    <label htmlFor="movie-rating">Rating</label>
                    <input
                        id="movie-rating"
                        type="input"
                        value={movie.vote_average ?? ""}
                        onChange={(e) => dispatch({ type: "vote_average", payload: e.target.value })}
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
    movie: PropTypes.shape(MovieShape),
};

export default AddEditMovieModal;
