import React from "react";
import "./styles.css";


function CurrencyExchange() {
  return (
    <>
        <div className= "container currency-block">
            <div className= "row">
                <div className= "col-lg-4 col-sm-12">
                <div className="card">
                    <h5 className="card-header currency-heading">CURRENCY EXCHANGE</h5>
                    <div className="card-body currency-data">
                        <div className="input-group">
                        <input type="number" className="form-control" aria-label="Text input with dropdown button"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default CurrencyExchange;