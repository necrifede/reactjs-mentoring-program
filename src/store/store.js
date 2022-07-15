import { combineReducers, createStore } from "redux";
import { moviesReducer } from "./reducerMovies";
import { composeWithDevTools } from "@redux-devtools/extension";
import { selectedMovieReducer } from "./reducerSelectedMovie";

const rootReducer = combineReducers({ movies: moviesReducer, selected: selectedMovieReducer });

export const store = createStore(rootReducer, composeWithDevTools());
