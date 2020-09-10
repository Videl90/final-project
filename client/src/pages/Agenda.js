import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import MyTrips from "../components/MyTrips";
import AgendaContainer from "../components/AgendaContainer";
import AgendaTitle from "../components/AgendaTitle"
import LocationCard from "../components/LocationCard";
import FlightCard from "../components/FlightCard";
import Footer from "../components/Footer";
import API from "../utils/API";


function Agenda(){

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        API.userTrips()
        .then(dbUser => {
            console.log(dbUser.data);
            console.log(dbUser.data._id);
            setUserInfo(dbUser.data);
        })
    }, []);

    function filterFlight() {
        console.log("HOLA");
    }

    return (
        <div>
            <Navbar />
            <Wrapper>
                <div className="row">
                    <div className="col-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <MyTrips
                            tripsInfo = {userInfo}
                            filterFlight = {filterFlight}
                        />
                    </div>
                    <div className="col-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <AgendaContainer>
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                        <AgendaTitle/>
                                        <FlightCard
                                            
                                        />
                                </div>
                                    {/* <div className="col-3 col-lg-3 col-md-12 col-sm-12">
                                        <CurrencyExchange>

                                        </CurrencyExchange>
                                    </div> */}
                            </div>
                            <div className="row">
                                    <LocationCard
                                    
                                    />
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