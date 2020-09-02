import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Flights from "../components/Flight"

function FlightResults(){
    return (
        <div>
            <Navbar /> 
            <Flights/>
            <Footer /> 
        </div>
    )
}

export default FlightResults;