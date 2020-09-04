import React from 'react';
import "./styles.css"

function Header({ children }) {
    return (
        <div className = "header container">
             { children }
        </div>
    );
}

export default Header;