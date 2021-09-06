import React from 'react'
import "../../styles/filter/filter.scss"

const Filter = ({ handleCategories }) => {
    return (
        <aside className="filter-outer-container">

            <div className="filter-inner-container ">
                <div className="input-container">
                    <input type="checkbox" name="" id="lifestyle" />
                    <label htmlFor="lifestyle" className="category filter-heading" onClick={() => handleCategories("lifestyle")}>Lifestyle</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="basketball" />
                    <label htmlFor="basketball" className="category filter-heading" onClick={() => handleCategories("basketball")}>Basketball Shoes</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="football" />
                    <label htmlFor="football" className="category filter-heading" onClick={() => handleCategories("football")}>Football Shoes</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="sandal" />
                    <label htmlFor="sandal" className="category filter-heading" onClick={() => handleCategories("sandal")}>Sandals</label>
                </div>

            </div>

            <div className="line" />

            <div className="filter-inner-container">

                <div className="gender filter-heading">Gender</div>

                <div className="input-container">
                    <input type="checkbox" name="" id="men" />
                    <label htmlFor="men" className="filter-content" onClick={() => handleCategories("men")}>Men</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="women" />
                    <label htmlFor="women" className="filter-content" onClick={() => handleCategories("women")}>Women</label>
                </div>

            </div>
            <div className="line" />

            <div className="filter-inner-container">

                <div className="color filter-heading">Color</div>

                <div className="input-container">
                    <input type="checkbox" name="" id="black" />
                    <label htmlFor="black" onClick={() => handleCategories("black-colour")} className="filter-content">Black</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="white" />
                    <label htmlFor="white" onClick={() => handleCategories("white-colour")} className="filter-content">White</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="blue" />
                    <label htmlFor="blue" onClick={() => handleCategories("blue-colour")} className="filter-content">Blue</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="yellow" />
                    <label htmlFor="yellow" onClick={() => handleCategories("yellow-colour")} className="filter-content">Yellow</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="green" />
                    <label htmlFor="green" onClick={() => handleCategories("green-colour")} className="filter-content">Green</label>
                </div>

                <div className="input-container">
                    <input type="checkbox" name="" id="multi" />
                    <label htmlFor="multi" onClick={() => handleCategories("multi-colour")} className="filter-content">Multi-Colour</label>
                </div>

            </div>
        </aside>
    )
}

export default Filter
