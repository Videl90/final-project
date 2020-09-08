import React from "react";
import "./styles.css";

function MyTripsList() {
  return (
    <>
        <div className= "container trips-list">
            <div className= "row">
                <div className="col-12">
                    <h5 className="card-header trips-heading">MY TRIPS</h5>
                    <div className="card-body trip-names">
                        <a href="#"  name="tripname" className="card-text">Bla Bla Bla</a>
                        {/* Falta hacer un .map para cada tripname. maybe puede ser un componente aparte. */}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default MyTripsList;