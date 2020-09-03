import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import LogInForm from "../components/Login";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

function Login(){

    const history = useHistory();

    const [userInfo, setUserInfo] = useState({
        email:"",
        password:""
    });

    const [account, setAccount] = useState({});

    const [id, setId] = useState("");      

    function handleSaveInfo(event) {
        event.preventDefault();
        const value = event.target.value;
        console.log(event.target.name);
        setUserInfo({
            ...userInfo,
            [event.target.name]: value
        })
    }

    function handleSubmitForm(event) {
        event.preventDefault();
        API.login(userInfo)
        .then(result => {
            setAccount(result.data)
            console.log(result.data._id);
            if (result === "Unauthorized") {
                console.log("Incorrect Password");
            } else {
                setId(result.data._id);
                history.push({
                    pathname:"/newtrip/" + result._id
                });
            }

        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar 
                id = {id}
            /> 
            <LogInForm 
                onChange={handleSaveInfo}
                handleSubmitForm={handleSubmitForm}
            /> 
            <Footer /> 
        </div>
    )
}

export default Login;