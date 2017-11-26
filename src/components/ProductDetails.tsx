import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchProductDetails,flushProductDetails} from "../Actions/productActions";
import {addItemToCart,itemAddedLightBox} from "../Actions/cartActions"
import {store} from "../store/store";
import {Action} from "../models/action";
import {AppState} from "../models/appState";
import {CartModel} from "../models/CartModel";
import { withRouter } from 'react-router-dom';
import {Link}  from "react-router-dom";

interface DispatchProps {
  fetchProductDetails(id:number): Action<Promise<any>>;
  addItemToCart(cartobj:CartModel):Action<CartModel>;
  flushProductDetails():Action<string>;
  itemAddedLightBox():Action<{}>;
}

interface productDetailsAppState extends AppState{
       history:any;
       productId:number; 
}

function mapStateToProps(state:any,ownProps:any):productDetailsAppState{
    return {
          data:state.productDetails.data[0],
          isFetching:state.productDetails.isFetching,
          error:state.productDetails.error,
	  dataFetched: state.productDetails.dataFetched,
          history:ownProps.history,
          productId:ownProps.match.params.id,
    };
}

function mapDispatchToProps(dispatch:any):DispatchProps{
  return bindActionCreators({fetchProductDetails,addItemToCart,flushProductDetails,itemAddedLightBox},dispatch)
}

type productDeatilProps = productDetailsAppState & DispatchProps;

class ProductDetailsClass extends React.Component<productDeatilProps,any>{

        componentDidMount() {
                window.scrollTo(0, 0);
                store.dispatch(fetchProductDetails(this.props.productId));

        }

        componentWillUnmount(){
                this.props.flushProductDetails();
        }
        
        addItemObjToCart(){
               let cartobj={
                        name:this.props.data.name,
                        image:this.props.data.image,
                        id:this.props.productId,
                        priceper:this.props.data.price,
                        quantity:1,
                        totalPrice:this.props.data.price*1,
                };                
                new Promise( (resolve,reject)=>resolve(this.props.addItemToCart(cartobj)) )
                .then(()=>{
                                jQuery('#myModal').modal('show');
                                this.props.itemAddedLightBox(); 
                  });          
        }

        buyNow(){
                let cartobj={
                        name:this.props.data.name,
                        image:this.props.data.image,
                        id:this.props.productId,
                        priceper:this.props.data.price,
                        quantity:1,
                        totalPrice:this.props.data.price*1,
                };
                new Promise( (resolve,reject)=>resolve(this.props.addItemToCart(cartobj)) )
                .then(()=>{
                                this.props.history.push("/cart");
                 });  

        }
        
