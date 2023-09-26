import React, { useEffect, useState } from "react";
import "./index.css";
import { connect } from "react-redux";
import { Button,  } from "antd";
import { useDispatch } from "react-redux";
import handleAlert from "../../../alert";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"
import {MdDelete} from "react-icons/md"

function Cart({props}){
    const [total, setTotal] = useState('');
    const [produtoValorTotal, setProdutoValorTotal] = useState('');
    console.log(produtoValorTotal)
    const dispatch = useDispatch();

    const increment = ((product) => {
        dispatch({type: 'update-amount', id: product.id, amount: product.quantidade + 1})

        const valor = product.price * product.quantidade;
        setProdutoValorTotal(valor);
        /* handleAlert({}) */
    })
    const decrement = ((product) => {
        dispatch({type: 'update-amount', id: product.id, amount: product.quantidade - 1})
        const valor = product.price * (product.quantidade - 1);
        setProdutoValorTotal(valor);
    })
    const removeItem = ((product) => {
        dispatch({type:  'remove-product', id: product.id})
    })

    useEffect(() => {
        const price = props.map(e => e.quantidade * e.price)
        let priceReduce = price.reduce((acu, valor) => acu + valor, 0)
        priceReduce = priceReduce.toFixed(2)
        setTotal(priceReduce)        
    }, [props])
    
    return(
        <div className="body">
            <div className="cart">                
                {props.map((e) =>{
                    const valor = e.price * e.quantidade
                     return(    
                       <ul className="product">
                            <li key={e.id}>                         
                                <img src={e.img} alt={'bruh'}/>                            
                            </li> 
                            <li style={{display: 'flex', alignItems: 'center'}}>      
                                <AiOutlineMinusCircle size={20} className="icons-ai" onClick={() => decrement(e)}/>  
                                <p style={{margin: '0px 10px 0px 10px'}}> quantidade {e.quantidade}</p>     
                                <AiOutlinePlusCircle size={20} className="icons-ai" onClick={() => increment(e)}/>                                                    
                            </li>
                            <li>
                                <label>Preço total a pagar:</label>
                                <strong> {valor.toFixed(2)}</strong>
                            </li>
                            <li>
                                <MdDelete size={20} className="icons-ai" style={{width: '100px', marginBottom: '10px'}} type="default" onClick={() => {
                                removeItem(e);
                                handleAlert({type: 'success', message: 'Produto removido'});                                                       
                                }}/> 
                               
                            </li>
                       </ul>                                          
                        
                     )      
                })}    
                 <div className="valor-total">
                    <p>Total R$: {total}</p>
                </div>   
            </div>           
               
        </div>           
    )
} 

export default connect(state => ({
    props: state.Cart,
}))(Cart);