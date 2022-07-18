export const actionTypes = {
    SET_CRITERIA_FILTER: 'SET_CRITERIA_FILTER',
    SET_CRITERIA_SORT_BY: 'SET_CRITERIA_SORT_BY',
    SET_CRITERIA_SORT_ORDER: 'SET_CRITERIA_SORT_ORDER',
};

const initialState = {
    sortBy: '',
    sortOrder: '',
    filter: [],
};

export const criteriasReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CRITERIA_SORT_BY:
            return { ...state, sortBy: action.payload };
        case actionTypes.SET_CRITERIA_SORT_ORDER:
            return { ...state, sortOrder: action.payload };
        case actionTypes.SET_CRITERIA_FILTER:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};
