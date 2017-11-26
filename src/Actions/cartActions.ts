import {Action} from "../models/action";
import {CartModel} from "../models/CartModel";
import {
    ADD_TO_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    REMOVE_FROM_CART,
    EMPTY_CART,
    ITEM_ADDED_LIGHTBOX
    
} from '../models/constants';


export function addItemToCart(cartobj:CartModel): Action<CartModel> {
    return {
        type: ADD_TO_CART,
        payload:cartobj
    }
}

export function decrementItem(pid:number): Action<{}> {
    return {
        type: DECREMENT_ITEM,
        payload:{id:pid}
    }
}

export function incrementItem(pid:number): Action<{}> {
    return {
        type: INCREMENT_ITEM,
        payload:{id:pid}
    }
}

export function removeItem(pid:number): Action<{}> {
    return {
        type: REMOVE_FROM_CART,
        payload:{id:pid}
    }
}


export function emptyCart(): Action<{}> {
    return {
        type: EMPTY_CART,
        payload:{}
    }
}

export function itemAddedLightBox(): Action<{}> {
    return {
        type: ITEM_ADDED_LIGHTBOX,
        payload:{
                data:"The corresponding item has been added to cart, You can manage your items in view cart sections."
            }
    }
}

