import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import MyTrips from "../components/MyTrips";
import AgendaContainer from "../components/AgendaContainer";
import AgendaTitle from "../components/AgendaTitle"
import Card from "../components/Card";
import HotelCard from "../components/HotelCard";
import FlightCard from "../components/FlightCard";
import CurrencyExchange from "../components/CurrencyExchange";
import Footer from "../components/Footer";
import API from "../utils/API";


function Agenda(){

    const [tripInfo, setTripInfo] = useState({
        origin:"", 
        destination:"",
        category:"",
        numberOfPeople:"",
        departureDate:"",
        arrivalDate:"",
        tripname:"",
        budget:""
    });

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

    // function handleTripInfo(event) {
    //     console.log(event);
    //     if (event.preventDefault) {
    //         event.preventDefault();
    //     }
    //     const value = event.target.value;
    //     console.log(event.target.name);
    //     setTripInfo({
    //         ...tripInfo,
    //         [event.target.name]: value
    //     });
    //     console.log(tripInfo);
    // }

    return (
        <div>
            <Navbar 
                id = {userInfo}
            />
            <Wrapper>
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <MyTrips/>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <AgendaContainer>
                            <div className="row">
                                <div className="ol-lg-8 col-sm-12">
                                    <AgendaTitle></AgendaTitle>
                                    <Card>
                                        <FlightCard/>
                                    </Card>
                                    <Card>
                                        <HotelCard/>
                                    </Card>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <CurrencyExchange></CurrencyExchange>
                                </div>
                            </div>      
                        </AgendaContainer>
                    </div>
                </div>
            </Wrapper>
            <Footer /> 
        </div>
    )
}

export default Agenda;