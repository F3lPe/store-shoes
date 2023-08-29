import React from "react";
import Cart from "../pages/carrinho";
import { Button } from "antd";
import "./header.css"
import {FaShoppingCart} from "react-icons/fa"
import { connect } from "react-redux";

function Header({cartSize}) {
    console.log(cartSize.length)
    return(
        <header>
            <a href="/">
                <p className="pag-title">
                    REACTSHOES
                </p>
            </a>
            <div className="carrinho">            
                <span style={{paddingRight: '40px',position: 'relative', bottom: '8px'}}>
                    {cartSize?.length} Meu Carrinho
                </span>
                <a href="/cart">
                    <FaShoppingCart style={{cursor:"pointer"}} className="cart-icon"/>
                </a>
            </div>            
        </header>
    )
}

export default connect(state => ({
    cartSize: state.Cart,
}))(Header);