import { PropTypes } from "prop-types";

export const MovieShape = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.object,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
};
