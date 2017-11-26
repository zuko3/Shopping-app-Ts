export interface CartModel{
    name:string;
    image:string;
    id:number;
    priceper:number;
    quantity:number;
    totalPrice:number;
}


export type mycartList={
    [key:number]: CartModel;
};