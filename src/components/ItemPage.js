import React from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../resources/data';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { properties } from '../properties';
import './style.css'
import CustomNavbar from './CustomNavbar';

export default function ItemPage() {
    const location = useLocation();
    const item = new URLSearchParams(location.search).get('name');
    const productDetails = data.designs[item]
    var images = productDetails.images
    
    return (
    <div className='ItemPage'>
      <CustomNavbar></CustomNavbar>
        <div className='ItemPageImageDiv'>
            <Slide >
              {
                images.map((image, idx) => (
                  <div >
                    <img style={{height:'500px', width:'80%', margin:'auto'}} key={idx} src={process.env.PUBLIC_URL + properties.imageBaseURL + image}/>
                  </div>
                ))
              }
            </Slide>
        </div>
        <div className='ItemPageDescription'>
          <div className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {productDetails.name}
          </div>
          <div className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
            Desctiption : {productDetails.description}
          </div>
          <div className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
            Price : {productDetails.price}
          </div>
          <a href='https://wa.me/message/SBX7JE4XYNZ6G1' target="_blank" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Order Now
          </a>
        </div>

        
    </div>
  )
}

