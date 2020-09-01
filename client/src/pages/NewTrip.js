import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NewTripInput from "../components/NewTripInput";
import Footer from "../components/Footer";

function NewTrip(){

    const [tripInfo, setTripInfo] = useState({
        location:"",
        category:"",
        numberOfPeople:"",
        startDate:"",
        departureDate:"",
        arrivalDate:"",
        tripName:"",
        budget:""
    });

    const [flightInfo, setFlightInfo] = useState({});

    useEffect(() => {
        console.log(tripInfo);
    });

    function handleTripInfo(event) {
        event.preventDefault();
        const value = event.target.value;
        console.log(event.target.name);
        setTripInfo({
            ...tripInfo,
            [event.target.name]: value
        });
        console.log(tripInfo);
    }

    function getFlights(event) {
        event.preventDefault();
        console.log("HOLA");
    }

    return (
        <div>
            <Navbar /> 
            <NewTripInput 
                onChange={handleTripInfo}
                getFlights={getFlights}
            /> 
            {/* <Footer />  */}
        </div>
    )
}

export default NewTrip;