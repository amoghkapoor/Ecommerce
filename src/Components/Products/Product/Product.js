import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';

import "../../../styles/products/product/product.scss"

const Product = ({ product, onAddToCart }) => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={product.assets[0].url} alt="" className="product-image" />
            </div>
            <div className="card-content-container">
                <div className="card-content">
                    <p className="product-name">{product.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: product.description }} className="product-description" />
                    <p className="product-price">{product.price.formatted_with_symbol}</p>
                </div>
                <div className="card-action">
                    <button className="add-cart" onClick={() => onAddToCart(product.id)}><AddShoppingCart /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;