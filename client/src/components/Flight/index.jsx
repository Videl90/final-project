import React from "react";
import "./styles.css";
import Button from "../Button";

function Flights() {
    //console.log(props);
  return (
    <>
    <div className="container resultsCont">
        <div className="row flights-container">
                <div className="col-10 col-lg-10 col-md-10 col-sm-12">

                    <div className="flight-container">
                        <div className="row departureRow">
                            <div className="col" align="center">
                                <p>LOGO</p>
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
                        <div className="row arrivalRow">
                            <div className="col" align="center">
                                <p>LOGO</p>
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
                    
                <div className="col-2 col-lg-2 col-md-2 col-sm-6 buttonCont">
                    <div className="priceInfo">
                        <p className="price">$23,456</p>
                        <p className="general-content">per person</p>
                        <div className="selectBtn">
                            <Button className="selectButton" btnName="SELECT"></Button>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </>
    
    );
}

export default Flights;