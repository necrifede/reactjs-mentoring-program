export const actionTypes = {
    SET_SELECTED_MOVIE: "SET_SELECTED_MOVIE",
    CLEAR_SELECTED_MOVIE: "CLEAR_SELECTED_MOVIE",
};

const initialState = null;

export const selectedMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_MOVIE:
            return { ...action.payload };
        case actionTypes.CLEAR_SELECTED_MOVIE:
            return null;
        default:
            return state;
    }
};
