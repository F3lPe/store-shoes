import React, { useEffect, useState } from "react";
import "./index.css";
import { connect } from "react-redux";
import { Button,  } from "antd";
import { useDispatch } from "react-redux";
import handleAlert from "../../../alert";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"

function Cart({props}){
    const [total, setTotal] = useState('');
    const dispatch = useDispatch();

    const increment = ((product) => {
        dispatch({type: 'update-amount', id: product.id, amount: product.quantidade + 1})
    })
    const decrement = ((product) => {
        dispatch({type: 'update-amount', id: product.id, amount: product.quantidade - 1})
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
                <p>total a pagar {total}</p>
                {props.map((e) =>{

                     return(    
                       <table className="product">
                            <tr key={e.id}>                         
                                <img src={e.img} alt={'bruh'}/>                                               
                                <Button style={{width: '100px', marginBottom: '10px'}} type="default" onClick={() => {
                                removeItem(e)
                                handleAlert({type: 'success', message: 'Produto removido'});                                                       
                                }}> 
                                Remover 
                                </Button>
                            </tr> 
                            <tr style={{display: 'flex', alignItems: 'center'}}>                                
                               {/* <Button onClick={() => decrement(e)}> */}
                                    <AiOutlineMinusCircle size={20} className="icons-ai" onClick={() => decrement(e)}/>  
                                {/* </Button>  */}
                                    <p style={{margin: '0px 10px 0px 10px'}}> quantidade {e.quantidade}</p> 
                               {/*  <Button onClick={() => increment(e)}> */}
                                    <AiOutlinePlusCircle size={20} className="icons-ai" onClick={() => increment(e)}/> 
                                {/* </Button>  */}                                                       
                            </tr>
                            <tr>
                                <label>Preço total a pagar:</label>
                                <strong> {e.price}</strong>
                            </tr>
                       </table>                                          
                        
                     )      
                })}                               
            </div>
        </div>           
    )
} 

export default connect(state => ({
    props: state.Cart,
}))(Cart);