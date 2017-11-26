import * as React from "react";
import { withRouter } from 'react-router-dom';
import {Link}  from "react-router-dom";

export const CardComponent = (props:any) =>{
        return(
                <div className="col-sm-3 marginTop">
                        <div className="card cardWidth text-center">
                            <img className="card-img-top marginTop cardWidthImage" src={props.cardData.image} alt="Card image"/>
                            <div className="card-body">
                                <h4 className="card-title">{props.cardData.name}: ${props.cardData.price}</h4>
                                <p className="card-text">{props.cardData.shortDesc}</p>
                                <Link className="btn btn-primary" to={"/detail/"+props.cardData.id}>{props.cardData.btntext}&nbsp;&nbsp;<span className="fa fa-arrow-right"></span></Link>

                            </div>
                        </div>
                </div>
            );
}
export const CardComp=withRouter(CardComponent);
