import React, { useState, useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { TextField, Grid, InputLabel, Select, MenuItem, CircularProgress } from "@material-ui/core"
import { commerce } from "../../lib/commerce"
import { Link } from "react-router-dom"

import "../../styles/checkout/addressForm.scss"

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required("Please enter your first name"),
    lastName: yup
        .string()
        .required("Please enter your last name"),
    address1: yup
        .string()
        .required("Please enter your address"),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Please enter your email"),
    city: yup
        .string()
        .required("Please enter your city"),
    zip: yup
        .string()
        .required("Please enter your postal code")
        .matches(/^\d+$/, "Please enter a valid postal code")

})

const AddressForm = ({ checkoutToken, next }) => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address1: "",
            email: "",
            city: "",
            zip: ""
        },
        validationSchema: validationSchema,
        onSubmit: (data) => {
            next({ ...data, shippingCountry, shippingSubdivision, shippingOption })
        }
    })

    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState("")
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[1])
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

        setShippingOptions(options);
        setShippingOption(options[0].id);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [checkoutToken])

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shippingSubdivision]);

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    const options = shippingOptions.map(sO => ({ id: sO.id, label: `${sO.description} - ${sO.price.formatted_with_symbol}` }))

    return (
        <>
            <div className="address-form-heading">Enter your Name and Address: </div>

            <form className="address-form" onSubmit={formik.handleSubmit}>
                <div className="address-form-input-container">
                    <TextField
                        type="text"
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        className="address-form-input"
                    >
                    </TextField>

                    <div className="error-message-container" >
                        <div className="space" />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="error-message" > {formik.errors.firstName}</div>
                        ) : null}
                    </div>
                </div>

                <div className="address-form-input-container">
                    <TextField
                        type="text"
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        className="address-form-input"
                    >
                    </TextField>

                    <div className="error-message-container" >
                        <div className="space" />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="error-message" > {formik.errors.lastName}</div>
                        ) : null}
                    </div>
                </div>

                <div className="address-form-input-container">
                    <TextField
                        type="text"
                        name="address1"
                        label="Address"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.address1}
                        onBlur={formik.handleBlur}
                        className="address-form-input"
                    >
                    </TextField>

                    <div className="error-message-container" >
                        <div className="space" />
                        {formik.touched.address1 && formik.errors.address1 ? (
                            <div className="error-message" > {formik.errors.address1}</div>
                        ) : null}
                    </div>
                </div>

                <div className="address-form-input-container">
                    <TextField
                        type="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className="address-form-input"
                    >
                    </TextField>

                    <div className="error-message-container" >
                        <div className="space" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-message" > {formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div className="address-form-input-container">
                    <TextField
                        type="text"
                        name="city"
                        label="City"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                        className="address-form-input"
                    >
                    </TextField>

                    <div className="error-message-container" >
                        <div className="space" />
                        {formik.touched.city && formik.errors.city ? (
                            <div className="error-message" > {formik.errors.city}</div>
                        ) : null}
                    </div>
                </div>

                <div className="address-form-input-container">
                    <TextField
                        type="text"
                        name="zip"
                        label="Postal Code"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                        onBlur={formik.handleBlur}
                        className="address-form-input"
                    >
                    </TextField>

                    <div className="error-message-container" >
                        <div className="space" />
                        {formik.touched.zip && formik.errors.zip ? (
                            <div className="error-message" > {formik.errors.zip}</div>
                        ) : null}
                    </div>
                </div>

                <Grid item style={{
                    width: "60%",
                    marginBottom: "2rem"
                }}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select fullWidth value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
                        {countries.map(country => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.label}
                            </MenuItem>
                        ))}

                    </Select>
                </Grid>

                <Grid item style={{
                    width: "60%",
                    marginBottom: "2rem"

                }}>
                    <InputLabel>Shipping Subdivisions</InputLabel>
                    <Select fullWidth value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)}>
                        {subdivisions.map(subdivision => (
                            <MenuItem key={subdivision.id} value={subdivision.id}>
                                {subdivision.label}
                            </MenuItem>
                        ))}

                    </Select>
                </Grid>

                <Grid item style={{
                    width: "60%",
                }}>
                    <InputLabel>Shipping Options</InputLabel>
                    <Select fullWidth value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                        {options.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.label}
                            </MenuItem>
                        ))}

                    </Select>
                </Grid>
                <div />

                <div className="address-form-navigation left-nav">
                    <Link to="/cart">
                        <button className="nav-btn prev-btn">Back</button>
                    </Link>
                </div>

                <div className="address-form-navigation right-nav">
                    <button type="submit" className="nav-btn next-btn">Next</button>
                </div>

            </form>

        </>
    )
}

export default AddressForm
