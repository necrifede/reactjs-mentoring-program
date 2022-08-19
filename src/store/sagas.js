import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get, post, delete as remove, put as update } from 'axios';
import { compose } from 'ramda';
import queryString from 'query-string';
import { formatMovie, formatMovies, moviesUrl as url } from '../utils';
// TODO: Check why it do not work when importing from '../store'
import { setMoviesAction, setSelectedMovie } from './actions';
import { startLoading, stopLoading } from './reducerLoadings';

const storeFetchedMovies = compose(put, setMoviesAction, formatMovies);
const establishSelectedMovie = compose(put, setSelectedMovie, formatMovie);

function* fetchMovies({ payload: { criterias } = {} }) {
    try {
        yield startLoading('fetchMovies');
        const { data = {} } = yield call(get, `${url}?${queryString.stringify(criterias, { arrayFormat: 'comma' })}`);
        yield storeFetchedMovies(data);
    } catch (error) {
        yield put({ type: 'MOVIES_FETCH_FAILED', error });
    } finally {
        yield stopLoading('fetchMovies');
    }
}

function* fetchOneMovie({ payload: { id = '' } = {} }) {
    try {
        yield startLoading('fetchOneMovie');
        const { data = {} } = yield call(get, `${url}/${id}`);
        yield establishSelectedMovie(data);
    } catch (error) {
        console.log('error ONE_MOVIE_FETCH_FAILED: ', error);
        yield put({ type: 'ONE_MOVIE_FETCH_FAILED', error });
    } finally {
        yield stopLoading('fetchOneMovie');
    }
}

function* createMovie({ payload = {} }) {
    try {
        yield startLoading('createMovie');
        const response = yield call(post, url, payload);
    } catch (error) {
        console.log('error MOVIE_CREATE_FAILED: ', error);
        yield put({ type: 'MOVIE_CREATE_FAILED', error });
    } finally {
        yield stopLoading('createMovie');
    }
}

function* updateMovie({ payload = {} }) {
    try {
        yield startLoading('updateMovie');
        const response = yield call(update, url, payload);
    } catch (error) {
        console.log('error MOVIE_UPDATE_FAILED: ', error);
        yield put({ type: 'MOVIE_UPDATE_FAILED', error });
    } finally {
        yield stopLoading('updateMovie');
    }
}

function* deleteMovie({ payload: { id } = {} }) {
    try {
        yield startLoading('deleteMovie');
        yield call(remove, `${url}/${id}`);
    } catch (error) {
        console.log('error MOVIE_DELETE_FAILED: ', error);
        yield put({ type: 'MOVIE_DELETE_FAILED', error });
    } finally {
        yield stopLoading('deleteMovie');
    }
}

export function* rootSaga() {
    // TODO: use actions
    yield takeLatest('FETCH_MOVIES', fetchMovies);
    yield takeLatest('FETCH_MOVIE', fetchOneMovie);
    yield takeEvery('CREATE_MOVIE', createMovie);
    yield takeEvery('DELETE_MOVIE', deleteMovie);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
}