        getProductSucessData(){
                let productSucessData=[];
                const cmp=<div>
                                <div className="row">
                                        <div className="col-sm-12">
                                            <div className="alert alert-info">
                                                    <strong>Info!</strong>&nbsp;&nbsp; Below are the details you are looking for.
                                            </div>
                                            
                                        </div>
                                </div>
                                <div className="row">
                                            <div className="col-sm-4">
                                                <img className="card-img-top cardWidthImage" src="/noMobile.png" alt="Card image"/>
                                            </div>
                                            <div className="col-sm-8">
                                                    <h3>{this.props.data.name}</h3>
                                                    <p>{this.props.data.description}</p>
                                                    
                                            </div>
                                </div>
                                <div className="row marginTopmain">
                                    <div className="col-sm-7">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                  
                                                    <span className="heading">User Rating</span>
                                                        {Array(this.props.data.totalstar).fill(1).map(()=><span className="fa big fa-star checked"></span>) }
                                                        {Array(5-this.props.data.totalstar).fill(1).map(()=><span className="fa big fa-star"></span>)}
                                                    <p>{this.props.data.avgRating} average based on {this.props.data.totalReview} reviews.</p>
                                                    <hr className="hrstyle"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                    5 star
                                            </div>
                                            <div className="col-sm-9">
                                                    <div className="progress">
                                                            <div className={"progress-bar bg-success progressBar"+this.props.data.star5}></div>
                                                    </div>
                                            </div>
                                            <div className="col-sm-1">
                                                   {this.props.data.totalstar5}
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-sm-2">
                                                    4 star
                                            </div>
                                            <div className="col-sm-9">
                                                    <div className="progress">
                                                            <div className={"progress-bar bg-primary progressBar"+this.props.data.star4}></div>
                                                    </div>
                                            </div>
                                            <div className="col-sm-1">
                                                    {this.props.data.totalstar4}
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-sm-2">
                                                    3 star
                                            </div>
                                            <div className="col-sm-9">
                                                    <div className="progress">
                                                            <div className={"progress-bar bg-info progressBar"+this.props.data.star3}></div>
                                                    </div>
                                            </div>
                                            <div className="col-sm-1">
                                                    {this.props.data.totalstar3}
                                            </div>
                                        </div>
        
        
                                        <div className="row">
                                            <div className="col-sm-2">
                                                    2 star
                                            </div>
                                            <div className="col-sm-9">
                                                    <div className="progress">
                                                            <div className={"progress-bar bg-warning progressBar"+this.props.data.star2}></div>
                                                    </div>
                                            </div>
                                            <div className="col-sm-1">
                                                     {this.props.data.totalstar2}
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-sm-2">
                                                    1 star
                                            </div>
                                            <div className="col-sm-9">
                                                    <div className="progress">
                                                            <div className={"progress-bar bg-danger progressBar"+this.props.data.star1}></div>
                                                    </div>
                                            </div>
                                            <div className="col-sm-1">
                                                     {this.props.data.totalstar1}
                                            </div>
                                        </div>
        
                                    </div>
        
                                    <div className="col-sm-5 marginTopmain">
                                        <p>
                                             <strong><label>Price(1 pcs)&nbsp;:</label>&nbsp;&nbsp;$ {this.props.data.price}</strong>
                                        </p>
        
                                        <p>
                                               <strong><label>Quantity&nbsp;:</label>&nbsp;&nbsp;1&nbsp;&nbsp;</strong>
                                        </p>
        
                                        <p>
                                                    <button type="button" className="btn btn-primary col-sm-12" onClick={()=>this.addItemObjToCart()}><span className="fa fa-plus"></span>&nbsp;&nbsp;Add to cart</button>
                                        </p>
                                        <p>
                                                   
                                                    <Link className="btn btn-primary col-sm-12" to={"/"}><span className="fa fa-arrow-left"></span>&nbsp;&nbsp;Go back and continue shopping</Link>
                                                   
                                        </p>
        
                                        <p>
                                                    <button type="button" className="btn btn-success col-sm-12" onClick={()=>this.buyNow()}><span className="fa fa-cart-arrow-down"></span>&nbsp;&nbsp;Buy now and move to cart</button>
                                        </p>
        
                                    </div>
                                </div>
                        </div>;
                        productSucessData.push(cmp);
                        productSucessData.push(
                                <div className="modal fade" id="myModal" data-backdrop="static" data-keyboard="false">
                                        <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                        <div className="modal-header">
                                                                <h5>Add to cart action !</h5>
                                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                                <p>
                                                                        The corresponding item has been added to cart, You can manage your items in view cart sections.
                                                                        <br/>Note: Item will only be added if its not added in cart.
                                                                </p>
                                                                <footer className="blockquote-footer">From MyShop website</footer>        
                                                        </div>
                                                        <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary" onClick={()=>this.props.history.push('/')} data-dismiss="modal">Ok, got it</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        )
                        return productSucessData;
        }
        
        render(){
        console.log(this.props);
        let LoadingMsgArr=[
                <div className="row">
                    <div className="col-sm-3 marginTop"></div>,
                    <div className="col-sm-6 marginTop">
                        <div className="row">
                              <div className="col-sm-7 marginTop">
                                  <h4>Loading data please wait ...</h4>
                              </div>
                              <div className="col-sm-5 marginTop">
                                  <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                              </div>
                        </div>
                    </div>,
                    <div className="col-sm-3 marginTop"></div>
                </div>
		];
        let LoadingMsgErrArr=[<div className="row"><div className="col-sm-4 marginTop"></div>,<div className="col-sm-4 marginTop text-center">Sorry!! Error Occured please try again.<a href="#" onClick={(e,productId:number=this.props.productId)=>this.props.fetchProductDetails(productId)}>click here</a></div>,<div className="col-sm-4 marginTop"></div></div>];
                return(
                    <div>
                        {(this.props.isFetching)? LoadingMsgArr :''}
                        {(this.props.error)? LoadingMsgErrArr :''}
                        {(!this.props.isFetching && !this.props.error && this.props.data)? this.getProductSucessData():''}
                    </div>
                );
        }
}

export const ProductDetails=withRouter(
        connect(mapStateToProps, mapDispatchToProps)(ProductDetailsClass)
        );

