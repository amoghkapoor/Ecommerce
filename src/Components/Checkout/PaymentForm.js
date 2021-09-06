import React from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'
import "../../styles/checkout/paymentForm.scss"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({ shippingData, checkoutToken, nextStep, backStep, onCaptureCheckout, timeout }) => {
    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault()

        if (!stripe || !elements) return

        const cardElement = elements.getElement(CardElement)

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })

        if (error) {
            console.log(error)
        }
        else {
            const orderData = {
                line_item: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email,
                },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip: shippingData.zip,
                    country: shippingData.shippingCountry,
                },
                fulfillment: {
                    shipping_method: shippingData.shippingOption
                },
                payment: {
                    gateway: 'test_gateway',
                    card: {
                        number: '4242424242424242',
                        expiry_month: '02',
                        expiry_year: '24',
                        cvc: '123',
                        postal_zip_code: '94107',
                    },
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }

            onCaptureCheckout(checkoutToken.id, orderData)
            timeout()
            nextStep()
        }
    }
    return (
        <div>
            <Review checkoutToken={checkoutToken} />
            <div className="payment">
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({ elements, stripe }) => {
                            return (
                                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                                    <CardElement />
                                    <br /> <br />
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <button className="btn-prev" onClick={() => backStep()}>Back</button>
                                        <button disabled={!stripe} className="btn-payment">Pay {checkoutToken.live.subtotal.formatted_with_symbol}</button>
                                    </div>
                                </form>
                            )
                        }}
                    </ElementsConsumer>
                </Elements>
            </div>
        </div>
    )
}

export default PaymentForm

/*


*/