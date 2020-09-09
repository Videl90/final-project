import React from "react";
import "./styles.css";

function MyTripsList(props) {
    console.log(props.tripsInfo)
  return (
    <>
        <div className= "container trips-list">
                <div className="col-12">
                    <h5 className="card-header trips-heading">MY TRIPS</h5>
                    <div className="card-body trip-names">
                        <ul className="tripsList">
                        {props.tripsInfo.length !== 0 ? (
                            props.tripsInfo.trips.map(({ tripName, id }) => {
                                return(
                                    <li name="tripname" onClick={props.filterFlight} className="card-text tripName" data-value={id}>{tripName}</li>
                                )
                            })
                        ): (
                            <></>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
    </>
    );
}

export default MyTripsList;