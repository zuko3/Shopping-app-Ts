import {
     FETCH_DATA_PRODUCTLIST,FETCH_DATA_PRODUCTLIST_PENDING,
     FETCH_DATA_PRODUCTLIST_FULFILLED,
     FETCH_DATA_PRODUCTLIST_REJECTED
} from '../models/constants';

import { 
    FETCH_DATA_PRODUCTDETAIL,FETCH_DATA_PRODUCTDETAIL_PENDING,
    FETCH_DATA_PRODUCTDETAIL_FULFILLED,FETCH_DATA_PRODUCTDETAIL_REJECTED,
    FLUSH_PRODUCT_DETAILS,
	FETCH_DATA_BUY_PRODUCTS
} from '../models/constants';

import {Action} from "../models/action";
import {OrderData} from "../models/orderModel";

const responseData:any={
   1: {
		'id':'1',
		'name':'Mobile mob1',
		'image':'noMobile.png',
		'price':'20',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':4,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    2: {
		'id':'2',
		'name':'Mobile mob2',
		'image':'noMobile.png',
		'price':'30',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'2.0',
		'totalReview':'100',
        'totalstar':3,
		'star5':'70',
		'star4':'90',
		'star3':'60',
		'star2':'50',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    3: {
		'id':'3',
		'name':'Mobile mob3',
		'image':'noMobile.png',
		'price':'40',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':2,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    4: {
		'id':'4',
		'name':'Mobile mob4',
		'image':'noMobile.png',
		'price':'50',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':4,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    5: {
		'id':'5',
		'name':'Mobile mob5',
		'image':'noMobile.png',
		'price':'60',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':1,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    6: {
		'id':'6',
		'name':'Mobile mob6',
		'image':'noMobile.png',
		'price':'70',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':3,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    7: {
		'id':'7',
		'name':'Mobile mob7',
		'image':'noMobile.png',
		'price':'80',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':2,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    8: {
		'id':'8',
		'name':'Mobile mob8',
		'image':'noMobile.png',
		'price':'90',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':1,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	},
    9: {
		'id':'9',
		'name':'Mobile mob9',
		'image':'noMobile.png',
		'price':'95',
		'description':'This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.This mobile has 8 gb of ram ,  snapdragon processor.',
		'avgRating':'4.5',
		'totalReview':'254',
        'totalstar':3,
		'star5':'90',
		'star4':'70',
		'star3':'80',
		'star2':'20',
		'star1':'20',
		'totalstar5':'150',
		'totalstar4':'63',
		'totalstar3':'15',
		'totalstar2':'6',
		'totalstar1':'20',
	}
};

export function fetchProductList(): Action<Promise<any>> {
    return {
        type: FETCH_DATA_PRODUCTLIST,
        payload:new Promise((resolve,reject)=>{
            var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //resolve(this.responseText);
                    resolve([
                        {
                        'id':'1',
                        'name':'Mobile mob1',
                        'image':'noMobile.png',
                        'price':'20',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'2',
                        'name':'Mobile mob2',
                        'image':'noMobile.png',
                        'price':'30',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'3',
                        'name':'Mobile mob3',
                        'image':'noMobile.png',
                        'price':'40',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'4',
                        'name':'Mobile mob4',
                        'image':'noMobile.png',
                        'price':'50',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'5',
                        'name':'Mobile mob5',
                        'image':'noMobile.png',
                        'price':'60',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'6',
                        'name':'Mobile mob6',
                        'image':'noMobile.png',
                        'price':'70',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'7',
                        'name':'Mobile mob7',
                        'image':'noMobile.png',
                        'price':'80',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'8',
                        'name':'Mobile mob8',
                        'image':'noMobile.png',
                        'price':'90',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        },{
                        'id':'9',
                        'name':'Mobile mob9',
                        'image':'noMobile.png',
                        'price':'95',
                        'shortdescription':'This mobile has 8 gb of ram ,  snapdragon processor.'
                        }
                    ]);
                }else if(this.readyState == 4 && this.status != 200){
                    reject(Error("Network Error"));
                }
            };
            xhttp.open("GET", "https://ipinfo.io/json", true);
            xhttp.send();
        })
    }
}



export function fetchProductDetails(id:number): Action<Promise<any>> {
    return {
        type: FETCH_DATA_PRODUCTDETAIL,
        payload:new Promise((resolve,reject)=>{
            var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //resolve(this.responseText);
                    resolve(responseData[id]);
                }else if(this.readyState == 4 && this.status != 200){
                    reject(Error("Network Error"));
                }
            };
            xhttp.open("GET", "https://ipinfo.io/json", true);
            xhttp.send();
        })
    }
}


export function flushProductDetails():Action<string>{
    return{
        type : FLUSH_PRODUCT_DETAILS,
        payload:"Flusing data from product details"
    }
}


export function buyproducts(orderObj:OrderData):Action<Promise<any>>{
	//This id replsced by response.
	let confirmOrderResponse:any={};
	confirmOrderResponse['orderId']="OD10235230";
	confirmOrderResponse['namefld']=orderObj.namefld;
	confirmOrderResponse['addressfld']=orderObj.addressfld;
	confirmOrderResponse['mobilefld']=orderObj.mobilefld;
	confirmOrderResponse['productList']=orderObj.productList;
	confirmOrderResponse['totalprice']=orderObj.totalprice;

	return{
		type:FETCH_DATA_BUY_PRODUCTS,
		payload:new Promise((resolve,reject)=>{
            var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(JSON.stringify(confirmOrderResponse));
                }else if(this.readyState == 4 && this.status != 200){
                    reject(Error("Network Error"));
                }
            };
            xhttp.open("GET", "https://ipinfo.io/json", true);
            xhttp.send();
        })
	}
}
