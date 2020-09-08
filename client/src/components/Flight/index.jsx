import React, { useContext, useState } from "react";
import "./styles.css";
import Button from "../Button";

function Flights(props) {
    console.log(props);
    //const array = flightInfo.map(info => info.itineraries[0].segments[0].departure);
    // console.log(array);
    // const { tripInfo, setTripInfo } = useContext(FlightContext);
    // const values = useContext(APIContext);
    // const [flightInfo, setFlightInfo] = useState(values.flightInfo);
    // console.log(flightInfo);
    // // console.log(FlightContext);
    // // console.log(APIContext);
    // console.log(values);
    // // console.log({flightInfo});
    let changeFormat = (date) => {
        let newDate = date.split("T");
        return newDate[1]
    }

    let durationFormat = (duration) => {
        let newDuration = duration.split("T");
        return newDuration[1]
    }

    return (
        <>
        {/* <h1>Hola</h1> */}
        {props.flightInfo.length !== 0 ? (
            props.flightInfo.map(({ id, itineraries, oneWay, price }) => {
                return (
                    <div className="container resultsCont">
                        <div className="row flights-container">
                            <div className="col-10 col-lg-10 col-md-10 col-sm-12">

                            <div className="flight-container">
                            <div className="row">
                            <div className="col tripHeader">
                                <strong><p>Airline</p></strong>
                            </div>
                            <div className="col tripHeader">
                                <strong><p>Departure</p></strong>
                            </div>
                            <div className="col tripHeader">
                                
                            </div>
                            <div className="col tripHeader">
                                <strong><p>Arrival</p></strong>
                            </div>
                            <div className="col tripHeader">
                                <strong><p>Duration</p></strong>
                            </div>
                        </div>
                                <div className="row departureRow">
                                    <div className="col" align="center">
                                        <p>{itineraries[0].segments[0].carrierCode}</p>
                                    </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">{changeFormat(itineraries[0].segments[0].departure.at)}</p>
                                        <p className="country">{itineraries[0].segments[0].departure.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <i class="fas fa-plane-departure"></i>
                                        <p className="scale">{itineraries[0].segments.length > 1 ? (itineraries[0].segments.length -1) + " Scale(s)" : "Direct"}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">{changeFormat(itineraries[0].segments[(itineraries[0].segments.length) -1].arrival.at)}</p>
                                        <p className="country">{itineraries[0].segments[(itineraries[0].segments.length) -1].arrival.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration">{durationFormat(itineraries[0].duration)}</p>
                                </div>
                            </div>
                            <div className="row arrivalRow">
                                <div className="col" align="center">
                                    <p>{itineraries[1].segments[0].carrierCode}</p>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">{changeFormat(itineraries[1].segments[0].departure.at)}</p>
                                        <p className="country">{itineraries[1].segments[0].departure.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <i class="fas fa-plane-departure"></i>
                                        <p className="scale">{itineraries[1].segments.length > 1 ? (itineraries[1].segments.length -1) + " Scale(s)" : "Direct"}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour">{changeFormat(itineraries[1].segments[(itineraries[1].segments.length - 1)].arrival.at)}</p>
                                        <p className="country">{itineraries[1].segments[(itineraries[1].segments.length - 1)].arrival.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration">{durationFormat(itineraries[0].duration)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-2 col-lg-2 col-md-2 col-sm-6 buttonCont">
                        <div className="priceInfo">
                            <p className="price">{price.total} {price.currency}</p>
                            <p className="general-content">per person</p>
                            <div className="selectBtn">
                                <button type="button" class="btn btn-outline-primary" onClick={props.handleFlights} data-toggle="modal" data-value={id} data-target="#staticBackdrop" >Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
            }) 
        ) : (
            <></>
        
        )}
        </>
        // </>
    );
}

export default Flights;