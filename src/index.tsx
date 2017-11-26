import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider} from "react-redux";
import {store} from "./store/store";
import {Root} from "./components/root";
import {Result} from "./components/Result";
import {BodyCmp} from "./components/BodyCmp";
import {ProductDetails} from "./components/ProductDetails";
import {Cart} from "./components/Cart";
import {Payment} from "./components/Payment";
import {AboutCmp} from "./components/AboutCmp";
import {FAQCmp} from "./components/FAQCmp";
import {BrowserRouter,Switch,Router,Route}  from "react-router-dom";

class App extends React.Component<any,any>{
    render(){
        return(
                  <BrowserRouter> 
                        <Switch>
                           <Route path="/result" component={Result}/>
                           <Root>
                                <switch>
                                    <Route exact path="/" component={BodyCmp}/>
                                    <Route path="/detail/:id" component={ProductDetails}/>
                                    <Route path="/cart" component={Cart}/>
                                    <Route path="/payment" component={Payment}/>
                                    <Route path="/about" component={AboutCmp}/>
                                     <Route path="/faq" component={FAQCmp}/>
                                </switch>
                           </Root>
                        </Switch>
                  </BrowserRouter>	    
        )
    }
}

ReactDOM.render(
    <Provider store={store}>		
            <App/>
    </Provider>
    ,document.getElementById("app")
);