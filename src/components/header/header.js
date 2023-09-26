import React, {useEffect, useState} from "react";
import "./header.css";
import {FaShoppingCart} from "react-icons/fa";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';


function Header({cart}) {
    const [qtdProduct, setQtdProduct] = useState('');

    useEffect(() => {
            const mapQtd = cart.map(e => e.quantidade)
            const qtdReduce = mapQtd.reduce((acu, valor) => acu + valor,0)
            setQtdProduct(qtdReduce)
    },[cart])

    return(
        <header>
            <Link to='/'>
                <p className="pag-title">
                    REACTSHOES
                </p>
            </Link>
            <div className="carrinho">            
                <span style={{paddingRight: '40px',position: 'relative', bottom: '8px'}}>
                {qtdProduct} Carrinho
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