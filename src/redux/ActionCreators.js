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

    return fetch(baseUrl + 'api/items')
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


// UPDATE CART

/*export const add = (count) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: count
    }
}

export const addToCart = (id, count) => (dispatch) => {
	const updateCount = count + 1;
	console.log(`add action id is ${id} and count is ${updateCount}`)
    return dispatch(add(updateCount));
}*/


export const subtract = (itemid) => {
    return {
        type: ActionTypes.SUBTRACT_FROM_CART,
        payload: itemid
    }
}

export const subtractFromCart = (id) => (dispatch) => {
	console.log(`subtract action id is ${id}`)
    return dispatch(subtract(id));
}

export const addToCart = (id) => {
  return dispatch => {
  	console.log('this fired')
    return new Promise((resolve, reject) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: id
      });
      resolve()
    });
  }
}


export const fetchCart = () => (dispatch) => {
	return dispatch({
		type: "FETCH_CART"
	})
}


export const addQty = (id, price) => (dispatch) => {
	
}