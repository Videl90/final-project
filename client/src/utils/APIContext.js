import React from "react";

const ResponseContext = React.createContext({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    returnDate: "",
    adults: "",
    children: "",
    travelClass: "",
    nonStop: "",
    currencyCode: "",
    flightInfo: []
});

export default ResponseContext;