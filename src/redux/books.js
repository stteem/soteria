import * as ActionTypes from './ActionTypes';

export const Books = (state = {
        isLoading: true,
        errMess: null,
        books: [],
        cartcount: 0,
        itemids: [],
        cart:[],
        qty: 1,
        itemsQty:[]
    }, action) => {
    switch(action.type) {

        // Load feed
        case ActionTypes.BOOKS_LOADED:
            return {...state, isLoading: false, errMess: null, books: action.payload };

        case ActionTypes.BOOKS_LOADING:
            return {...state, isLoading: true, errMess: null, books: [] };

        case ActionTypes.BOOKS_LOADING_FAILED:
            return {...state, isLoading: false, errMess: action.payload, books: [] };

        //cartcount and itemids
        case ActionTypes.ADD_TO_CART:
            return {...state, cartcount: state.cartcount + 1, itemids: state.itemids.concat(action.payload) };

        case ActionTypes.SUBTRACT_FROM_CART:
            return {...state, cartcount: state.cartcount - 1, itemids: state.itemids.filter(itemid => itemid !== action.payload) };

        // Fetch cart
        case ActionTypes.FETCH_CART:
            return {...state, cart: state.itemids.map(itemid =>  state.books.filter(book => book._id === itemid ? book : null) ) };


        default:
            return state;
    }
}