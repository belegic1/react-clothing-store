import { SHOP_DATA } from "./shop.data"
import ShopActionTypes from "./shop.types"

const INITIAL_STATE = {
    // collections: SHOP_DATA
    collections: null,
    isFetching: false,
    errorMessage: undefined
}


export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return { ...state, isFetching: true }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return { ...state, isFetching: false, collections: action.payload }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILULE:
            return {...state, isFetching: false, errorMessage: action.payload}
        default:
            return state
    }
}