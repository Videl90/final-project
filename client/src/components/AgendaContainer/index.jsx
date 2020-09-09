import React from "react";
import "./styles.css";
import Card from "../Card"; 
import CurrencyExchange from "../CurrencyExchange";
import FlightCard from "../FlightCard";
import HotelCard from "../HotelCard";

function AgendaContainer({children}) {
  return (
    <>
        <div className= "container agenda-container">
            <div className="row">
                <div className="col-12 col-lg-12 card">
                    <div className="card-header agenda-heading">AGENDA</div>
                    <div className="card-body agenda-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default AgendaContainer;