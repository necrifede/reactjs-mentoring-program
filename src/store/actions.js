import { actionTypes as actionMovies } from './reducerMovies';
import { actionTypes as actionSelectedMovie } from './reducerSelectedMovie';
import { actionTypes as actionCriterias } from './reducerCriterias';

export const fetchMoviesAction = (payload) => ({ type: actionMovies.FETCH_MOVIES, payload });
export const setMoviesAction = (movies) => ({ type: actionMovies.SET_MOVIES, payload: movies });
export const createMovie = (movie) => ({ type: actionMovies.CREATE_MOVIE, payload: movie });
export const deleteMovie = (movie) => ({ type: actionMovies.DELETE_MOVIE, payload: movie });
export const updateMovie = (movie) => ({ type: actionMovies.UPDATE_MOVIE, payload: movie });

export const setSelectedMovie = (movie) => ({ type: actionSelectedMovie.SET_SELECTED_MOVIE, payload: movie });
export const clearSelectedMovie = () => ({ type: actionSelectedMovie.CLEAR_SELECTED_MOVIE });

export const setFilterGenres = (payload) => ({ type: actionCriterias.SET_CRITERIA_FILTER, payload });
export const setCriteriaSortBy = (payload) => ({ type: actionCriterias.SET_CRITERIA_SORT_BY, payload });
export const setCriteriaSortOrder = (payload) => ({ type: actionCriterias.SET_CRITERIA_SORT_ORDER, payload });
