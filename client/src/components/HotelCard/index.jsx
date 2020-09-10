import React from "react";
import "./styles.css";
import Map from "../Map";
import credentials from '../../credentials';
const mapURL = `http://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;


function HotelCard() {
    
  return (
    <>
        <div className="row container hotel-container">
            <div className="col-9">
                <div className="location-container-card">
                    <div className="card-title-location">Search for any location</div>
                    <div className="google-map"> 
                        <Map
                            googleMapURL = {mapURL} 
                            containerElement = {<div style={{height:'176px'}}/>}
                            mapElement = {<div style={{ height:'100%'}}/>}
                            loadingElement= {<p>CARGANDO</p>}
                        />
                    </div>
                </div>
            </div>
        </div>

    
    </>
    
    );
}



export default HotelCard