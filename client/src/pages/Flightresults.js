import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Flights from "../components/Flight";
import Footer from "../components/Footer";
import FlightContext from "../utils/FlightContext";
import APIContext from "../utils/APIContext";

function Results() {

    // const { flightInfo } = useContext(FlightContext);
    // const { results } = useContext(APIContext);
    // console.log(flightInfo);
    // console.log(results);

    return(
        <>
            <Navbar />
            <Wrapper> 
                <Header />
                <Flights />
            </Wrapper>
            <Footer />
        </>
    )

}

export default Results;