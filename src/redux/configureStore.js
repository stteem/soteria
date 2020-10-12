import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { createForms } from 'react-redux-form';
//import { Auth } from './auth';
import { Books } from './books';
import { CartCount } from './cartcount';
//import { Article } from './articleid';
//import { RegisterUser } from './createUser';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { InitialUser } from './forms';




export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            books: Books,
            cartcount: CartCount
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}