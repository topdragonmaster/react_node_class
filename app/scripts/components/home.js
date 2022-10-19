/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
 import React from 'react'
 import Product from './product'
 import Carousel from 'react-multi-carousel';
 
 const responsive = {
     desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 4,
       partialVisibilityGutter: 20
     },
     tablet: {
       breakpoint: { max: 1024, min: 768 },
       items: 3,
       partialVisibilityGutter: 20
     },
     smallTablet: {
       breakpoint: { max: 768, min: 425 },
       items: 2,
     },
     mobile: {
        breakpoint: { max: 425, min: 0 },
        items: 1,
      }
   };
 
 class Home extends React.Component {
 
     /**
      * 
      * @returns JSX
      * @memberof Home
     */
     render() {
         const { products } = this.props
         return (
             <section className='home' id="home">
                 {products.length > 0 && (
                     <>
                         <div className="container">
                         <Carousel 
                             responsive={responsive}
                             autoPlay={true}
                             autoPlaySpeed={3000}
                             infinite={true}
                             keyBoardControl={true}
                             partialVisbile
                         >
                            {
                                products.map(({ _id, name, picture, about, price, isActive }) => (
                                    <Product
                                        key={_id}
                                        name={name}
                                        picture={picture}
                                        about={about}
                                        price={price}
                                        isActive={isActive}
                                    />
                                ))
                            }
                         </Carousel>
                         </div>
                     </>
                 )}
             </section>
        );
    }
 }
 
 // Export out the React Component
 module.exports = Home;