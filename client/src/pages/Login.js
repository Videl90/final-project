import React from "react";
import Navbar from "../components/Navbar";
import LogInForm from "../components/Login";
import Footer from "../components/Footer";

function Login(){
    return (
        <div>
            <Navbar /> 
            <LogInForm /> 
            <Footer /> 
        </div>
    )
}

export default Login;