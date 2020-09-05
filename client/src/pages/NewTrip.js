import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import NewTripInput from "../components/NewTripInput";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import FlightContext from "../utils/FlightContext";
import APIContext from "../utils/APIContext";
import { useHistory } from "react-router-dom";
import Flights from "../components/Flight";

function NewTrip(){

    const history = useHistory();

    const [tripInfo, setTripInfo] = useState({
        origin:"", 
        destination:"",
        category:"",
        numberOfPeople:"",
        departureDate:"",
        arrivalDate:"",
        tripname:"",
        price:"",
        children: 1,
        travelClass: null,
        nonStop: null,
        currencyCode: "MXN",
        maxPrice: null
    });

    const [flightInfo, setFlightInfo] = useState([]);

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        // console.log(tripInfo);
        API.getUserInfo()
        .then(dbUser => {
            console.log(dbUser.data);
            console.log(dbUser.data._id);
            setUserInfo(dbUser.data);
        })
    }, []);

    function handleTripInfo(event) {
        console.log(event);
        if (event.preventDefault) {
            event.preventDefault();
        }
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
        console.log(tripInfo);
        API.lookFlights(tripInfo)
        .then(dbFlight => {
            console.log(dbFlight.data);
            setFlightInfo(dbFlight.data);
            history.push({
                pathname:"/flightresults"
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <FlightContext.Provider value= {{ tripInfo, setTripInfo }}>
                <APIContext.Provider value= {{ flightInfo, setFlightInfo }}>
                    <Navbar />
                    <Wrapper>
                        <Header>
                            <h4>Welcome {userInfo.username}</h4>
                        </Header>
                        <NewTripInput 
                            onChange={handleTripInfo}
                            getFlights={getFlights}
                        />
                        {/* <Flights /> */}
                    </Wrapper>
                    <Footer />
                </APIContext.Provider>
            </FlightContext.Provider>
        </div>
    )
}

export default NewTrip;