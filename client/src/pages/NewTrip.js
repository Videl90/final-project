import React from "react";
import Navbar from "../components/Navbar";
import NewTripInput from "../components/NewTripInput";
import Footer from "../components/Footer";

function NewTrip(){
    return (
        <div>
            <Navbar /> 
            <NewTripInput /> 
            <Footer /> 
        </div>
    )
}

export default NewTrip;