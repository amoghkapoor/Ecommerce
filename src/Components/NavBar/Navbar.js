/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Badge } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import logo from "../../assets/nike.png"
import "../../styles/navbar/navbar.scss"
import { Link } from "react-router-dom"

const Navbar = ({ totalItems }) => {

    return (
        <nav className="navbar-container">
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="Nike" />
                </div>
            </Link>



            <Link to="/cart">
                <div className="nav-cart">
                    <Badge badgeContent={totalItems} style={{ paddingRight: "5px" }}>
                        <ShoppingCart />
                    </Badge>
                </div>
            </Link>
        </nav >

    )
}

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
    ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
});



export default Navbar
