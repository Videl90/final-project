import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import MyTrips from "../components/MyTrips";
import AgendaContainer from "../components/AgendaContainer";
import AgendaTitle from "../components/AgendaTitle"
import HotelCard from "../components/HotelCard";
import FlightCard from "../components/FlightCard";
import Footer from "../components/Footer";
import API from "../utils/API";
import Modal from "../components/ModalChecklist";


function Agenda(){

    const [trip, setTrip] = useState([]);

    const [oneTrip, setOneTrip] = useState([]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        API.allTrips()
        .then(dbTrips => {
            console.log(dbTrips.data);
            setTrip(dbTrips.data);
        })
    }, []);

    function filterFlight(event) {
        event.preventDefault();
        let tripId = event.target.getAttribute('data-value');
        const filterTrip = trip.filter(item => item._id == tripId);
        console.log(filterTrip);
        setOneTrip(filterTrip);
    }

    function getChecklist(event) {
        event.preventDefault();
        console.log("HOLA");
        setShowModal(true);
    }

    function handleHideModal() {
        setShowModal(false);
    }

    return (
        <div>
            <Navbar />
            <Wrapper>
                <div className="row">
                    <div className="col-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <MyTrips
                            tripsInfo = {trip}
                            filterFlight = {filterFlight}
                            getChecklist = {getChecklist}
                        />
                    </div>
                    <div className="col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <AgendaContainer>
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                        <FlightCard
                                            flight = {oneTrip}
                                        />
                                </div>
                                    {/* <div className="col-3 col-lg-3 col-md-12 col-sm-12">
                                        <CurrencyExchange>

                                        </CurrencyExchange>
                                    </div> */}
                            </div>
                            <div className="row">
                                    <HotelCard
                                    
                                    />
                            </div>      
                        </AgendaContainer>
                    </div>
                </div>
                <Modal 
                    oneList = {oneTrip}
                    show = {showModal}
                    onHide = {handleHideModal}
                />
            </Wrapper>
            <Footer /> 
        </div>
    )
}

export default Agenda;