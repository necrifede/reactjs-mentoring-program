import { compose, flatten, map, prop, uniq } from 'ramda';

export * from './constants';

export const formatMovies = ({ data = [], ...movie }) => ({
    ...movie,
    data: data.map(({ release_date, ...movie }) => ({ ...movie, release_date: new Date(release_date) })),
});

export const getAllGenders = compose(uniq, flatten, compose(map, prop)('genres'));
