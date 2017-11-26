import { createStore, applyMiddleware,combineReducers} from "redux";
import {productList,productDetails} from "../Reducer/productReducer";
import {cartReducer} from "../Reducer/cartReducer";
import {orderReducer} from "../Reducer/orderReducer";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";


export const store=createStore(
    combineReducers({productList,productDetails,cartReducer,orderReducer}),
    {},
    applyMiddleware(logger,promiseMiddleware())
);
