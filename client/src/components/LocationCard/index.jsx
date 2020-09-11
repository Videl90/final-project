import React from "react";
import "./styles.css";
import Map from "../Map";



function LocationCard() {
    
  return (
    <>
        <div className="hotel-container">
            <div className="your-flight-info">SEARCH FOR ANY LOCATION</div>
            <div className="row">
                <div className="col-12 col-xs-12">
                    <div className="google-maps">
                        <Map/>
                    </div>
                </div>
            </div>
        </div>
    </>
    
    );
}



export default LocationCard