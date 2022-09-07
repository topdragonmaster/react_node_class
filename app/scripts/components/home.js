/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react'
import Product from './Product'
import SliderContainer from './SliderContainer'

class Home extends React.Component {

    /**
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        const { products } = this.props
        return (
            <section id="home">
                {products.length > 0 && (
                    <>
                        <h1 className="title"> Search Results</h1>
                        <div className="content">
                            <SliderContainer>
                                {
                                    products.map(({ _id, name, picture, about, price }) => (
                                        <Product
                                            key={_id}
                                            name={name}
                                            picture={picture}
                                            about={about}
                                            price={price}
                                        />
                                    ))
                                }
                            </SliderContainer>
                        </div>
                    </>
                )}
            </section>
        );
    }


}

// Home.propTypes = {
//     products: 
// }

// Home.defaultProps = {
//     products: [],
// }

// Export out the React Component
module.exports = Home;