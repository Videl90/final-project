import React from "react";
import "./styles.css";
import Button from "../Button";

function Flights() {
  return (
    <>
        <div className= "container flight-detail">
            <div className="row">
                <p>FLIGHT DETAILS</p>
                <p>Departure Date:</p>
                <p>Agust 30th, 2020</p>
                <p>19:40 MEX</p>
                <p>Return Date:</p>
                <p>November 15th, 2020</p>
                <p>19:40 FRZ</p>
                <p>LOGOLOGOLOGO</p>
                <p>2 persons</p>
                <p>Total: $46,300</p>
            </div>
        </div>
    </>
    
    );
}

export default Flights;