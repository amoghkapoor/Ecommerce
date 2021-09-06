import React from 'react'
import "../../styles/checkout/review.scss"

const Review = ({ checkoutToken }) => {
    return (
        <div className="review-outer-container">
            <div className="review-heading">Order Summary</div>
            <div className="review-inner-container">
                {checkoutToken.live.line_items.map((product) => {
                    return (
                        <div key={product.id} className="product-info">
                            <div className="product-info-left">
                                <div className="product-name">{product.name}</div>
                                <div className="product-quantity">Quantity: {product.quantity}</div>
                            </div>
                            <div className="product-info-right">
                                <div className="product-price">{product.line_total.formatted_with_symbol}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="cart-subtotal">
                <span>Total</span>
                {checkoutToken.live.subtotal.formatted_with_symbol}
            </div>
        </div>
    )
}

export default Review
