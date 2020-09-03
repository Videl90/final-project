import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewTripInput from "../components/NewTripInput";
import Flights from "../components/Flight";
import Footer from "../components/Footer";
import Flight from "../components/Flight";
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

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        console.log(tripInfo);
        API.getUserInfo()
        .then(dbUser => {
            console.log(dbUser.data);
            console.log(dbUser.data._id);
            setUserInfo(dbUser.data);
        })
    }, []);

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
            <Navbar 
                id = {userInfo}
            />
            <Wrapper>
                <Header>
                    <h4>Welcome {userInfo.username}</h4>
                </Header>
                
                <NewTripInput 
                    onChange={handleTripInfo}
                    getFlights={getFlights}
                />
                <Flight />
            </Wrapper>
            <Footer />

        </div>
    )
}

export default NewTrip;