import React,{useState} from 'react';

const Card = ({item, setCartCount, index}) => {
    const [status, setStatus] = useState(true) 
    const cartAdd = () => {
        setStatus(false)
        setCartCount(val=>val+1)
    }

    const cartRemove = () => {
        setStatus(true)
        setCartCount(val=>val-1)
    }
    return (

   
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={item.img} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                        <h4 class="fw-bolder">{ item.name}</h4>
                                  <h5 style={{color:"crimson"}}>  {item.price} </h5>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center" >{status ? <a class="btn btn-outline-dark mt-auto"  href="#" onClick={cartAdd}>Add to cart</a>
                                : <a class="btn btn-outline-dark mt-auto" href="#" onClick={cartRemove}>Remove from cart</a>} </div>
                            </div>
                        </div>
                    </div>
                   
                
                                     
    );
};

export default Card;

        

                    
                    
               
  