export const actionTypes = {
    SET_CRITERIA_FILTER: 'SET_CRITERIA_FILTER',
    SET_CRITERIA_SORT_BY: 'SET_CRITERIA_SORT_BY',
    SET_CRITERIA_SORT_ORDER: 'SET_CRITERIA_SORT_ORDER',
    SET_CRITERIA_SEARCH_BY: 'SET_CRITERIA_SEARCH_BY',
    SET_CRITERIA_SEARCH: 'SET_CRITERIA_SEARCH',
};

const initialState = {
    sortBy: '',
    sortOrder: '',
    filter: [],
    searchBy: '',
    search: '',
};

const actions = {
    [actionTypes.SET_CRITERIA_SORT_BY]: (state, action) => ({ ...state, sortBy: action.payload }),
    [actionTypes.SET_CRITERIA_SORT_ORDER]: (state, action) => ({ ...state, sortOrder: action.payload }),
    [actionTypes.SET_CRITERIA_FILTER]: (state, action) => ({ ...state, filter: action.payload }),
    [actionTypes.SET_CRITERIA_SEARCH_BY]: (state, action) => ({ ...state, searchBy: action.payload }),
    [actionTypes.SET_CRITERIA_SEARCH]: (state, action) => ({ ...state, search: action.payload }),
};

export const criteriasReducer = (state = initialState, action) => actions?.[action.type]?.(state, action) ?? state;
