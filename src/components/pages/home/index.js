import React, {useState} from 'react';
import "./index.css";
import sapato2 from "../../../images/sapato2.jpg";
import sapato3 from "../../../images/sapato3.jpg";
import { Button } from 'antd';
import { connect, useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const [values, setValues] = useState([])
    console.log("values:" ,values)
    
    
    const handleAddProduct = product => {
        /* setValues([...values, product]) */
        switch (product){
            case product:
                dispatch({
                    type: 'add-to-cart',
                    product: product
                })
            break;
            case 2:
                dispatch({
                    type: 'add-to-cart',
                    product: product
                })
            break;
            case 3: 
                dispatch({
                    type: 'add-to-cart',
                    product: product
                })
            break;
                default:
                return [];
        }        
    }

    return (
        <div className='list-shoes'>
            <li>
                <img src={sapato3} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => handleAddProduct({id:1, price: 190.99})}>
                    Adicionar 
                </Button>
            </li>            
            <li>
                <img src={sapato2} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => handleAddProduct({id:2, price: 90.49})}>
                    Adicionar
                </Button>
            </li>
            <li>
                <img src={sapato3} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => handleAddProduct({id:3, price:200.90})}>
                    Adicionar
                </Button>
            </li>
        </div>
    )
}

export default connect()(Home)