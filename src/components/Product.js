import React from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Product(props) {
    let {id, title, img, price, inCart} = props.product;
    return (
        <ProductConsumer>
            {
                (value) => {
                    return(
                        <ProductDiv className="col-12 mx-auto col-md-6 col-lg-3 my-3 d-flex">
                            <div className="card">
                                <div className="img-container p-2">
                                    
                                    <Link to={`/details?id=${id}`}>
                                        <img src={img} className="card-img-top" alt="..."></img>
                                    </Link>
                                    <button className="card-btn btn btn-dark" disabled={inCart ? true: false} onClick={() => value.addToCart(id)}>
                                        {inCart ? "In Cart": <i className="fa fa-cart-plus" aria-hidden="true"></i>}
                                    </button>


                                    <div className="card-footer d-flex justify-content-between px-1 small">
                                        <p className="align-self-center mb-0">
                                            {title}
                                        </p>
                                        <h5 className="text-blue mb-0">
                                            <span className="mx-1">$</span>
                                            {price}
                                        </h5>
                                    </div>


                                </div>
                            </div>
                        </ProductDiv>                    
                    )
                }
            }
        </ProductConsumer>
        )
}


const ProductDiv = styled.div`
    .card-footer{
        background: transparent;
        margin-top:2px;
        border: transparent;
    }
    &:hover{
        .card{
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
            transition: box-shadow 200ms ease-in-out;
        }
    }
`