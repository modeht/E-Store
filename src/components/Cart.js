import React from 'react'
import {ProductConsumer} from '../context';
import styled from 'styled-components';
export default function Cart() {
    return (
        <ProductConsumer>
            {
                value => {                                    
                    return value.cart.map(item => {
                        const {id, img, title, count, price, total} = item; 
                        return (
                            <CartDiv key={id}>
                                <div className='cart-container'>
                                    <img src={img} className="img-cart cart-item"alt="..."></img>
                                    <span className="h6 cart-item">Brand: {title}</span>
                                    <span className="h6 cart-item">Count: {count}</span>
                                    <button className="btn btn-info cart-item" onClick={() => value.more(id)}>+</button>
                                    <button className="btn btn-danger text-capitalize cart-item" onClick={() => value.less(id)}>{count > 1 ? '-' : 'remove'}</button>
                                    <span className="h6 cart-item">Price: {total}</span>
                                </div>
                            </CartDiv>
                        )
                    })
                }
            }
        </ProductConsumer>
    )
}

const CartDiv = styled.div`
    margin: 20px auto;
    width: 100%;
    justify-content: center;
`