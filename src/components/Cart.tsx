import * as React from "react";
import {mycartList} from "../models/CartModel";
import {CartModel} from "../models/CartModel";
import {Action} from "../models/action";
import { connect } from "react-redux";
import {store} from "../store/store";
import {decrementItem,incrementItem,removeItem,emptyCart} from "../Actions/cartActions"; 
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import {Link}  from "react-router-dom";

interface cartState{
    data:mycartList
}

interface DispatchProps {
   decrementItem(pid:number): Action<{}>;
   incrementItem(pid:number): Action<{}>;
   removeItem(pid:number): Action<{}>;
   emptyCart(): Action<{}>;
}

function mapStateToProps(state:any):cartState{
    return {
          data:state.cartReducer
    };
}

function mapDispatchToProps(dispatch:any):DispatchProps{
  return bindActionCreators({decrementItem,incrementItem,removeItem,emptyCart},dispatch);
}

type cartProps = cartState & DispatchProps;

class cartClass extends React.Component<cartProps,any>{

    createCartheader(){
         let cartHeader:any=[];
         if(Object.keys(this.props.data).length>0){
             cartHeader.push(
                 <div className="row">
                        <div className="col-sm-3">
                            <h3>Viewing your cart</h3>
                        </div>

                        <div className="col-sm-3">
                              <button className="btn btn-danger" type="button" data-toggle="modal" data-target="#emptyCart" ><span className="fa fa-times"></span>&nbsp;Clear cart</button>
                        </div>

                        <div className="modal fade" id="emptyCart" data-backdrop="static" data-keyboard="false">
                            <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                            <div className="modal-header">
                                                    <h5>Cart action !</h5>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div className="modal-body">
                                                    <p>
                                                            Are you sure you want to remove all the items from cart.
                                                           
                                                    </p>
                                                    <footer className="blockquote-footer">From MyShop website</footer>        
                                            </div>
                                            <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary" onClick={this.props.emptyCart}  data-dismiss="modal">Ok, remove</button>
                                                    <button type="button" className="btn btn-secondary"  data-dismiss="modal">close</button>
                                            </div>
                                    </div>
                            </div>
                       </div>
                </div>);

         }else{
             cartHeader.push(
                 <div className="row">
                        <div className="col-sm-3">
                            <h3>Viewing your cart</h3>
                        </div>
                </div>)
         }

         return cartHeader;

    }

    createcartItems(){
            let cartItem:any=[];
             if(Object.keys(this.props.data).length>0){
                 Object.values(this.props.data).map((obj:CartModel,i:number)=>{
                     cartItem.push(
                            <tr>
                                <td><img src="/noMobile.png" height="30" width="70"/>{obj.name}</td>
                                <td>{obj.quantity}</td>
                                <td>$ {obj.priceper * obj.quantity }</td>
                                <td>
                                    <span className="btn-group btn-group-sm">
                                        <button type="button" className="btn btn-primary" onClick={(e,pid:number=obj.id)=>this.props.incrementItem(pid)}>&nbsp;&nbsp;<span className="fa fa-plus"></span>&nbsp;&nbsp;</button>
                                        <button type="button" className="btn btn-primary" onClick={(e,pid:number=obj.id)=>this.props.decrementItem(pid)}>&nbsp;&nbsp;<span className="fa fa-minus"></span>&nbsp;&nbsp;</button>
                                    </span>
                                </td>
                                
                                <td>
                                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target={"#deleteItem"+obj.id} ><span className="fa fa-times"></span></button>
                                        <div className="modal fade" id={"deleteItem"+obj.id} data-backdrop="static" data-keyboard="false">
                                            <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                            <div className="modal-header">
                                                                    <h5>Cart action !</h5>
                                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                            </div>
                                                            <div className="modal-body">
                                                                    <p>
                                                                            Are you sure you want to remove selected item, <b>{obj.name}</b> from your cart.
                                                                        
                                                                    </p>
                                                                    <footer className="blockquote-footer">From MyShop website</footer>        
                                                            </div>
                                                            <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary" onClick={(e,pid:number=obj.id)=>this.props.removeItem(pid)}  data-dismiss="modal">Ok, remove</button>
                                                                    <button type="button" className="btn btn-secondary"  data-dismiss="modal">close</button>
                                                            </div>
                                                    </div>
                                            </div>
                                        </div>
                                </td>
                          </tr>
                     );
                 });
            }else{
                cartItem.push(<tr><td colSpan={4}><h4>Your cart is empty</h4></td></tr>);
            }
            return cartItem;
    }

    getFooterButtoms(){
         let footerItem:any=[];
         let totalAmount:number=0;
         if(Object.keys(this.props.data).length>0){
             Object.values(this.props.data).map((obj:CartModel)=>{
                    totalAmount+=obj.priceper * obj.quantity;
              });
              if(totalAmount==0){
                  footerItem.push(
                        <div className="col-sm-3 marginTop">
                                <button className="btn btn-primary btn-block" disabled={true} type="button"><span className="fa fa-usd"></span>&nbsp;&nbsp;Proceed and make payment</button>
                        </div>
                    );
                  
              }else{
                  footerItem.push(
                        <div className="col-sm-3 marginTop">
                                <Link className="btn btn-primary btn-block" to={"/payment"}><i className="fa fa-usd"></i>&nbsp;&nbsp;Proceed and make payment</Link>
                        </div>
                    );

              }
              
          }

          return footerItem;

    }

    getTotalAmount(){
        let totalDiv:any=[];
        let totalAmount:number=0;
        if(Object.keys(this.props.data).length>0){
                Object.values(this.props.data).map((obj:CartModel)=>{
                    totalAmount+=obj.priceper * obj.quantity;
                });
                totalDiv.push(
                    <div className="row marginTop">
                                <div className="col-sm-12">                               
                                    <h4>Your total amount :&nbsp;$ {totalAmount}</h4>                              
                                </div>
                    </div>
                );
        }
        return totalDiv;
    }

    render(){
        return(
                <div>        
                        {this.createCartheader()}
                        <div className="row marginTop">
                                <div className="col-sm-12">
                                    <table className="table">
                                            <thead className="table-primary">
                                                <tr>
                                                    <th>ProductName</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Add/Remove</th>
                                                    <th>Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {this.createcartItems()}
                                            </tbody>
                                    </table>
                                    
                                </div>
                        </div>
                
                        {this.getTotalAmount()}
                
                        <div className="row">
                             {this.getFooterButtoms()}
                            <div className="col-sm-3 marginTop">
                                <Link className="btn btn-primary btn-block" to={"/"}><span className="fa fa-arrow-left"></span>&nbsp;&nbsp;Continue shopping</Link>
                            </div>
                       </div>
                </div>
            );
    }
        
}

export const Cart= withRouter(
    connect(mapStateToProps, mapDispatchToProps)(cartClass)
);