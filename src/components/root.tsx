import * as React from "react";
import { Title } from "./Title";
import {NavBar} from "./NavBar";
import {Carousel} from "./Carousel";
import {Footer} from "./Footer"
import {getComponentToBeMounted} from "../util/util";

export const Root = (props:any) =>{
        let componentToMount:any=getComponentToBeMounted(props);
        return(
                <div>
                        <Title/>
                        <div className="container-fluid">
                                <div className="row marginTopmain">
                                    <NavBar/>
                                    <div className="col-sm-10">
                                        {componentToMount}
                                        <Footer/>
                                    </div>
                                    
                                </div>
                        </div>
                </div>
            );
}