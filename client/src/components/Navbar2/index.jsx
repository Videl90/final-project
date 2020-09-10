import React from "react";
import "./styles.css"
import {Link} from "react-router-dom";


function Navbar2(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                   to="/newtrip"
                   className = {
                     window.location.pathname === "/newtrip"
                     ? "nav-link" : "nav-link"
                    }>NEW TRIP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/agenda"
                    className={
                      window.location.pathname === "/agenda"
                      ? "nav-link" : "nav-link"
                      }>AGENDA
                    </Link>
                </li>
              </ul>
            </div>
          </nav>
    )
}

export default Navbar2;