import React, { useState } from 'react';
import "./index.css";
import sapato2 from "../../../images/sapato2.jpg";
import sapato3 from "../../../images/sapato3.jpg";
import { Button } from 'antd';
import { connect, useDispatch } from 'react-redux';
import handleAlert from '../../../alert';

function Home({props}) {
    const dispatch = useDispatch();
    const [id, setId] = useState('')
    const findObj = props.findIndex(e => e.id === id)
    console.log(findObj)
    console.log(props)

  const handleAddProduct = (product, id) => {

        switch (id){           
            case 1:       
                setId(id);
                dispatch({
                    type: 'add-to-cart',
                    product: product,
                })
            break;
            case 2:
                setId(id);
                dispatch({
                    type: 'add-to-cart',
                    product: product,
                })
            break;
            case 3: 
                setId(id);
                dispatch({
                    type: 'add-to-cart',
                    product: product,
                })
            break;
                default:
                return [];
        }        
    }    

    return (
        <div className='list-shoes'>
            <li>
                <img src={'https://imgnike-a.akamaihd.net/160x160/01692251.jpg'} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => {handleAddProduct({id:1, price: 190.99 , img: 'https://imgnike-a.akamaihd.net/160x160/01692251.jpg'}, 1); handleAlert({type: 'success', message: 'Produto adicionado'})}}>
                    Adicionar 
                </Button>
            </li>            
            <li>
                <img src={sapato2} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() =>{ handleAddProduct({id:2, price: 90.49, img: sapato2}, 2); handleAlert({type: 'success', message: 'Produto adicionado'})}}>
                    Adicionar
                </Button>
            </li>
            <li>
                <img src={sapato3} alt={"sapato"}/>
                <Button type="text" className='ant-button' onClick={() => {handleAddProduct({id:3, price:200.99, img: sapato3}, 3); handleAlert({type: 'success', message: 'Produto Adicionado'})}}>
                    Adicionar
                </Button>
            </li>
        </div>
    )
}

export default connect(state => ({props: state.Cart}))(Home)