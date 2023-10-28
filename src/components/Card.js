import React from "react";
import  "./style.css";
import { properties } from "../properties";
import { NavLink} from 'react-router-dom'


function Card(props){
    return (
<div   className="cardEle temp bg-white border border-gray-200 rounded-lg shadow ">
    <NavLink to={"/product?name=" + props.data.name}>
    <img style={{width: '90%',height: '350px',display: 'inline-block',overflow: 'auto'}} src={process.env.PUBLIC_URL + properties.imageBaseURL + props.data.images[0]} alt="product image" />
    </NavLink>
    <div >
        <a  style={{textDecoration:'none'}}>
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">{props.data.name}</h5>
        </a>
        <div className=" items-center justify-between">
            <p className=" text-3xl font-bold text-gray-900 ">Rs. {props.data.price}</p>
            <a style={{textDecoration:'none'}} href={"https://wa.me/91" + properties.mobileNumber +"?text=Hi There!\n I'm intrested in " + props.data.name + " product"} target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center">
                Order Now
            </a>
        </div>
    </div>
</div>

    )
}

export default Card