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

const actions = {
    [actionTypes.SET_CRITERIA_SORT_BY]: (state, action) => ({ ...state, sortBy: action.payload }),
    [actionTypes.SET_CRITERIA_SORT_ORDER]: (state, action) => ({ ...state, sortOrder: action.payload }),
    [actionTypes.SET_CRITERIA_FILTER]: (state, action) => ({ ...state, filter: action.payload }),
};

export const criteriasReducer = (state = initialState, action) => actions?.[action.type]?.(state, action) ?? state;
