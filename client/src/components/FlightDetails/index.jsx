import React from "react";
import "./styles.css";

function FlightDetails() {
  return (
    <>
        <div className= "container flight-detail">
                <p className="flight-heading">FLIGHT DETAILS</p>
                <p className="date-title">Departure Date:</p>
                <p className="departure-date">Agust 30th, 2020</p>
                <p className="departure-hour">19:40 MEX</p>
                <p className="date-title">Return Date:</p>
                <p className="return-date">November 15th, 2020</p>
                <p className="return-hour">19:40 FRZ</p>
                <p className="airline-logo">LOGOLOGOLOGO</p>
                <p className="number-people"> 
                    <i className="fas fa-user" id="person"></i>
                    2
                </p>
                <p className="total">Total: <span className="total-number">$46,300</span></p>
        </div>
    </>
    
    );
}

export default FlightDetails;