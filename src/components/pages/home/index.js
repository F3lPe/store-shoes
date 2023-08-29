import React from 'react';
import "./index.css"
import sapato2 from "../../../images/sapato2.jpg"
import sapato3 from "../../../images/sapato3.jpg"
import { Button } from 'antd';
import { connect, useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const handleAddProduct = product => {

        switch (product){
            case 1:
                dispatch({
                    type: 'add-to-cart',
                    product
                })
            break;
            case 2:
                dispatch({
                    type: 'add-to-cart',
                    product
                })
            break;
            case 3: 
                dispatch({
                    type: 'add-to-cart',
                    product
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
                <Button type="text" className='ant-button' onClick={() => handleAddProduct(1)}>
                    Adicionar 
                </Button>
            </li>            
            <li>
                <img src={sapato2} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => handleAddProduct(2)}>
                    Adicionar
                </Button>
            </li>
            <li>
                <img src={sapato3} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => handleAddProduct(3)}>
                    Adicionar
                </Button>
            </li>
        </div>
    )
}

export default connect()(Home)