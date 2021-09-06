import React from 'react'
import CartItem from "./CartItem/CartItem.js"
import { Skeleton } from "@material-ui/lab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import "../../styles/cart/cart.scss"

const Cart = ({ cart, handleRemoveFromCart, handleEmptyCart, handleUpdateCartQuantity }) => {
    const items = cart.line_items

    const LoadingItem = () => (
        <>
            <Skeleton variant="text" />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={210} height={118} />
        </>
    )

    const LoadingScreen = () => (
        <div>
            <LoadingItem />
        </div>
    )

    const EmptyCart = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="448"
                height="373.9855"
                data-name="Layer 1"
                viewBox="0 0 896 747.971"
                className="empty-cart-svg"
            >
                <path
                    fill="#2f2e41"
                    d="M193.634 788.752c12.428 23.05 38.806 32.944 38.806 32.944s6.227-27.476-6.201-50.525-38.806-32.943-38.806-32.943-6.227 27.475 6.201 50.524z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#6c63ff"
                    d="M202.177 781.17c22.438 13.499 31.08 40.313 31.08 40.313s-27.738 4.927-50.177-8.573S152 772.596 152 772.596s27.738-4.926 50.177 8.573z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path fill="#f2f2f2" d="M413.248 35.908H553.248V37.908H413.248z"></path>
                <path fill="#f2f2f2" d="M513.249 37.408H515.249V55.908H513.249z"></path>
                <path fill="#f2f2f2" d="M452.248 37.408H454.248V55.908H452.248z"></path>
                <path fill="#f2f2f2" d="M484.248 131.908H624.248V133.908H484.248z"></path>
                <path
                    fill="#f2f2f2"
                    d="M522.249 113.908H524.249V132.40800000000002H522.249z"
                ></path>
                <path
                    fill="#f2f2f2"
                    d="M583.249 113.908H585.249V132.40800000000002H583.249z"
                ></path>
                <path fill="#f2f2f2" d="M670.249 176.908H810.249V178.908H670.249z"></path>
                <path fill="#f2f2f2" d="M708.249 158.908H710.249V177.408H708.249z"></path>
                <path fill="#f2f2f2" d="M769.249 158.908H771.249V177.408H769.249z"></path>
                <path fill="#f2f2f2" d="M656.249 640.908H796.249V642.908H656.249z"></path>
                <path fill="#f2f2f2" d="M694.249 622.908H696.249V641.408H694.249z"></path>
                <path fill="#f2f2f2" d="M755.249 622.908H757.249V641.408H755.249z"></path>
                <path fill="#f2f2f2" d="M417.248 319.908H557.248V321.908H417.248z"></path>
                <path fill="#f2f2f2" d="M455.248 301.908H457.248V320.408H455.248z"></path>
                <path fill="#f2f2f2" d="M516.249 301.908H518.249V320.408H516.249z"></path>
                <path fill="#f2f2f2" d="M461.248 560.908H601.248V562.908H461.248z"></path>
                <path fill="#f2f2f2" d="M499.248 542.908H501.248V561.408H499.248z"></path>
                <path fill="#f2f2f2" d="M560.249 542.908H562.249V561.408H560.249z"></path>
                <path fill="#f2f2f2" d="M685.249 487.908H825.249V489.908H685.249z"></path>
                <path fill="#f2f2f2" d="M723.249 469.908H725.249V488.408H723.249z"></path>
                <path fill="#f2f2f2" d="M784.249 469.908H786.249V488.408H784.249z"></path>
                <path
                    fill="#2f2e41"
                    d="M362.06 702.184L125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184z"
                ></path>
                <circle cx="156.789" cy="726.033" r="17.887" fill="#3f3d56"></circle>
                <circle cx="333.101" cy="726.033" r="17.887" fill="#3f3d56"></circle>
                <circle cx="540.927" cy="346.153" r="11.073" fill="#3f3d56"></circle>
                <path
                    fill="#2f2e41"
                    d="M539.385 665.767H273.237l-57.589-188.236h383.045l-.349 1.108zm-264.888-1.703h263.639l58.234-184.83H217.95z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#f2f2f2"
                    d="M366.61 579.958L132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958z"
                ></path>
                <path
                    fill="#2f2e41"
                    d="M451.465 384.7L449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7z"
                ></path>
                <path fill="#2f2e41" d="M82.258 458.584H427.551V460.288H82.258z"></path>
                <path fill="#2f2e41" d="M101.459 521.344H407.778V523.048H101.459z"></path>
                <path fill="#2f2e41" d="M254.314 402.368H256.018V588.901H254.314z"></path>
                <path
                    fill="#2f2e41"
                    d="M385.557 570.797H572.486V572.501H385.557z"
                    transform="rotate(-86.249 362.441 614.788)"
                ></path>
                <path
                    fill="#2f2e41"
                    d="M334.457 478.185H336.161V665.114H334.457z"
                    transform="rotate(-3.729 -908.232 2868.285)"
                ></path>
                <path fill="#2f2e41" d="M0 745H896V747H0z"></path>
                <path
                    fill="#a0616a"
                    d="M747.41 137.89s14.62 41.607 5.623 48.008 30.361 58.675 30.361 58.675l47.23-12.802-25.864-43.74s-3.374-43.74-3.374-50.14-53.975 0-53.975 0z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    d="M747.41 137.89s14.62 41.607 5.623 48.008 30.361 58.675 30.361 58.675l47.23-12.802-25.864-43.74s-3.374-43.74-3.374-50.14-53.975 0-53.975 0z"
                    opacity="0.1"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#2f2e41"
                    d="M722.874 434.468s-4.268 53.342 0 81.08 10.668 104.548 10.668 104.548 0 145.089 23.47 147.222 40.54 4.268 42.673-4.267-10.668-12.802-4.267-17.07 8.535-19.202 0-36.271 0-189.895 0-189.895l40.54 108.816s4.267 89.613 8.534 102.415-4.267 36.272 10.668 38.406 32.005-10.668 40.54-14.935-12.802-4.268-8.535-6.401 17.07-8.535 12.802-10.669-8.535-104.549-8.535-104.549-11.735-218.7-26.67-227.234-24.537 6.166-24.537 6.166z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#2f2e41"
                    d="M761.28 758.784v17.07s-19.203 46.399 0 46.399 34.138 4.808 34.138-1.593V763.05zM887.165 758.754v17.069s19.203 46.4 0 46.4-34.138 4.808-34.138-1.593v-57.61z"
                    transform="translate(-152 -76.014)"
                ></path>
                <circle cx="625.282" cy="54.408" r="38.406" fill="#a0616a"></circle>
                <path
                    fill="#6c63ff"
                    d="M765.547 201.9s10.668 32.005 27.737 25.604l17.07-6.401 29.87 204.83s-23.47 34.14-57.608 12.803-17.07-236.836-17.07-236.836z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#3f3d56"
                    d="M795.418 195.499l9.601-20.27s56.542 26.671 65.077 35.206 8.534 21.336 8.534 21.336l-14.935 53.342s4.267 117.35 4.267 121.618 14.936 27.737 4.267 19.203-12.801-17.07-21.336-4.268-27.738 27.738-27.738 27.738z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#a0616a"
                    d="M870.096 349.122l-6.401 59.742s-38.406 34.139-29.871 36.273 12.802-6.401 12.802-6.401 14.935 14.935 23.47 6.4 29.871-89.613 29.871-89.613z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#2f2e41"
                    d="M778.1 76.144c-8.514-.304-17.625-.455-24.804 4.133a36.313 36.313 0 00-8.572 8.392c-6.992 8.838-13.033 19.96-10.436 30.925l3.016-1.176a19.75 19.75 0 01-1.905 8.462c.425-1.235 1.848.762 1.467 2.011l-3.323 10.901c5.462-2.002 12.257 2.052 13.088 7.81.38-12.662 1.693-27.18 11.964-34.594 5.18-3.738 11.735-4.88 18.042-5.893 5.818-.935 11.918-1.827 17.49.089s10.32 7.615 9.056 13.37c2.57-.885 5.443.906 6.713 3.31s1.337 5.237 1.375 7.954c2.74 1.936 5.857-1.908 6.973-5.07 2.62-7.425 4.95-15.328 3.538-23.074s-7.724-15.148-15.597-15.174a5.467 5.467 0 001.422-3.849l-6.49-.548a7.172 7.172 0 004.287-2.26c-2.606 2.868-23.09-5.568-27.304-5.719z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#3f3d56"
                    d="M776.215 189.098s-17.37-17.02-23.62-15.978-14.786 15.978-14.786 15.978-51.207 17.07-49.074 34.138 25.604 100.282 25.604 100.282 19.203 100.282 2.134 110.95 81.079 38.406 83.212 25.604 6.401-140.821 0-160.024-23.47-110.95-23.47-110.95zM850.893 223.236h26.383s18.424 81.08 20.557 89.614 6.401 49.074 4.268 49.074-44.807-8.535-44.807-2.134z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#f2f2f2"
                    d="M850 424.014H749c-9.856-45.34-10.68-89.146 0-131h101c-16.3 41.101-17.318 84.607 0 131z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#a0616a"
                    d="M707.938 368.325l29.871 12.802s57.609 8.535 57.609-14.936-57.609-10.668-57.609-10.668l-19.204-6.14z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path
                    fill="#3f3d56"
                    d="M714.339 210.435l-25.604 6.4-19.203 113.084s-6.4 29.871 4.268 32.005 40.539 19.203 40.539 19.203 4.267-32.005 12.802-32.005l-21.337-17.07 12.802-74.677z"
                    transform="translate(-152 -76.014)"
                ></path>
                <path fill="#f2f2f2" d="M60.248 352.908H200.248V354.908H60.248z"></path>
                <path fill="#f2f2f2" d="M98.249 334.908H100.249V353.408H98.249z"></path>
                <path fill="#f2f2f2" d="M159.249 334.908H161.249V353.408H159.249z"></path>
                <path fill="#f2f2f2" d="M109.249 56.908H249.249V58.908H109.249z"></path>
                <path fill="#f2f2f2" d="M209.249 58.408H211.249V76.908H209.249z"></path>
                <path fill="#f2f2f2" d="M148.249 58.408H150.249V76.908H148.249z"></path>
                <path fill="#f2f2f2" d="M250.249 253.908H390.249V255.908H250.249z"></path>
                <path fill="#f2f2f2" d="M350.248 255.408H352.248V273.908H350.248z"></path>
                <path fill="#f2f2f2" d="M289.248 255.408H291.248V273.908H289.248z"></path>
                <path fill="#f2f2f2" d="M12.248 252.908H152.248V254.908H12.248z"></path>
                <path fill="#f2f2f2" d="M112.249 254.408H114.249V272.908H112.249z"></path>
                <path fill="#f2f2f2" d="M51.248 254.408H53.248V272.908H51.248z"></path>
                <path fill="#f2f2f2" d="M180.249 152.908H320.249V154.908H180.249z"></path>
                <path fill="#f2f2f2" d="M218.249 134.908H220.249V153.408H218.249z"></path>
                <path fill="#f2f2f2" d="M279.248 134.908H281.248V153.408H279.248z"></path>
            </svg>
        );
    }

    const EmptySummary = () => (
        <div className="summary-inner-container">

            <div className="summary-heading">Bag is empty</div>

            <div className="subtotal">Head back to homepage to continue shopping.</div>
            <Link to="/">
                <button className="checkout-button">Home</button>
            </Link>

        </div>
    )

    const FilledCart = () => {
        return (
            <div className="cart-inner-container">

                {items.map((item) => (
                    (<div key={item.id}>
                        <CartItem
                            item={item}
                            key={item.id}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity} />
                    </div>)
                ))}

            </div>
        )
    }

    const Summary = () => (
        <div className="summary-inner-container">

            <div className="summary-heading">Summary</div>

            <div className="subtotal">
                <span>Subtotal</span>
                <span>{cart.subtotal.formatted_with_symbol}</span>
            </div>

            <div className="total-items">
                <span>Total Items</span>
                <span>{cart.total_items}</span>
            </div>

            <div className="delivery">
                * Delivery cost applicable. The actual delivery cost will be calculated based on the delivery location.
            </div>
            <Link to="/checkout">
                <button type="submit" className="checkout-button">Checkout</button>
            </Link>
        </div>
    )

    if (!cart.line_items) return <LoadingScreen />


    return (
        <div className="cart-outer-container">
            <div className="cart-container">
                <div className="page-header">
                    <div className="page-title">Bag</div>
                    {cart.line_items.length ?
                        <button className="empty-cart" onClick={handleEmptyCart}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button> : null}
                </div>
                {!cart.line_items.length ?
                    <EmptyCart /> :
                    <FilledCart />
                }
            </div>

            <div className="summary-outer-container">
                <div className="summary-container">
                    {cart.line_items.length ?
                        <Summary />
                        : <EmptySummary />}
                </div>
            </div>
        </div>
    )
}

export default Cart
