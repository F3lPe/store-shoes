import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Global from "./styles/global";
import Header from "./components/header/header";
import {Provider} from "react-redux"
import "./config/Reactotron"
import store from "./store";

export default function App(){

    return(       
       <Provider store={store}>
        {/* <BrowserRouter> */}
          <Header/>
          <Routes/>
          <Global/>
        {/* </BrowserRouter> */}
      </Provider>      
    )
}