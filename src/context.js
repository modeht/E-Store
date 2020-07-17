import React from 'react';
import {useState} from 'react';
import {detailProduct, storeProducts} from './data';
const ProductContext = React.createContext();

function ProductProvider(props) {
    let [products, setProducts] = useState(storeProducts);
    let [detailedProduct, setDetailProduct] = useState(detailProduct);

    return (
        <ProductContext.Provider value={{products,detailedProduct}}>
            {props.children};
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
