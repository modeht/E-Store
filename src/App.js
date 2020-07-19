import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Product from './components/Product';

function App() {
  return (
    <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={ProductList}></Route>  
          <Route path="/product" component={Product}></Route>  
          <Route path="/details" component={Details}></Route>  
          <Route path="/cart" component={Cart}></Route>  
          <Route component={Default}></Route>  
        </Switch>
    </React.Fragment>
  )
}

export default App;
