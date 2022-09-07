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
        const { name, picture, about, price } = this.props

        return (
            <div className="ProductContainer">
                <h3 className="Name">{name}</h3>
                <div className="ImgContainer">
                    <img className="Picture" src={picture} />
                    <div className="Overlay">
                        <div className="Text">
                            <p> {about} </p>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="Price">{`$ ${price}`}</p>
            </div>
        );
    }
}

// Export out the React Component
module.exports = Product;