import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get, post, delete as remove, put as update } from 'axios';
import { compose } from 'ramda';
import queryString from 'query-string';
import { formatMovies, moviesUrl as url } from '../utils';
import { setMoviesAction } from '../store';

function* fetchMovies({ payload: { criterias } = {} }) {
    try {
        const { data = {} } = yield call(get, `${url}?${queryString.stringify(criterias, { arrayFormat: 'comma' })}`);
        yield compose(put, setMoviesAction, formatMovies)(data);
    } catch (error) {
        yield put({ type: 'MOVIES_FETCH_FAILED', error });
    }
}

function* createMovie({ payload = {} }) {
    try {
        // TODO: create loading
        const response = yield call(post, url, payload);
    } catch (error) {
        console.log('error MOVIES_CREATE_FAILED: ', error);
        yield put({ type: 'MOVIES_CREATE_FAILED', error });
    }
}

function* updateMovie({ payload = {} }) {
    try {
        const response = yield call(update, url, payload);
    } catch (error) {
        console.log('error MOVIES_UPDATE_FAILED: ', error);
        yield put({ type: 'MOVIES_UPDATE_FAILED', error });
    }
}

function* deleteMovie({ payload: { id } = {} }) {
    try {
        const response = yield call(remove, `${url}/${id}`);
    } catch (error) {
        console.log('error MOVIES_DELETE_FAILED: ', error);
        yield put({ type: 'MOVIES_DELETE_FAILED', error });
    }
}

export function* rootSaga() {
    // TODO: use actions
    yield takeLatest('FETCH_MOVIES', fetchMovies);
    yield takeEvery('CREATE_MOVIE', createMovie);
    yield takeEvery('DELETE_MOVIE', deleteMovie);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
}
