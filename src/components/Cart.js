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
                            <CartDiv>
                                <div className='cart-container' key={id}>
                                    <img src={img} className="img-cart"alt="..."></img>
                                    <span className="h6">Brand: {title}</span>
                                    <span className="h6">Count: {count}</span>
                                    <button className="btn btn-info" onClick={() => value.more(id)}>Add</button>
                                    <button className="btn btn-danger text-capitalize" onClick={() => value.less(id)}>{count > 1 ? 'minus' : 'remove item from cart'}</button>
                                    <span className="h6">Price: {total}</span>
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