import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router' ;
import arrow from "./image/icons8-back-arrow-50.png" ;
import pluse from "./image/icons8-plus-50.png" ;
import minuse from "./image/icons8-minus-50.png" ;
import star from "./image/icons8-star-48.png" ;
import "./cart.css" ;
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]) ;
    const [count, setCount] = useState(0)
    const {id} = useParams() ;
    
    const handlePluse = () => {
         
        setCount(count+1)
    }
    const handleMinuse = () => {
          
          setCount(count-1) ;
    }
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`) 
        .then((res) => res.json())
        .then((data) => {setCart([data])
        
      })
        .catch((e) => console.log(e))          
  }, [id])
  
  return (
    <>
    <h2>Cart Page</h2>
    <div className='carttConatiner'>
       <div>
          <Link to="/"><img src={arrow}/></Link> 
       </div>
        <div className='cartFlex'>
            {
                cart.map((ele) => {
                    return (
                        <>
                    <div className='leftImageDiv'>
                       <img src={ele.image}/>
                    </div>
                   <div className='rightCartDiv'>
                           <div>
                               <p style={{fontSize: "large"}}>{ele.title}</p>
                           </div>
                           <div>
                              <p style={{fontSize: "large"}}><b>Price :</b>${ele.price}</p>
                           </div>
                           <div className='reviewDiv'>
                                
                                <div>
                                   <img src={star} alt="" />
                                   <p>({ele.rating.rate})</p>
                                   
                                </div>
                                <div>
                                    <p>Review</p>
                                    <p>{ele.rating.count}+</p>
                                </div> 
                                
                            </div>
                            <div className='addMinItems'>
                                
                                <img src={minuse}  onClick={handleMinuse}/>
                                <input type="text" value={count} />
                                <img src={pluse} onClick={handlePluse} alt="" />
                                 
                            </div>

                            <button className='Buybtn'>Buy</button>
                            
                    </div>
                </>
                    )
                })
            
           }

        </div>
    </div>
    </>
  )
}

                        

export default Cart
