import React, { useState } from 'react';
import Card from './Card';

const ConditionalRendering = ({ setCartCount, cartCount, products, setProducts }) => {
    

    return (
        
        <div>
             <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            {products.map((item, index) => {
                return (
                   
                        <Card item={item} setCartCount={setCartCount}  index={index} />

                )
            })}
                 
                </div>
            </div>
        </section>
             </div>       
    )
};

export default ConditionalRendering;

