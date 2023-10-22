import React from "react";
import  "./style.css";
import pic1 from "../images/Designs/Immanuel/Immanuel_B.jpg"


function Card(props){
    const pic = '../images/Designs/Immanuel/Immanuel_B.jpg'
    return (
<div   className="cardEle temp bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={"/product?name=" + props.data.name}>
        <img style={{width: '90%',height: '350px',display: 'inline-block',overflow: 'auto'}} src={pic1} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href='#'>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.data.name}</h5>
        </a>
        <div className="flex items-center justify-between">
            <span className=" text-3xl font-bold text-gray-900 dark:text-white">Rs. {props.data.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

    )
}

export default Card