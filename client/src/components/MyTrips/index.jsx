import React from "react";
import "./styles.css";

function MyTripsList(props) {
    console.log(props.tripsInfo)
  return (
    <>
        <div className= "container trips-list">
                <div className="col-12">
                    <h5 className="card-header trips-heading">MY TRIPS</h5>
                    {/* <div className="card-body trip-names"> */}
                        <ul className="list-group tripsList">
                        {props.tripsInfo.length !== 0 ? (
                            props.tripsInfo.map(({ tripName, _id }) => {
                                return(
                                    <li name="tripname" onClick={props.filterFlight} className="list-group-item card-text tripName" data-value={_id}>{tripName}
                                        <button
                                            type="button"
                                            data-toggle="modal"
                                            className="btn btn-primary"
                                            onClick={props.getChecklist}
                                            data-value={_id}
                                        >
                                            <i class="fas fa-clipboard-list"></i>
                                        </button>
                                    </li>
                                )
                            })
                        ): (
                            <></>
                        )}
                        </ul>
                    {/* </div> */}
                </div>
            </div>
    </>
    // <h1>Hola</h1>
    );
}

export default MyTripsList;