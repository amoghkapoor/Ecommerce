import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, CircularProgress } from "@material-ui/core"
import PaymentForm from "./PaymentForm"
import AddressForm from "./AddressForm"
import "../../styles/checkout/checkout.scss"
import { commerce } from "../../lib/commerce"
import { Link } from "react-router-dom"

const steps = ["Shipping Address", "Payment Details"]

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [checkoutToken, setCheckoutToken] = useState("")
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const [finished, setFinished] = useState(false)

    const nextStep = () => setActiveStep(a => (a + 1))
    const backStep = () => setActiveStep(a => (a - 1))

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const timeout = () => {
        setTimeout(() => {
            setFinished(true)
        }, 3000)
    }

    useEffect(() => {
        const generateCheckoutTokenId = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: "cart" })
                setCheckoutToken(token)
            }
            catch (error) {
                window.history.pushState({}, '', "/")
            }
        }
        generateCheckoutTokenId()
    }, [cart])

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm
            shippingData={shippingData}
            checkoutToken={checkoutToken}
            nextStep={nextStep}
            backStep={backStep}
            onCaptureCheckout={onCaptureCheckout}
            timeout={timeout}
        />

    let Confirmation = () => order.customer ?
        (
            <div className="confirmation-container">
                <div className="confirmation">
                    Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}
                </div>
                <div className="order-reference">Order Reference: {order.customer_reference}</div>
                <Link to="/">
                    <button className="btn-prev">Back to Home</button>
                </Link>
            </div>
        ) :
        finished ? (
            <div className="confirmation-container">
                <div className="confirmation">
                    Thank you for your purchase.
                </div>
                <Link to="/">
                    <button className="btn-prev">Back to Home</button>
                </Link>
            </div>
        ) :
            (
                <div className="center">
                    <CircularProgress />
                </div >
            )

    if (error) {
        <>
            {error}
        </>
    }


    return (
        <>
            {checkoutToken ?
                <div className="checkout-outer-container">
                    <div className="heading">Checkout</div>
                    <div className="checkout-inner-container">
                        <div className="checkout-progress">
                            <Stepper activeStep={activeStep}>
                                {steps.map(step => (
                                    <Step key={step}>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                    </div>
                </div>
                :
                <div style={{
                    width: '100%',
                    height: '90vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'scale(2)',
                }}>
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default Checkout
