import { compose, flatten, map, prop, uniq } from 'ramda';

export * from './constants';

export const formatMovies = ({ data = [], ...rest }) => ({
    ...rest,
    data: data.map(formatMovie),
});

export const formatMovie = ({ release_date, runtime, tagline, ...movie }) => ({
    ...movie,
    release_date: new Date(release_date),
    runtime: runtime ?? undefined,
});

export const getAllGenres = compose(uniq, flatten, compose(map, prop)('genres'));
