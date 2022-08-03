import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearSelectedMovie,
    fetchMoviesAction,
    fetchOneMovieAction,
    setCriteriaSearch,
    setCriteriaSearchBy,
    setCriteriaSortBy,
    setFilterGenres,
} from '../store';
import { useParams, useSearchParams } from 'react-router-dom';
import {
    always,
    compose,
    either,
    filter,
    identity,
    ifElse,
    isEmpty,
    isNil,
    map,
    not,
    o,
    or,
    replace,
    split,
    toUpper,
} from 'ramda';

const formatGenres = compose(
    map(replace(/^./, toUpper)),
    filter(o(not, isEmpty)),
    split(','),
    ifElse(isNil, always(''), identity)
);

const isNilOrEmpty = either(isNil, isEmpty);

const Layout = () => {
    const { searchValue = '' } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const criterias = useSelector((state) => state.criterias);
    const loadingCreate = useSelector((state) => state.loading?.createMovie);
    const loadingUpdate = useSelector((state) => state.loading?.updateMovie);
    const loadingDelete = useSelector((state) => state.loading?.deleteMovie);

    useEffect(() => {
        // TODO: useSearchParams does not hold previous values established
        dispatch(setCriteriaSearchBy('title'));
        dispatch(setCriteriaSearch(searchValue));
        dispatch(setFilterGenres(formatGenres(searchParams.get('genre'))));
        dispatch(setCriteriaSortBy(searchParams.get('sortBy') ?? 'vote_average'));
        if (isNilOrEmpty(searchParams.get('movie'))) {
            dispatch(clearSelectedMovie());
        } else {
            dispatch(fetchOneMovieAction({ id: searchParams.get('movie') }));
        }
    }, [searchValue, searchParams]);

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
