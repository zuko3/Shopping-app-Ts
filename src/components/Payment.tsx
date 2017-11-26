import * as React from "react";
import {Link}  from "react-router-dom";
import {Action} from "../models/action";
import {mycartList} from "../models/CartModel";
import {CartModel} from "../models/CartModel";
import { connect } from "react-redux";
import {store} from "../store/store";
import { withRouter } from 'react-router-dom';
import {buyproducts} from "../Actions/productActions";
import { bindActionCreators } from "redux";
import {OrderData} from "../models/orderModel"; 

interface cartState{
    data:mycartList;
      history:any;
}

interface DispatchProps {
   buyproducts(orderObj:OrderData): Action<Promise<any>>;
}

function mapStateToProps(state:any,ownProps:any):cartState{
    return {
          data:state.cartReducer,
          history:ownProps.history,
    };
}

function mapDispatchToProps(dispatch:any):DispatchProps{
  return bindActionCreators({buyproducts},dispatch);
}

type paymentProps = cartState & DispatchProps;

class PaymentClass extends React.Component<paymentProps,any>{
    private namFieldstepInput: HTMLInputElement;
    private mobFieldstepInput: HTMLInputElement;
    private emailFieldstepInput: HTMLInputElement;
    private addresslFieldstepInput: HTMLTextAreaElement;
    private cardNumberFieldstepInput: HTMLInputElement;
    private cardExpiryFieldstepInput: HTMLInputElement;
    private cardCVCFieldstepInput: HTMLInputElement;
    private couponCodeFieldstepInput: HTMLInputElement;

    constructor (props:any) {
     super(props)
        this.state = {
            errorMessage:[] 
        };
     }

     componentDidMount() {
         jQuery('#errorm').hide();
     }

    getProfileForm(){
            let noOfRows: number=2;
            let profileFormCmp=<div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                                <h3 className="card-title">Delivery Informations</h3>
                                                <p className="card-text">Name</p>
                                                <p>
                                                    <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    ref ={(node)=>this.namFieldstepInput=node}
                                                    placeholder="Name"
                                                    required/>
                                                </p>
                                                <p className="card-text">Contact</p>
                                                <p>
                                                    <input 
                                                    type="tel" 
                                                    className="form-control" 
                                                    ref ={(node)=>this.mobFieldstepInput=node}
                                                    placeholder="Enter mobile number"
                                                    required/>
                                                </p>
                                                <p className="card-text">Email</p>
                                                <p>
                                                    <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    ref ={(node)=>this.emailFieldstepInput=node}
                                                    placeholder="Enter email address"
                                                    required/>
                                                </p>
                                                <label>Delivery address</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={noOfRows}
                                                    ref ={(node)=>this.addresslFieldstepInput=node}
                                                    required>
                                                </textarea>
                                        </div>
                                    </div>
                                </div>;

                    return profileFormCmp;
        }

        getpaymentForm(){
                let noOfRows: number=2;
                let paymentForm=<div className="col-sm-5">
                                <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h3 className="card-title">Payment Details</h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="card-text"><img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label>CARD NUMBER</label>
                                                            <div className="input-group">
                                                                <input 
                                                                    type="tel"
                                                                    className="form-control"
                                                                    ref={(node)=>this.cardNumberFieldstepInput=node}
                                                                    placeholder="Valid Card Number"
                                                                    required  />
                                                            </div>
                                                        </div>  
                                                </div>
                                            </div>
                                            <div className="row">
                                                        <div className="col-xs-7 col-md-7">
                                                        <div className="form-group">
                                                            <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                                            <input 
                                                                type="tel" 
                                                                className="form-control" 
                                                                ref={(node)=>this.cardExpiryFieldstepInput=node}
                                                                placeholder="MM / YY"
                                                                required/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-5 col-md-5 pull-right">
                                                        <div className="form-group">
                                                            <label>CV CODE</label>
                                                            <input 
                                                                type="tel" 
                                                                className="form-control"
                                                                ref={(node)=>this.cardCVCFieldstepInput=node}
                                                                placeholder="CVC"
                                                                required/>
                                                        </div>
                                                    </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                <div className="form-group">
                                                            <label>COUPON CODE ( If any )</label>
                                                            <input 
                                                            type="text"
                                                            className="form-control"
                                                            ref={(node)=>this.couponCodeFieldstepInput=node}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="row marginTop">
                                                <div className="col-sm-12">                               
                                                <h4>Your total amount :&nbsp;$ {this.getTotalAmount()}</h4>                              
                                                </div>
                                        </div>
                                    </div>;
                                    return paymentForm;
                }

                hideWarnings=()=>{
                    jQuery('#errorm').hide();
                    this.setState({
                            errorMessage:[]
                    });
                }


                getWarningMessages(){
                    let cmp;
                        cmp=<div className="col-sm-11">
                                    <div className="alert alert-info">
                                            <strong>Info!</strong>&nbsp;&nbsp;All below fields are mandatory, except coupoun code.
                                    </div>
                                    <div id="errorm" className="alert alert-warning alert-dismissable fade show">
                                        <button type="button" className="close" onClick={()=>this.hideWarnings()}>&times;</button>
                                        <strong>Warning!</strong>&nbsp;&nbsp;Some error occured.
                                        <ul>
                                            {this.state.errorMessage}
                                        </ul>
                                        
                                    </div>
                            </div>;
                    return cmp;
                }


