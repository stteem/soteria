import * as ActionTypes from './ActionTypes';

export const CartCount = (state = {
        cartcount: 0,
        itemids: []
    }, action) => {
    switch(action.type) {

        // Load feed
        case ActionTypes.ADD_TO_CARTS:
            return {...state, cartcount: state.cartcount + 1, itemids: state.itemids.concat(action.payload) };

        case ActionTypes.SUBTRACT_FROM_CARTS:
            return {...state, cartcount: state.cartcount - 1, itemids: state.itemids.filter(itemid => itemid.id !== action.payload) };

        default:
            return state;
    }
}