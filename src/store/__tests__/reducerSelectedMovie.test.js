const { setSelectedMovie, clearSelectedMovie } = require('../actions');
const { selectedMovieReducer } = require('../reducerSelectedMovie');

describe('selectedMovieReducer()', () => {
    test('should have null as initial value', () => {
        const state = selectedMovieReducer(undefined, {});
        expect(state).toBeNull();
    });
    test('should set a movie', () => {
        const state = selectedMovieReducer(undefined, setSelectedMovie({}));
        expect(state).toEqual({});
    });
    test('should unselect a movie', () => {
        const state = selectedMovieReducer({}, clearSelectedMovie());
        expect(state).toBeNull();
    });
});
