import React from "react";
import "./styles.css"
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
                        <Button btnName="HOME"></Button>
                    </li>
                    <li class="nav-item">
                        <Button btnName="NEW TRIP"></Button>
                    </li>
                    <li class="nav-item">
                        <Button btnName="LOG OUT"></Button>
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar