import React from "react";
import "./styles.css";
 
function Card(props){
    return (
        <div className="card-container">
            <div className="row content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;