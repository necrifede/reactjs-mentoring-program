export * from './constants';

export const formatMovies = ({ data = [], ...movie }) => ({
    ...movie,
    data: data.map(({ release_date, ...movie }) => ({ ...movie, release_date: new Date(release_date) })),
});
