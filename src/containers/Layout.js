import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../store';
import { URL } from '../utils';

const Layout = () => {
    const dispatch = useDispatch();
    const criterias = useSelector((state) => state.criterias);

    useEffect(() => {
        dispatch(fetchMoviesAction({ url: URL, criterias }));
    }, [criterias]);

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
