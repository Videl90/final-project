import React from "react";
import "./styles.css";

function HotelCard() {
  return (
    <>
        <div className="row container hotel-container">
            <div className="col-9">
                <div className="location-container-card">
                    <div className="card-title-location">Search for any location</div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-search-location"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control search-input" id="basic-url" aria-describedby="basic-addon3"></input>
                    </div>
                    <div className="google-map"></div>
                </div>
            </div>
        </div>

    
    </>
    
    );
}

export default HotelCard;