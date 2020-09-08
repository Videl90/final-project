import React from "react";

const FlightContext = React.createContext({
    origin:"", 
    destination:"",
    category:"",
    numberOfPeople:"",
    departureDate:"",
    arrivalDate:"",
    tripname:"",
    price:"",
    children: "",
    travelClass: "",
    nonStop: "",
    currencyCode: ""
});

export default FlightContext;
