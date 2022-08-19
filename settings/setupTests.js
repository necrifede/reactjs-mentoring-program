import '@testing-library/jest-dom';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { moviesReducer } from '../src/store/reducerMovies';
import { selectedMovieReducer } from '../src/store/reducerSelectedMovie';
import { criteriasReducer } from '../src/store/reducerCriterias';
import { loadingReducer } from '../src/store/reducerLoadings';

const rootReducer = combineReducers({
    movies: moviesReducer,
    selected: selectedMovieReducer,
    criterias: criteriasReducer,
    loading: loadingReducer,
});

const sagaMiddleware = createSagaMiddleware();

export function createTestStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    return store;
}
