import React, { useEffect, useState } from "react";
import "./index.css"
import { connect } from "react-redux";

function Cart({props}){
    const [total, setTotal] = useState('');
    useEffect(() => {
        const price = props.map(e => e.price)
        let priceReduce = price.reduce((acu, valor) => acu + valor, 0)
        priceReduce = priceReduce.toFixed(2)
        setTotal(priceReduce)        
    }, [props])
    

const productsGroup = ((id) => {
   const group = {};
   console.log(group)
   props.forEach(e => {
        if(!group[e.id]){
            group[e.id] = {...e, quantity: 1};
        }else{
            group[e.id].quantity ++;
        } 
});
   return Object.values(group)   
})

    return(
        <div className="body">
            <div className="cart">
            <p>total a pagar {total}</p>
                {productsGroup().map(e =>(
                    <>
                     {
                        <li className="product">                         
                            <img src={e.img} alt={'bruh'}/>
                            <strong>{e.price}</strong>
                            <p> quantidade {e.quantity}</p>
                            <button onClick={() => productsGroup(e.id)}>
                            </button>
                        </li> 
                    }                       
                    </>
                ))}
                                
            </div>
        </div>
            
    )
} 
const mapDispatchToProps = dispatch => ({
    decreaseItemQuantity: itemId => dispatch((itemId))
});

export default connect(state => ({
    props: state.Cart
}))(Cart);