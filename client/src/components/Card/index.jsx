import React from "react";
import "./styles.css";
 
function Card(props){
    return (
        <div className="card-container container">
            <div className="row card-title"></div>
            <div className="row content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;