import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Cart from "./components/pages/carrinho";
import Home from "./components/pages/home/index";
export default function App(){

    return(
       <BrowserRouter>
            <Routes/>
       </BrowserRouter>
    )
}