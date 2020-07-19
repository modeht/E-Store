import React from 'react';
import {useState, useEffect} from 'react';
import {detailProduct, storeProducts} from './data';
const ProductContext = React.createContext();

function ProductProvider(props) {
    
    let [products, setProducts] = useState(copyArrayOfObjects(storeProducts));
    let [detailedProduct, setDetailProduct] = useState(copyArrayOfObjects(detailProduct));

    // useLayoutEffect(() => {
    //     setProducts(copyArrayOfObjects(storeProducts));
    //     setDetailProduct(copyArrayOfObjects(detailProduct));
    // }, []);    
    return (
        <ProductContext.Provider value={{products,detailedProduct}}>
            {/* <button onClick={changeStateValue()}>Test me</button> */}
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

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


// function changeStateValue(){
//     let Products = copyProducts();    
//     console.log("StoreProducts: ",storeProducts[0].inCart);
//     console.log("Copy Products: ",Products[0].inCart);
//     Products[0].inCart = true;    
//     console.log("StoreProducts: ",storeProducts[0].inCart);
//     console.log("Copy Products: ",Products[0].inCart);
// }