import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { append, compose, filter, ifElse, includes, join, o } from 'ramda';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const includeExcludeGenres = (genre) =>
    compose(
        join(','),
        ifElse(
            includes(genre),
            filter((g) => g != genre),
            append(genre)
        )
    );

const GenreButtons = ({ genres = [] }) => {
    const [, setSearchParams] = useSearchParams();
    const genresSelected = useSelector((state) => state.criterias.filter);
    const handleClick = (genre) => () =>
        setSearchParams({
            genre: includeExcludeGenres(genre)(genresSelected),
        });

    return (
        <>
            {genres.map((genre) => (
                <Button
                    key={genre}
                    variant={`outline-${genresSelected.includes(genre) ? 'secondary' : 'primary'}`}
                    className="m-1"
                    size="sm"
                    onClick={handleClick(genre)}
                >
                    {genre}
                </Button>
            ))}
        </>
    );
};

GenreButtons.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenreButtons;
