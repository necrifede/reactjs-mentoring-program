import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'ramda';
import { setFilterGenres } from '../../store';
import { Button } from 'react-bootstrap';

const GenreButtons = ({ genres = [] }) => {
    const genresSelected = useSelector((state) => state.criterias.filter);
    const dispatch = useDispatch();
    const dispatchGenres = compose(dispatch, setFilterGenres);

    return (
        <>
            {genres.map((genre) => (
                <Button
                    key={genre}
                    variant={`outline-${genresSelected.includes(genre) ? 'secondary' : 'primary'}`}
                    className="m-1"
                    size="sm"
                    onClick={() =>
                        dispatchGenres(
                            genresSelected.includes(genre)
                                ? genresSelected.filter((g) => g != genre)
                                : [...genresSelected, genre]
                        )
                    }
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
