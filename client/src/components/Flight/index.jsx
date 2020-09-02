import React from "react";
import "./styles.css";
import Button from "../Button";

function Flights() {
  return (
    <>
        <div className="row container">
                <div className="col-9">
                    <div className="flight-container">
                        <div className="row">
                            <div className="col" align="center">
                                <p>LOGOLOGOLOGO</p>
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
                        <div className="row">
                            <div className="col" align="center">
                                <p>LOGOLOGOLOGO</p>
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
                    
                <div className="col-3">
                    <div className="priceInfo">
                        <p className="price">$23,456</p>
                        <p className="general-content">per person</p>
                        <div className="selectBtn">
                            <Button btnName="SELECT"></Button>
                        </div>
                    </div>
                </div>
        </div>

    
    </>
    
    );
}

export default Flights;