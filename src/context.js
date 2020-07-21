import React from 'react';
import {useState} from 'react';
import {storeProducts} from './data';
const ProductContext = React.createContext();

function ProductProvider(props) {
    
    let [products, setProducts] = useState(copyArrayOfObjects(storeProducts));
    let [cart, setCart] = useState([]);
    
    
    let addToCart = id => {
        //update items in state
        let productsCopy = copyArrayOfObjects(products);
        productsCopy.map(prod => {
            prod.id == id ? prod.inCart = true: prod.inCart = prod.inCart ;
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
    let more = (id) => {
        let copyOfProductsInCart = copyArrayOfObjects(cart);
        copyOfProductsInCart.map(item => {
            let price = item.price;
            if (item.id == id){
                item.count++;
                item.total = price * item.count;                
            }
        });        
        setCart(copyOfProductsInCart);
    }
    let less = (id) => {
        let newCart = [...cart];
        let newproducts = [...products];
        let _index;
        let item = cart.find((item, index)=> {
            _index = index;
            return item.id == id;
        });
        if(item.count >= 1){
            item.count--;            
            item.total = item.price * item.count;
            if(item.count == 0){
                item.inCart = false;
                newproducts.map(prod => prod.id == id ? prod.inCart = false: prod)
                newCart.splice(_index,1);
            }
        }        
        setCart(newCart);                
    }
    return (        
        <ProductContext.Provider value={{products,addToCart,cart,more,less}}>            
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
