import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NewTripInput from "../components/NewTripInput";
import Flights from "../components/Flight";
import Footer from "../components/Footer";
import Flights from "../components/Flight";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

function NewTrip(){

    const [tripInfo, setTripInfo] = useState({
        origin:"", 
        destination:"",
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
        API.flightInfo(tripInfo)
        .then(dbFlight => {
            console.log(dbFlight);
        })

    }

    return (
        <div>
            <Navbar /> 
            <Wrapper>
            <NewTripInput 
                onChange={handleTripInfo}
                getFlights={getFlights}
            />
            <Flights />
            </Wrapper>

            <Footer />

        </div>
    )
}

export default NewTrip;