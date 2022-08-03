export const actionTypes = {
    SET_MOVIES: 'SET_MOVIES',
    CLEAR: 'CLEAR',
    FETCH_MOVIES: 'FETCH_MOVIES',
    CREATE_MOVIE: 'CREATE_MOVIE',
    DELETE_MOVIE: 'DELETE_MOVIE',
    UPDATE_MOVIE: 'UPDATE_MOVIE',
    MOVIES_FETCH_FAILED: 'MOVIES_FETCH_FAILED',
};

const initialState = {
    totalAmount: 0,
    data: [],
    offset: 0,
    limit: 0,
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return { ...state, ...action.payload };
        case actionTypes.CLEAR:
            return initialState;
        case actionTypes.MOVIES_FETCH_FAILED:
            console.error('Error when fetch movies: ', action?.error?.message);
            return state;
        default:
            return state;
    }
};
