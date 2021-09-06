import React, { useState, useEffect } from 'react'
import Products from './Components/Products/Products'
import Navbar from './Components/NavBar/Navbar'
import Cart from './Components/Cart/Cart'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NotFound from "./Components/NotFound/404"
import Checkout from "./Components/Checkout/Checkout"

const App = () => {
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState({})
    const [categories, setCategories] = useState([])
    const [order, setOrder] = useState({})
    const [error, setError] = useState('')

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
    }



    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity)
        setCart(cart)
    }

    const handleUpdateCartQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)
        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()
        setCart(cart)
    }

    const handleCategories = (category) => {
        const index = categories.indexOf(category)
        if (index > -1) {
            categories.splice(index, 1);
            setCategories([...categories])
        }
        else {
            categories.push(category)
            setCategories([...categories])
        }
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
            setOrder(incomingOrder)
            refreshCart()
        }
        catch (err) {
            setError(err.data.error.message)
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const categorySlug = categories

            const { data } = await commerce.products.list({
                category_slug: categorySlug
            })
            setProducts(data)

        }
        fetchProducts()
        fetchCart()

    }, [categories])


    return (
        <Router>
            <main className="products-main">
                <Switch>
                    <Route exact path="/">
                        <Navbar totalItems={cart.total_items} />
                        <Products
                            products={products}
                            onAddToCart={handleAddToCart}
                            handleCategories={handleCategories}
                        />
                    </Route>
                    <Route path="/cart">
                        <Navbar totalItems={cart.total_items} />
                        <Cart
                            cart={cart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route path="/checkout">
                        <Navbar totalItems={cart.total_items} />
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={error}
                        />
                    </Route>
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App
