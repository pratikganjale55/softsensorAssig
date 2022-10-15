import React from 'react' ;
import { useState } from 'react';
import { useEffect } from 'react';
import "./display.css" ;
import InfiniteScroll from "react-infinite-scroll-component";

import { Link } from 'react-router-dom';


const DisplayData = () => {
  const [data, setData] = useState([]) ;
  const [limit, setlimit] = useState(1)
   
   
   async function fetchMoreData(){
        
        await fetch(`https://fakestoreapi.com/products/${limit}`) 
        .then((res) => res.json())
        .then((data1) => {
          setData(data.concat([data1]))
          setlimit(limit+1)
          
        }
        )
        .catch((e) => console.log(e)) 
          
  }


  useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${limit}`) 
        .then((res) => res.json())
        .then((data) => {setData([data])
        
      })
        .catch((e) => console.log(e))          
  }, [])

  return (
    <>
    
    <div className='container'>
        <div className='upperText'>
            <p className='stroke'>Fresh Stock</p> 
        </div>

        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={limit !== 21}
          loader={<h2>Loading...</h2>}
        >
        <div className='scrollContainer'>
            
              {
                data.map((ele, index) => {
                   return (
                <div key={index} className='childDiv'>
                    <div className='flexCategory'>
                       <p><b>Category : </b>{ele.category}</p>
                       <p><b>Color : </b>RBG</p>
                    </div>
                      <div style={{padding:"3%"}}>
                      <img src={ele.image} className="image"/>
                      </div>
                     
                      <p style={{fontSize: "x-large"}}>{ele.title}</p>
                      <div>
                          <p style={{fontSize: "large"}}><b>Price :</b>${ele.price}</p>
                     </div>
                     
                     <p style={{color:"#656565"}}>{ele.description}</p>
                    <Link to={`/${ele.id}`}> <button className='btn'>Add to cart</button></Link>
                </div>
                   )
                })
              }
            
        </div>
        </InfiniteScroll>
      
    </div>
    </>
  )
}

export default DisplayData
