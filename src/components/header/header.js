import React from "react";
import "./header.css";
import {FaShoppingCart} from "react-icons/fa";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';


function Header({cart}) {

    return(
        <header>
            <Link to='/'>
                <p className="pag-title">
                    REACTSHOES
                </p>
            </Link>
            <div className="carrinho">            
                <span style={{paddingRight: '40px',position: 'relative', bottom: '8px'}}>
                    {cart.length} Meu Carrinho
                </span>
                <Link to='/cart'>
                    <FaShoppingCart style={{cursor:"pointer"}} className="cart-icon"/>
                </Link>             
            </div>            
        </header>
    )
}

export default connect(state => ({
    cart: state.Cart,
}))(Header);