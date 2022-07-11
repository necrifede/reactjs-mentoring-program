import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { ContextMovieDetails, values } from "../context/ContextMovieDetails";

const moviesTemporal = [
    {
        id: "123",
        title: "Pulp fiction",
        genres: ["A", "B"],
        date: new Date("10/14/1994"),
        url: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
        overview: "Lorem ipsum dolor sit amet, consectetur adipis",
        rating: "2.3"
    },
    {
        id: "124",
        title: "Martyrs",
        genres: ["A", "B"],
        date: new Date("1/1/2008"),
        url: "https://m.media-amazon.com/images/M/MV5BYTY0NTZlZjYtNWRmZi00MGRjLTk4ZDctMjE4NjBiZTUyNGNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        overview: "Lorem ipsum dolor sit amet, consectetur adipis",
    },
    {
        id: "125",
        title: "1922",
        genres: ["A", "B"],
        date: new Date("9/22/2017"),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxoHfwsDVEI8jQHQKqVNRDJ3GcV5OKk2fqLZg50x3KHxW4Cv0ktaGeo9EINz3Jc_WLqU&usqp=CAU",
        overview: "Lorem ipsum dolor sit amet, consectetur adipis",
    },
    {
        id: "126",
        title: "some title",
        genres: ["A", "B"],
        date: new Date(),
        url: "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
        overview: "Lorem ipsum dolor sit amet, consectetur adipis",
    },
];

const Layout = () => {
    const [movies, setMovies] = useState([]);
    const [defaultMovie, setMovie] = useState(undefined);

    useEffect(() => {
        setMovies(moviesTemporal);
    }, []);

    const addMovie = (movie) => setMovies([movie, ...movies]);
    const editMovie = ({ id: toEdit, ...editedMovie }) =>
        setMovies(movies.map(({ id, ...movie }) => ({ id, ...(id === toEdit ? editedMovie : movie) })));
    const deleteMovie = (movie) => setMovies(movies.filter(({ id }) => id != movie?.id));

    return (
        <ContextMovieDetails.Provider value={[defaultMovie, setMovie]}>
            <Container>
                <Header addMovie={addMovie} />
                <Body editMovie={editMovie} deleteMovie={deleteMovie} movies={movies} />
                <Footer />
            </Container>
        </ContextMovieDetails.Provider>
    );
};

Layout.propTypes = {};

export default Layout;
