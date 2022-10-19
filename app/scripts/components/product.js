/**
 * This file will hold the Product in Main Page
 * 
 */
import React from 'react';

class Product extends React.Component {

    /**
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        const { name, picture, about, price, isActive } = this.props
        return (
            <div className="product">
                <span className={isActive == "true" ? "product-badge" : "product-badge out"}>{isActive == "true" ? "In Stock" : "Out of Stock"}</span>
                <img className='product-img' src={picture} />
                <div className='product-name'>
                    <h3 className="product-name__content">{name}</h3>
                </div>
                <p className='product-price'>{`$${price}`}</p>
                {<button className='product-btn' disabled={isActive !== "true"}>add to bag</button>}
            </div>
        );
    }
}

// Export out the React Component
module.exports = Product;