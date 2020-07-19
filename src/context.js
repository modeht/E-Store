import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react';
import {storeProducts} from './data';
const ProductContext = React.createContext();

function ProductProvider(props) {
    
    let [products, setProducts] = useState(copyArrayOfObjects(storeProducts));
    let [cart, setCart] = useState([]);
    
    
    let addToCart = id => {
        //update items in state
        let productsCopy = copyArrayOfObjects(products);
        productsCopy.map(prod => {
            prod.id == id ? prod.inCart = true: prod.inCart= prod.inCart ;
        });
        setProducts(productsCopy);
        //add to cart
        let index = productsCopy.findIndex(prod => prod.id == id);
        let productAddedToCart = productsCopy[index];
        productAddedToCart.count = 1;
        productAddedToCart.total = productAddedToCart.price * productAddedToCart.count;
        let cartCopy = copyArrayOfObjects(cart);
        cartCopy.push(productAddedToCart);
        setCart(cartCopy);
    }
    return (        
        <ProductContext.Provider value={{products,addToCart}}>            
            {props.children}
        </ProductContext.Provider>
    )
}


function copyArrayOfObjects(arr_objects){
    let tempObject = {};
    let newArrayOfObjects = [];
    arr_objects.map(
        obj => {
            tempObject = {...obj};
            newArrayOfObjects.push(tempObject);
            return true
        }
    )
    return newArrayOfObjects;
}



const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
