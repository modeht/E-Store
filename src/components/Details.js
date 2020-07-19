import React from 'react'
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import styled from 'styled-components';

export default function Details(props) {
    console.log(props)
    return (        
        <ProductConsumer>
            {
                (value) => {
                    
                    const {id, company, img, info, price, title, inCart } = value.detailedProduct[0];                                                              
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                    <h1>{title}</h1>
                                </div>                                
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 text-capitalize">
                                    <img src={img} className="img-fluid" alt="..."></img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 text-capitalize">
                                    <div className="h3">Model: {title}</div>
                                    <div className="h3">Made By: {company}</div>
                                    <div className="h3">Price: {price}</div>
                                    <p>{info}</p>
                                    <Link to='/'>
                                        <button className="btn btn-primary text-capitalize mx-1">back to products</button>
                                    </Link>
                                    <button className="btn btn-secondary text-capitalize mx-1">{inCart ? "in cart": 'add to cart'}</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </ProductConsumer>
    )
}
