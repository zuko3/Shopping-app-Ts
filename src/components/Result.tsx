import * as React from "react";
import {AppState} from "../models/appState";
import {store} from "../store/store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import {Link}  from "react-router-dom";
import {CartModel} from "../models/CartModel";

function mapStateToProps(state:any):AppState{
    return {
          data:state.orderReducer.data[0],
          isFetching:state.orderReducer.isFetching,
          error:state.orderReducer.error,
		  dataFetched: state.orderReducer.dataFetched,
    };
}

type resultProps = AppState;

class ResultClass extends React.Component<resultProps,any>{
    
    getOrderSummary(){
        let noofcol=4;
        let orderData=JSON.parse(this.props.data);
        let orderSummaryCmp:any=[];
        orderData.productList.map((obj:CartModel)=>{
            orderSummaryCmp.push(
                <tr>
                    <td>{obj.name}</td>
                    <td>{obj.quantity}</td>
                    <td>$ {obj.priceper}</td>
                    <td>${obj.quantity*obj.priceper}</td>
                </tr>
            );
        });
        orderSummaryCmp.push(
                <tr>
                    <td colSpan={noofcol}>
                        <h4>Your total amount :&nbsp;$ {orderData.totalprice}</h4>
                        <p>
                            OrderId:&nbsp;#{orderData.orderId}
                            <br/>Name:&nbsp;{orderData.namefld}
                            <br/>Contact:&nbsp;{orderData.mobilefld}
                            <br/>Address:&nbsp;{orderData.addressfld}
                        </p>

                    </td>
                </tr>
            );
        return orderSummaryCmp;
    }

    getCardSucessData(){
            let orderId=JSON.parse(this.props.data).orderId;
            let cmp=<div className="container-fluid">        
                        <div className="row marginTopsuccess">
                            <div className="col-sm-1">
                                    &nbsp;
                             </div>
                             <div className="col-sm-1">
                                    <span className="ordSucess fa fa-check-circle-o fa-5x"></span>
                             </div>
                            <div className="col-sm-10">
                                <h3>Order completed succesfully!</h3>
                                <p>Thank you for purchasing with us - we appreciate that. Your order number is&nbsp;&nbsp;<b>#{orderId}</b></p>
                            </div>
                        </div>
                        
                        <div className="row">
                             <div className="col-sm-1">
                                &nbsp;
                            </div>

                            <div className="col-sm-1">
                                &nbsp;
                            </div>

                            <div className="col-sm-6">
                                <div className="panel-group">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <p className="panel-title">
                                            <a data-toggle="collapse" href="#collapse1">View full order summary</a>
                                            </p>
                                        </div>
                                        <div id="collapse1" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                    <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>ProductName</th>
                                                                    <th>Quantity</th>
                                                                    <th>PerUnit</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.getOrderSummary()}
                                                            </tbody>
                                                    </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                             <div className="col-sm-1">
                                &nbsp;
                            </div>
                            <div className="col-sm-1">
                                &nbsp;
                            </div>
                            <div className="col-sm-10">
                                <a className="btn btn-primary" href="/">Continue shopping</a>
                            </div>
                        </div>

                        <div className="row marginTopsuccess">
                                 <div className="col-sm-1">
                                     &nbsp;
                                </div>
                                <div className="col-sm-1">
                                     &nbsp;
                                </div>
                                <div className="col-sm-10">
                                        <blockquote className="blockquote">
                                            <p>That's all  !!!!!</p>
                                            <footer className="blockquote-footer">From MyShop website</footer>
                                        </blockquote>
                                </div>
                        </div>
                </div>;
                return cmp;
    }
    render(){
        let LoadingMsgArr=[
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 marginTop"></div>
                    <div className="col-sm-6 marginTop">
                        <div className="row">
                              <div className="col-sm-7 marginTop">
                                  <h4>confirming order please wait ...</h4>
                              </div>
                              <div className="col-sm-5 marginTop">
                                  <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                              </div>
                        </div>
                    </div>
                    <div className="col-sm-3 marginTop"></div>
                </div>
            </div>
		];
        let LoadingMsgErrArr=[
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-4 marginTop"></div>
                                <div className="col-sm-4 marginTop text-center">Sorry!! Error Occured while processing, go back and try again.&nbsp;&nbsp;<Link to="/cart">click here</Link></div>
                                <div className="col-sm-4 marginTop"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 marginTop"></div>
                                <div className="col-sm-4 marginTop text-center">Start fresh&nbsp;&nbsp;<a href="/">continue shoping</a></div>
                                <div className="col-sm-4 marginTop"></div>
                            </div>
                        </div>
                ];
        return(
                <div className="row marginLeft">
                        {(this.props.isFetching)? LoadingMsgArr :''}
                        {(this.props.error)? LoadingMsgErrArr :''}
                        {(!this.props.isFetching && !this.props.error && this.props.data)? this.getCardSucessData():''}		
                </div>
        );
    }
}


export const Result= withRouter(
    connect(mapStateToProps, {})(ResultClass)
);
