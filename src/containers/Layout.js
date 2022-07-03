import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const moviesTemporal = [
    {
        id: "123",
        title: "some title",
        genres: ["A", "B"],
        date: new Date(),
        url: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
    {
        id: "124",
        title: "some title",
        genres: ["A", "B"],
        date: new Date(),
        url: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
    {
        id: "125",
        title: "some title",
        genres: ["A", "B"],
        date: new Date(),
        url: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
    {
        id: "126",
        title: "some title",
        genres: ["A", "B"],
        date: new Date(),
        url: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
    },
];

const Layout = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesTemporal);
    }, []);

    const addMovie = (movie) => setMovies([movie, ...movies]);
    const editMovie = ({ id: toEdit, ...editedMovie }) =>
        setMovies(movies.map(({ id, ...movie }) => ({ id, ...(id === toEdit ? editedMovie : movie) })));
    const deleteMovie = (movie) => setMovies(movies.filter(({ id }) => id != movie?.id));

    return (
        <Container>
            <Header addMovie={addMovie} />
            <Body editMovie={editMovie} deleteMovie={deleteMovie} movies={movies} />
            <Footer />
        </Container>
    );
};

Layout.propTypes = {};

export default Layout;
