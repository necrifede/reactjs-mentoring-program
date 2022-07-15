import { actionTypes as actionMovies } from "./reducerMovies";
import { actionTypes as actionSelectedMovie } from "./reducerSelectedMovie";

export const setMovies = (movies) => ({ type: actionMovies.SET_MOVIES, payload: movies });

export const setSelectedMovie = (movie) => ({ type: actionSelectedMovie.SET_SELECTED_MOVIE, payload: movie });
export const clearSelectedMovie = () => ({ type: actionSelectedMovie.CLEAR_SELECTED_MOVIE });
