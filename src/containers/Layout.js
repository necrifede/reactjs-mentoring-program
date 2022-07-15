import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { ContextMovieDetails, values } from "../context/ContextMovieDetails";
import { get } from "axios";

const Layout = () => {
    const [movies, setMovies] = useState([]);
    const [defaultMovie, setMovie] = useState(undefined);

    useEffect(() => {
        const retrieveMovies = async () => {
            const { data: { data } = {} } = await get("http://localhost:4000/movies");
            setMovies(data.map(({ release_date, ...movie }) => ({ ...movie, release_date: new Date(release_date) })));
        };
        retrieveMovies();
    }, []);

    const addMovie = (movie) => setMovies([movie, ...movies]);
    const editMovie = ({ id: toEdit, ...editedMovie }) =>
        setMovies(movies.map(({ id, ...movie }) => ({ id, ...(id === toEdit ? editedMovie : movie) })));
    const deleteMovie = (movie) => setMovies(movies.filter(({ id }) => id != movie?.id));

    return (
        <ContextMovieDetails.Provider value={[defaultMovie, setMovie]}>
            <Container>
                <Header addMovie={addMovie} />
                <Body editMovie={editMovie} deleteMovie={deleteMovie} movies={movies} />
                <Footer />
            </Container>
        </ContextMovieDetails.Provider>
    );
};

Layout.propTypes = {};

export default Layout;
