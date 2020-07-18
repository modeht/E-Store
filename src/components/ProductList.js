import React from 'react'
import Product from './Product';
import Title from './Title';
// import {useState, useEffect} from 'react';
import {ProductConsumer} from '../context';



export default function ProductList() {
    return (
        <div className="py-5">
            <div className="container">
                <Title title="products"></Title>
                <div className="row">
                    <div className="col-12 mx-auto d-flex justify-content-around flex-wrap"> 
                        <ProductConsumer>
                            {
                                (value) => {                                    
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}></Product>;
                                        // return <li key={product.id}>{product.title}</li>
                                    });
                                }
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </div>            
        </div>
    )
}

