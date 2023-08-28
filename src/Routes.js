import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './components/pages/carrinho/index';
import Home from './components/pages/home/index';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
    )
}
