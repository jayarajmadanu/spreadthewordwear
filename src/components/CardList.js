import React from "react";
import Card from "./Card";
import {designs} from "../designNames"
import { data } from "../resources/data";

function CardList() {
    let cardsData = [];
    designs.forEach(ele=> {
        cardsData.push(data.designs[ele])
    });
    let cards=[];
    cardsData.forEach(ele =>{
        cards.push(<Card data={ele} ></Card> )
    })
    
    return(
        <div style={{ display: "flex", flexWrap: "wrap", backgroundColor:"#f0f4fa" }}>
            {cards}
        </div>
    )
}
 export default CardList