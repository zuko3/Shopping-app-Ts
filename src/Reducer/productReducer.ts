import {Action} from "../models/action";
import {AppState} from "../models/appState";

import { FETCH_DATA_PRODUCTLIST,FETCH_DATA_PRODUCTLIST_PENDING,
  FETCH_DATA_PRODUCTLIST_FULFILLED,
  FETCH_DATA_PRODUCTLIST_REJECTED} from '../models/constants';

import { FETCH_DATA_PRODUCTDETAIL,FETCH_DATA_PRODUCTDETAIL_PENDING,
  FETCH_DATA_PRODUCTDETAIL_FULFILLED,
  FETCH_DATA_PRODUCTDETAIL_REJECTED,FLUSH_PRODUCT_DETAILS} from '../models/constants';

const iState:AppState= {
  data:[],
  dataFetched: false,
  isFetching: false,
  error: false,
}

export  function productList (state:AppState = iState, action: Action<{}>):AppState {
  switch (action.type) {
    case FETCH_DATA_PRODUCTLIST:
    case FETCH_DATA_PRODUCTLIST_PENDING:
      return Object.assign({}, state, {isFetching: true,error: false});
      
    case FETCH_DATA_PRODUCTLIST_FULFILLED:
        return Object.assign({}, state, {isFetching: false,dataFetched: true,data:[...state.data,action.payload]});
    
    case FETCH_DATA_PRODUCTLIST_REJECTED:
       return Object.assign({}, state, {isFetching: false,error: true});
          
    default:
       return state;
  }
}



const iDetailState:AppState= {
  data:[],
  dataFetched: false,
  isFetching: false,
  error: false,
}
export  function productDetails (state:AppState = iDetailState, action: Action<{}>):AppState {
  switch (action.type) {
    case FETCH_DATA_PRODUCTDETAIL:
    case FETCH_DATA_PRODUCTDETAIL_PENDING:
      return Object.assign({}, state, {isFetching: true,error: false});
      
    case FETCH_DATA_PRODUCTDETAIL_FULFILLED:
        return Object.assign({}, state, {isFetching: false,dataFetched: true,data:[...state.data,action.payload]});
    
    case FETCH_DATA_PRODUCTDETAIL_REJECTED:
       return Object.assign({}, state, {isFetching: false,error: true});
    case FLUSH_PRODUCT_DETAILS:
        let productDetailsData:AppState=Object.assign({}, state);
        productDetailsData=iDetailState;
        return productDetailsData;
          
    default:
       return state;
  }
}