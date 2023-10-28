import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../resources/data';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { properties } from '../properties';
import './style.css'
import CustomNavbar from './CustomNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import  Dropdown  from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ItemPage() {
    const location = useLocation();
    const item = new URLSearchParams(location.search).get('name');
    const productDetails = data.designs[item]
    var images = productDetails.images
    const [productSize, setProductSize] = useState('Select Size')
    
    return (
    <div className='ItemPage'>
      <CustomNavbar></CustomNavbar>
      <div  style={{backgroundColor: 'blue'}}>

      
        <div className='ItemPageImageDiv'  >
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
        <div style={{margin:10}} className='ItemPageDescription'>
          <div className="text-7xl font-semibold tracking-tight text-gray-900 ">
            {productDetails.name}
          </div>
          <div style={{paddingTop:10}} className=" font-semibold tracking-tight text-gray-900 ">
            <span className='text-base'>Price : </span><span><FontAwesomeIcon icon={faIndianRupee} /></span> <span className='text-4xl'>{productDetails.price}</span>
            <p style={{textDecorationLine:'line-through', color:'red'}}><span style={{color:'black'}}>MRP : 999</span></p>
          </div>
          <div style={{display:'flex'}}>
            <span>Please Select the Size</span>
            <span style={{paddingLeft:10}}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {productSize}
              </Dropdown.Toggle>

              <Dropdown.Menu >
                { productDetails.sizes.map( (size) => {
                  return (
                    <>
                      {size.availability && 
                        <Dropdown.Item onClick={() => setProductSize('size : ' + size.size)}>{size.size}</Dropdown.Item>
                      }
                    </>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
            </span>
          </div>
          <div style={{paddingTop:10, paddingBottom:10}} className="text-xl font-semibold tracking-tight text-gray-900 ">
            <p className='text-3xl'>Desctiption : </p>{productDetails.description}
          </div>
          
          <a href={"https://wa.me/91" + properties.mobileNumber +"?text=Hi There! %0a I'm interested in *" + productDetails.name + "* product %0a " + productSize}  target="_blank" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 :bg-blue-600 ">
            Order Now
          </a>
        </div>
        </div>
        
    </div>
  )
}

