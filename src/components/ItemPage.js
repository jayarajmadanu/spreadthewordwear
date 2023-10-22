import React from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../resources/data';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function ItemPage() {
    const location = useLocation();
    const item = new URLSearchParams(location.search).get('name');
    const productDetails = data.designs[item]
    var images = productDetails.images
    
  return (
    <div>
        <div className='left-div'>
            {images}
            <Slide>
              {
                images.map((image, idx) => (
                  <img key={idx} src={require(image) }/>
                ))
              }
            </Slide>
        </div>
    </div>
  )
}

