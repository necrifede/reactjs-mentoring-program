import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { get } from "axios";
import { compose } from "ramda";
import queryString from "query-string";
import { formatMovies } from "../utils";
import { setMoviesAction } from "../store";

function* fetchMovies({ payload: { url, criterias } = {} }) {
    try {
        const { data = {} } = yield call(get, `${url}?${queryString.stringify(criterias, { arrayFormat: "comma" })}`);
        yield compose(put, setMoviesAction, formatMovies)(data);
    } catch (error) {
        yield put({ type: "MOVIES_FETCH_FAILED", error });
    }
}

export function* rootSaga() {
    yield takeLatest("FETCH_MOVIES", fetchMovies);
}
