import React from 'react'
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {useState, useEffect} from 'react';

export default function ProductList() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(storeProducts);
    }, [products]);
    return (
        <div className="py-5">
            <div className="container">
                <Title title="products"></Title>
                <div className="row">
                    <div className="col-10 mx-auto"> 
                        <ul>                            
                            {products.map(product => {
                                return <li key={product.id}>{product.title}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    )
}

