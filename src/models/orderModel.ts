import {CartModel} from "./CartModel";
export interface OrderData{
    namefld:string;
    mobilefld:string;
    emailfld:string;
    addressfld:string;
    cardfld:string;
    cardexpFld:string;
    cardcvvfld:string;
    couponfld:string;
    totalprice:number;
    productList:Array<CartModel>;
}
