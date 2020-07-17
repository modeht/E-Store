import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../logo.png';
import styled from 'styled-components';

export default function Navbar() {
    return (
        <Nav className="nav navbar-expand-sm px-sm-5">             
            <Link to="/" className="navbar-brand">
                <Brand>E-Store</Brand>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-2"><Link className="nav-link" to="/">Products</Link></li>
            </ul>
            <Link to="/cart" className="cart-link">
                <CartButton className="btn btn-light"><i className="fa fa-cart-plus mr-2" aria-hidden="true"></i>my cart</CartButton>
            </Link>
        </Nav>
    );
}

const CartButton = styled.button`
    text-transform: capitalize;
    &:hover,:focus{
        border: 1px solid var(--lightBlue);
        background-color: var(--lightBlue);
    };    
`;
const Brand = styled.div`
    margin:5px 0;
    color: var(--mainYellow);
`;
const Nav = styled.nav`
    background-color: var(--mainBlue);
`;
