import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchProductList} from "../Actions/productActions"; 
import {store} from "../store/store";
import {Action} from "../models/action";
import {AppState} from "../models/appState";
import {CardComp} from "./CardComp";
import {cardProps} from "../models/card";


interface DispatchProps {
  fetchProductList(): Action<Promise<any>>;
}

function mapStateToProps(state:any):AppState{
    return {
          data:state.productList.data[0],
          isFetching:state.productList.isFetching,
          error:state.productList.error,
		  dataFetched: state.productList.dataFetched,
    };
}

function mapDispatchToProps(dispatch:any):DispatchProps{
  return bindActionCreators({fetchProductList},dispatch)
}

type bodyProps = AppState & DispatchProps;

class BodyCmpClass extends React.Component<bodyProps,any>{

    componentDidMount() {
        if(!this.props.data){
			store.dispatch(fetchProductList());
		}
     }
	 
	 getCardSucessData(){
		let cardData:cardProps;
		let cardRowsData=[];
		const cmp=<div className="col-sm-3 marginTop">
						  <h3>Shopping cart app</h3>
							<div>
							 	Shopping cart app made using React-Typescript
								  Every chunk of project has been distributed unded below 6 cateogry(Commonly seen approach).
								 <ul>
								 	<li>Action</li>
									<li>Components</li>
									<li>Models</li>
									<li>Reducer</li>
									<li>Store</li>
									<li>Util</li>
								 </ul>
							</div>					
				</div>;
		cardRowsData.push(cmp);
		cardRowsData.push(this.props.data.map((obj:any)=>{
							cardData={
								image:obj.image,
								name:obj.name,
								shortDesc:obj.shortdescription,
								btntext:"Details",
								price:obj.price,
								id:obj.id,
							};
							return (<CardComp cardData={cardData}/>);
					}
				  )
			);
		return cardRowsData;
	 }
	 
    render(){
		let LoadingMsgArr=[
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
		];
        let LoadingMsgErrArr=[<div className="col-sm-4 marginTop"></div>,<div className="col-sm-4 marginTop text-center">Sorry!! Error Occured please try again.<a href="#" onClick={this.props.fetchProductList}>click here</a></div>,<div className="col-sm-4 marginTop"></div>];
		return(

            <div className="row">
				{(this.props.isFetching)? LoadingMsgArr :''}
				{(this.props.error)? LoadingMsgErrArr :''}
				{(!this.props.isFetching && !this.props.error && this.props.data)? this.getCardSucessData():''}		
		   </div>    
        )
    }
}

export const BodyCmp= connect(mapStateToProps, mapDispatchToProps)(BodyCmpClass);