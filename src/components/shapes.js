import { PropTypes } from 'prop-types';

export const MovieShape = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.object,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    vote_count: PropTypes.number,
    tagline: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
};
