import React from "react";
import "./styles.css";

function HotelCard() {
  return (
    <>
        <div className="hotel-container">
            <div className="row input-row">
                <div className="col-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xs-12">
                    <div className="google-maps">
                        Google Maps
                    </div>
                </div>
            </div>
        </div>
    </>
    
    );
}

export default HotelCard;