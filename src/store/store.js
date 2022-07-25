import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { moviesReducer } from './reducerMovies';
import { selectedMovieReducer } from './reducerSelectedMovie';
import { criteriasReducer } from './reducerCriterias';
import { rootSaga } from './sagas';
import { loadingReducer } from './reducerLoadings';

const rootReducer = combineReducers({
    movies: moviesReducer,
    selected: selectedMovieReducer,
    criterias: criteriasReducer,
    loading: loadingReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
