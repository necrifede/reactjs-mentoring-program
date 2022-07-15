export const actionTypes = {
    SET_MOVIES: "SET_MOVIES",
    CLEAR: "CLEAR",
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
        default:
            return state;
    }
};
