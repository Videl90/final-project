import React from "react";
import "./styles.css";

function FlightCard() {
  return (
    <>
        <div className="row container flights-container">
                <div className="col-12">
                    <div className="flight-container-card">
                        <div className="card-title">Flight Details</div>
                            <div className="row row-1">
                                <div className="col" align="center">
                                    <p>LOGOLOGO</p>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">19:40</p>
                                        <p className="country">MEX</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <i class="fas fa-plane-departure"></i>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">19:40</p>
                                        <p className="country">MEX</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration">14 h 30 m</p>
                                    <p className="scale">1 scale CDG</p>
                                </div>
                            </div>
                            <div className="row row-2">
                                <div className="col" align="center">
                                    <p>LOGOLOGO</p>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">19:40</p>
                                        <p className="country">MEX</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <i class="fas fa-plane-departure"></i>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">19:40</p>
                                        <p className="country">MEX</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration">14 h 30 m</p>
                                    <p className="scale">1 scale CDG</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>

    
    </>
    
    );
}

export default FlightCard;