                getFooterPaymentBtn(){
                     let footerItem:any=[];
                     let totalAmount:number=0;
                     if(Object.keys(this.props.data).length>0){
                                Object.values(this.props.data).map((obj:CartModel)=>{
                                        totalAmount+=obj.priceper * obj.quantity;
                                });
                                if(totalAmount==0){
                                    footerItem.push(
                                            <div className="col-sm-3 marginTop">
                                                <button className="btn btn-primary btn-block" disabled={true}  type="button"><span className="fa fa-check-circle-o"></span>&nbsp;&nbsp;Proceed and place order</button>
                                            </div>
                                        );
                                    
                                }else{
                                    footerItem.push(
                                            <div className="col-sm-3 marginTop">
                                                    <button className="btn btn-primary btn-block" onClick={this.validateForm.bind(this)}><span className="fa fa-check-circle-o"></span>&nbsp;&nbsp;Proceed and place order</button>
                                            </div>
                                        );

                                }
                                
                            }else{
                                    footerItem.push(
                                            <div className="col-sm-3 marginTop">
                                                <button className="btn btn-primary btn-block" disabled={true}  type="button"><span className="fa fa-check-circle-o"></span>&nbsp;&nbsp;Proceed and place order</button>
                                            </div>
                                        );
                            }

                      return footerItem;
                }

                validateForm(){
                    let warningArr=[];
                    let isError:boolean=false;
                    let namefld=this.namFieldstepInput.value;
                    let mobilefld=this.mobFieldstepInput.value;
                    let emailfld=this.emailFieldstepInput.value;
                    let addressfld=this.addresslFieldstepInput.value;
                    let cardfld=this.cardNumberFieldstepInput.value;
                    let cardexpFld=this.cardExpiryFieldstepInput.value;
                    let cardcvvfld=this.cardCVCFieldstepInput.value;
                    let couponfld=this.couponCodeFieldstepInput.value;

                    if(!namefld || !mobilefld || !emailfld || !addressfld || !cardfld || !cardexpFld || !cardcvvfld){
                             isError=true;
                             warningArr.push(<li>Fields can't' be empty, except coupoun code.</li>);
                    }
                    if( !/^([A-Z]|[a-z])*$/.test(namefld) ){
                             isError=true;
                             warningArr.push(<li>Name should contain only text.</li>);
                    }
                    if( !/^(\+91[0-9]{10})|(0[0-9]{10})|([0-9]{10})$/.test(mobilefld) ){
                             isError=true;
                             warningArr.push(<li>Enter contact in proper format only digits allowed.</li>);
                    }
                    if( !/^\S+@\S+\.\S+$/.test(emailfld) ){
                            isError=true;
                            warningArr.push(<li>Enter email in proper format.</li>);
                    }
                    if( !/^[0-9]+$/.test(cardfld) ){
                            isError=true;
                            warningArr.push(<li>card number should contain  digit num</li>);
                    }
                    if( !/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(cardexpFld) ){
                            isError=true;
                            warningArr.push(<li>Expiry date should contain num of form MM/YY</li>);
                    }
                    if( !/^[0-9]{3}$/.test(cardcvvfld) ){
                            isError=true;
                            warningArr.push(<li>CVV should be of 3 digit</li>);
                    }

                    if(isError){
                        this.setState({
                            errorMessage:warningArr
                        });
                        jQuery('#errorm').show();
                    }else{
                        this.setState({
                            errorMessage:[]
                        });
                        jQuery('#errorm').hide();
                        let formData:OrderData={
                            namefld,
                            mobilefld,
                            emailfld,
                            addressfld,
                            cardfld,
                            cardexpFld,
                            cardcvvfld,
                            couponfld,
                            totalprice:this.getTotalAmount(),
                            productList: Object.values(this.props.data)
                        };
                        this.props.buyproducts(formData);
                        this.props.history.push("/result");
                    }
                }

                getTotalAmount(){
                    let totalAmount:number=0;
                    if(Object.keys(this.props.data).length>0){
                            Object.values(this.props.data).map((obj:CartModel)=>{
                                totalAmount+=obj.priceper * obj.quantity;
                            });
                    }
                    return totalAmount;
                }


                render(){
                    return(
                            <div>        
                                <div className="row">
                                       {this.getWarningMessages()} 
                                </div>
                                <div className="row">
                                    {this.getProfileForm()}
                                    {this.getpaymentForm()}      
                                </div>                     
                                <div className="row">
                                    {this.getFooterPaymentBtn()}
                                    <div className="col-sm-3 marginTop">
                                        <Link className="btn btn-primary btn-block" to={"/"}><span className="fa fa-arrow-left"></span>&nbsp;&nbsp;Continue shopping</Link>
                                    </div>
                                </div>
                            </div>
                    );
                }

}
export const Payment= withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PaymentClass)
);