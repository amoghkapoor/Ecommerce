import React from 'react'
import "../../../styles/cart/cartItem/cartItem.scss"

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQuantity }) => {
    return (
        <div className="cart-item">

            <img src={item.media.source} alt="" className="cart-item-image" />

            <div className="cart-content">

                <div className="cart-item-left">

                    <div className="cart-item-name">
                        {item.name}
                    </div>
                    <div className="cart-item-buttons">
                        <button className="cart-item-button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>&minus;</button>
                        <div className="cart-item-quantity">{item.quantity}</div>
                        <button className="cart-item-button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                </div>

                <div className="cart-item-right">
                    <div className="cart-item-price">
                        {item.line_total.formatted_with_symbol}
                    </div>

                    <button className="cart-item-delete" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem

