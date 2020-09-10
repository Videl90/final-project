import React from 'react';
import "./style.css"

function Wrapper({ children }) {
    return (
        <div className = "wrapper container-fluid">
             { children }
        </div>
    );
}

export default Wrapper;


