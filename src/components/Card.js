import React from "react";
import  "./style.css";
import { properties } from "../properties";


function Card(props){
    return (
<div   className="cardEle temp bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={"/spreadthewordwear/product?name=" + props.data.name}>
        <img style={{width: '90%',height: '350px',display: 'inline-block',overflow: 'auto'}} src={process.env.PUBLIC_URL + properties.imageBaseURL + props.data.images[0]} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href='#'>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.data.name}</h5>
        </a>
        <div className="flex items-center justify-between">
            <span className=" text-3xl font-bold text-gray-900 dark:text-white">Rs. {props.data.price}</span>
            <a href="https://wa.me/message/SBX7JE4XYNZ6G1" target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Order Now
            </a>
        </div>
    </div>
</div>

    )
}

export default Card