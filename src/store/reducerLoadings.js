import { put } from 'redux-saga/effects';

const actionTypes = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
};

export const startLoading = (namespace) => put({ type: 'START_LOADING', payload: namespace });
export const stopLoading = (namespace) => put({ type: 'STOP_LOADING', payload: namespace });

const initialState = {};

const actions = {
    [actionTypes.START_LOADING]: (state, action) => ({ ...state, [action.payload]: true }),
    [actionTypes.STOP_LOADING]: (state, action) => ({ ...state, [action.payload]: false }),
};

export const loadingReducer = (state = initialState, action) => actions?.[action.type]?.(state, action) ?? state;
