import React from "react";
import "./styles.css";

function FlightCard() {
  return (
    <>
        <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="flight-container-card">
                        <div className="your-flight-info">Your Flight Info</div>
                        <div className="row">
                            <div className="col" align="center">
                                <p className="query-text">LOGOLOGO</p>
                            </div>
                            <div className="col" align="center">
                                <div>
                                    <p className="hour query-text">19:40</p>
                                    <p className="country query-text">MEX</p>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">19:40</p>
                                        <p className="country">MEX</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" align="center">
                                <div>
                                    <p className="hour query-text">19:40</p>
                                    <p className="country query-text">MEX</p>
                                </div>
                            </div>
                            <div className="col" align="center">
                                <p className="duration query-text">14 h 30 m</p>
                                <p className="scale query-text">1 scale CDG</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" align="center">
                                <p className="query-text">LOGOLOGO</p>
                            </div>
                            <div className="col" align="center">
                                <div>
                                    <p className="hour query-text">19:40</p>
                                    <p className="country query-text">MEX</p>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration">14 h 30 m</p>
                                    <p className="scale">1 scale CDG</p>
                                </div>
                            </div>
                            <div className="col" align="center">
                                <div>
                                    <p className="hour query-text">19:40</p>
                                    <p className="country query-text">MEX</p>
                                </div>
                            </div>
                            <div className="col" align="center">
                                <p className="duration query-text">14 h 30 m</p>
                                <p className="scale query-text">1 scale CDG</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    
    </>
    
    );
}

export default FlightCard;