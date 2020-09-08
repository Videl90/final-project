import React from "react";
import "./styles.css";
import HotelCard from "../HotelCard";

function Card(props){
    return (
        <div className="card-container">
            <div className="row card-title">{props.cardTitle}</div>
            <div className="row content">
            <HotelCard/>
            </div>
        </div>
    )
}

export default Card;