import {BodyCmp} from "../components/BodyCmp";
import {Carousel} from "../components/Carousel";
import * as React from "react";

export function getComponentToBeMounted(props:any):any{
        let cmp:any;
        let pathName=props.location.pathname.toLocaleLowerCase();

        if(/detail\/\d/.test(pathName)){
            pathName=pathName.match(/detail/)[0];
        }

        switch(pathName){
            case "/":
                cmp=<div>
                        <Carousel/>
                        <BodyCmp/>
                    </div>
                break;
            case "detail":
            case "/cart":
            case "/payment":
            case "/result":
            case "/about":
            case "/faq":
                cmp=props.children;
                break;
            default:
                console.log('Left to be impleneted');
        }
        return (cmp);
}