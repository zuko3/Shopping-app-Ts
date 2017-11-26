import * as React from "react";
import {mycartList} from "../models/CartModel";
import { connect } from "react-redux";
import {store} from "../store/store";
import {Link}  from "react-router-dom";

interface cartState{
    data:mycartList
}

function mapStateToProps(state:any):cartState{
    return {
          data:state.cartReducer
    };
}

type TitleProps = cartState;

class TitleClass extends React.Component<TitleProps,any>{
    render(){
        return(
                <nav className="navbar navbar-expand-sm bg-light">
                         <Link className="navbar-brand" to={"/"}>MyShopApp</Link>
                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to={"/cart"}>ViewCart &nbsp;<span className="badge badge-primary">{Object.keys(this.props.data).length}</span></Link>
                            </li>
                        </ul>
                        
                        <form className="form-inline marginLeft">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search in portal"/>
                            &nbsp;&nbsp;
                                <button type="submit" disabled={true} className="btn btn-primary">Search</button>
                          </div>
                         
                        </form>
                </nav>
            );
    }
}

export const Title= connect(mapStateToProps, {})(TitleClass);

