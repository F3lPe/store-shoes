import React from 'react';
import {BrowserRouter ,Switch, Route } from 'react-router-dom';
import Cart from './components/pages/carrinho/index';
import Home from './components/pages/home/index';
import Header from './components/header/header';

export default function Routes(){
    return (
            <>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/cart" component={Cart}/>
            </>
    )
}
