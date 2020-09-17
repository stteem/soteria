import * as ActionTypes from './ActionTypes';

export const Books = (state = {
        isLoading: true,
        errMess: null,
        books: []
    }, action) => {
    switch(action.type) {

        // Load feed
        case ActionTypes.BOOKS_LOADED:
            return {...state, isLoading: false, errMess: null, books: action.payload };

        case ActionTypes.BOOKS_LOADING:
            return {...state, isLoading: true, errMess: null, books: [] };

        case ActionTypes.BOOKS_LOADING_FAILED:
            return {...state, isLoading: false, errMess: action.payload, books: [] };

        default:
            return state;
    }
}