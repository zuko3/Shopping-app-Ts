import {CartModel} from "../models/CartModel";
import {mycartList} from "../models/CartModel";

import {Action} from "../models/action";
import {
    ADD_TO_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    REMOVE_FROM_CART,
    EMPTY_CART
    
} from '../models/constants';




const cart:mycartList={
};


export  function cartReducer (state:mycartList=cart, action: Action<CartModel>):mycartList{
  switch (action.type) {

    case ADD_TO_CART:
      let pidToAdd:number=action.payload['id'];
      return Object.assign({}, state, {...state,[pidToAdd]:action.payload}); 

    case INCREMENT_ITEM:
        let pidToIncrement:number=action.payload['id'];
        let cartListIncrement:mycartList=Object.assign({}, state);
        let increment_obj:CartModel=cartListIncrement[pidToIncrement];
        increment_obj['quantity']+=1;
        cartListIncrement[pidToIncrement]=increment_obj;
        return cartListIncrement;

    
    case DECREMENT_ITEM:
        let pidToDecrement:number=action.payload['id'];
        let cartListDecrement:mycartList=Object.assign({}, state);
        let decrement_obj:CartModel=cartListDecrement[pidToDecrement];
        if(decrement_obj['quantity'] > 0){
                decrement_obj['quantity']-=1;
                cartListDecrement[pidToDecrement]=decrement_obj;
                return cartListDecrement;
        }else{
            return state;
        }
        
    
    case REMOVE_FROM_CART:
        let pidToRemove:number=action.payload['id'];
        let cartList:mycartList=Object.assign({}, state);
        delete cartList[pidToRemove];
        return cartList; 

    case EMPTY_CART:
        let cartListToEmpty:mycartList=Object.assign({}, state);
        cartListToEmpty={};
        return cartListToEmpty;
        
    default:
       return state;
  }
}
