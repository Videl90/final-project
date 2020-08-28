import React from "react";
import "./styles.css"
import {Link} from "react-router-dom";
import Button from "../Button"

function Navbar(){
    return (
        <div className="navbar">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Button btnName="HOME">
                        <Link
                            to="/"
                            className = { window.location.pathname === "/"
                            ? "nav-link" : "nav-link" 
                            }>
                        </Link>
                        </Button>
                    </li>
                    <li class="nav-item">
                        <Button btnName="NEW TRIP">
                        <Link
                            to="/newtrip"
                            className = { window.location.pathname === "/newtrip"
                            ? "nav-link" : "nav-link" 
                            }>
                        </Link>
                        </Button>
                    </li>
                    <li class="nav-item">
                        <Button btnName="LOG OUT">
                        <Link
                            to="/logout"
                            className = { window.location.pathname === "/logout"
                            ? "nav-link" : "nav-link" 
                            }>
                        </Link>
                        </Button>
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;