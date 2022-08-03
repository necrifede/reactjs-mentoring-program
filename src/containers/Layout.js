import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../store';
import { Outlet, useParams } from 'react-router-dom';

const Layout = () => {
    let params = useParams();
    console.log('params: ', params);
    const dispatch = useDispatch();
    const criterias = useSelector((state) => state.criterias);
    const loadingCreate = useSelector((state) => state.loading?.createMovie);
    const loadingUpdate = useSelector((state) => state.loading?.updateMovie);
    const loadingDelete = useSelector((state) => state.loading?.deleteMovie);

    useEffect(() => {
        // TODO: refactor this part, how it could be?
        if (
            loadingCreate === false ||
            loadingUpdate === false ||
            loadingDelete === false ||
            loadingCreate === undefined ||
            loadingUpdate === undefined ||
            loadingDelete === undefined
        ) {
            dispatch(fetchMoviesAction({ criterias }));
        }
    }, [criterias, loadingCreate, loadingUpdate, loadingDelete]);

    return (
        <Container>
            <Header />
            {/* <Outlet /> */}
            <Body />
            <Footer />
        </Container>
    );
};

Layout.propTypes = {};

export default Layout;
