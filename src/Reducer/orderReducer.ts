import {Action} from "../models/action";
import {AppState} from "../models/appState";

import {
    FETCH_DATA_BUY_PRODUCTS,
    FETCH_DATA_BUY_PRODUCTS_PENDING,
    FETCH_DATA_BUY_PRODUCTS_FULFILLED,
    FETCH_DATA_BUY_PRODUCTS_REJECTED,
    
} from '../models/constants';

const iDetailState:AppState= {
  data:[],
  dataFetched: false,
  isFetching: false,
  error: false,
}

export  function orderReducer (state:AppState = iDetailState, action: Action<{}>):AppState {
  switch (action.type) {
        case FETCH_DATA_BUY_PRODUCTS:
        case FETCH_DATA_BUY_PRODUCTS_PENDING:
        return Object.assign({}, state, {isFetching: true,error: false});
        
        case FETCH_DATA_BUY_PRODUCTS_FULFILLED:
            return Object.assign({}, state, {isFetching: false,dataFetched: true,data:[...state.data,action.payload]});
        
        case FETCH_DATA_BUY_PRODUCTS_REJECTED:
        return Object.assign({}, state, {isFetching: false,error: true});
        default:
        return state;
  }
}