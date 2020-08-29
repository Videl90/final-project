import React from "react";
import "./styles.css"
import {Link} from "react-router-dom";
import Button from "../Button"

function Navbar(){
    return (
        <div className="container-fluid navbar">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><svg width="1em" viewBox="0 0 16 16" class="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#81b6ff" fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg></span>
                </button>
                <div class="collapse navbar-collapse fixed-bottom" id="navbarNav">
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