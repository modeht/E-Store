import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <h3 className="text-title">hello from app</h3> 
    </React.Fragment>
  );
}

export default App;
