import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import Global from "./styles/global";
import {Provider} from "react-redux";
import "./config/Reactotron";
import store from "./store";

export default function App(){

    return(       
       <Provider store={store}>
        <BrowserRouter>          
          <Switch>          
            <Routes/>            
          </Switch>            
        </BrowserRouter>
        <Global/>
      </Provider>      
    )
}