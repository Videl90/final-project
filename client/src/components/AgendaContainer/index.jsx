import React from "react";
import "./styles.css";

function AgendaContainer({children}) {
  return (
    <>
        <div className= "container agenda-container">
            <div className="row">
                <div className="col-12 col-lg-12 card">
                    <div className="col-12 card-header agenda-heading">AGENDA</div>
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