import { createContext } from "react";

export const values = {
    movie: undefined,
    setMovie: () => {},
};

export const ContextMovieDetails = createContext([values.movie, values.setMovie]);
