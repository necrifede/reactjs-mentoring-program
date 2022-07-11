import { useContext } from "react";
import { ContextMovieDetails } from "../context/ContextMovieDetails";

export const useSelectedMovie = () => {
    const [selectedMovie, setSelectedMovie] = useContext(ContextMovieDetails);

    return [selectedMovie, setSelectedMovie];
};
