import React, { useEffect, useState } from "react";
import "./index.css"
import { connect } from "react-redux";
import { Button } from "antd";
import { useDispatch } from "react-redux";

function Cart({props}){
    const [total, setTotal] = useState('');
    const dispatch = useDispatch();
    const id = props.map(e => e.id)
    useEffect(() => {
        const price = props.map(e => e.quantidade * e.price)
        console.log(price)
        let priceReduce = price.reduce((acu, valor) => acu + valor, 0)
        priceReduce = priceReduce.toFixed(2)
        setTotal(priceReduce)        
    }, [props])
    
    return(
        <div className="body">
            <div className="cart">
            <p>total a pagar {total}</p>
                {props.map(e =>(
                    <>
                     {
                        <li className="product">                         
                            <img src={e.img} alt={'bruh'}/>
                            <strong>{e.price}</strong>
                            <p> quantidade {e.quantidade}</p>
                            
                        </li> 
                    }                       
                    </>
                ))}
                <Button type="default" onClick={() => dispatch({type: 'remove-product', id: id})}> Adicionar</Button>
                                
            </div>
        </div>
            
    )
} 

export default connect(state => ({
    props: state.Cart
}))(Cart);