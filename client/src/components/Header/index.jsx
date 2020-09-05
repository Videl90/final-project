import React from 'react';
import "./styles.css"

function Header({ children }) {
    return (
        <div className = "container header">
             { children }
        </div>
    );
}

export default Header;