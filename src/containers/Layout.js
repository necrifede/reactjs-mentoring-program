import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../store';

const Layout = () => {
    const dispatch = useDispatch();
    const criterias = useSelector((state) => state.criterias);

    useEffect(() => {
        dispatch(fetchMoviesAction({ criterias }));
    }, [criterias]);

    return (
        <Container>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
};

Layout.propTypes = {};

export default Layout;
