import React, { useEffect, useState } from "react";
import "./index.css"
import { connect } from "react-redux";
import { Button, Alert } from "antd";
import { useDispatch } from "react-redux";
import {Notify} from 'notiflix'
import handleAlert from '../../../alert'

function Cart({props}){
    const [total, setTotal] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const price = props.map(e => e.quantidade * e.price)
        console.log(price)
        let priceReduce = price.reduce((acu, valor) => acu + valor, 0)
        priceReduce = priceReduce.toFixed(2)
        setTotal(priceReduce)        
    }, [props])

    const alerta = () => (
        Notify.success('testando notify')
    )

    
    return(
        <div className="body">
            <div className="cart">
            <p>total a pagar {total}</p>
                {props.map(e =>{                    
                     return(
                        <li key={e.id} className="product">                         
                            <img src={e.img} alt={'bruh'}/>
                            <strong>{e.price}</strong>
                            <p> quantidade {e.quantidade}</p>                            
                            <Button style={{width: '100px'}} type="default" onClick={() => {
                            dispatch({type: 'remove-product', idProduct: props.id});
                                                       
                            }}> Remover 
                            </Button>
                        </li> 
                     )      
                })}                               
            </div>
        </div>           
    )
} 

export default connect(state => ({
    props: state.Cart
}))(Cart);