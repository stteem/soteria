import * as ActionTypes from './ActionTypes';
import { BOOKS } from '../shared/booksData';
import { baseUrl } from '../shared/baseUrl';



// BOOKS

export const booksLoading = () => {
    return {
        type: ActionTypes.BOOKS_LOADING,
    }
}

export const booksLoaded = (books) => {
    return {
        type: ActionTypes.BOOKS_LOADED,
        payload: books
    }
}
  
export const booksLoadingFailed = (errmess) => {
    return {
        type: ActionTypes.BOOKS_LOADING_FAILED,
        payload: errmess
    }
}

export const fetchBooks = () => (dispatch) => {
    dispatch(booksLoading(true));

    return fetch(baseUrl + 'api/books')
        .then(response => {
            if (response.ok) {
            	console.log('response ', response)
                return response;
            }
            else {
                let error = new Error('Please check your internet connection and try again.');
                throw error;
            }
        },
        error => {
            var errmess = new Error('No network, please check your internet connection and try again.');
            throw errmess;
        })
        .then(response => response.json())
        .then(response => {
        	console.log('response data ', response)
        	dispatch(booksLoaded(response))
        })
        .catch(error => {
            console.log('errmess', error.message)
            dispatch(booksLoadingFailed(error.message))
        });
}