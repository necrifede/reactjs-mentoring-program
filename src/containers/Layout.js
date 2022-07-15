import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { get } from "axios";
import { useDispatch } from "react-redux";
import { compose } from "ramda";
import { setMovies as setMoviesAction } from "../store";

const formatMovies = ({ data = [], ...rest }) => ({
    ...rest,
    data: data.map(({ release_date, ...movie }) => ({ ...movie, release_date: new Date(release_date) })),
});

const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const retrieveMovies = async () => {
            const { data = {} } = await get("http://localhost:4000/movies");
            compose(dispatch, setMoviesAction, formatMovies)(data);
        };
        retrieveMovies();
    }, []);

    const addMovie = (movie) => setMovies([movie, ...movies]);
    const editMovie = ({ id: toEdit, ...editedMovie }) =>
        setMovies(movies.map(({ id, ...movie }) => ({ id, ...(id === toEdit ? editedMovie : movie) })));
    const deleteMovie = (movie) => setMovies(movies.filter(({ id }) => id != movie?.id));

    return (
        <Container>
            <Header addMovie={addMovie} />
            <Body editMovie={editMovie} deleteMovie={deleteMovie} />
            <Footer />
        </Container>
    );
};

Layout.propTypes = {};

export default Layout;
