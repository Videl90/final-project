import React from "react";
import "./styles.css";

function HotelCard() {
  return (
    <>
    <div className="row container ">
        <div className="col-12 hotel-container">
            <div className="card-title-location">Search for any location</div>
        <div className="location-container-card">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-search-location"></i>
                    </span>
                </div>
                <input type="text" className="form-control search-input" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
                <div className="google-map"></div>
        </div>
        </div>
    </div>

    
    </>
    
    );
}

export default HotelCard;