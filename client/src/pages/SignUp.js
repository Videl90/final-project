import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

function SignUp(){
   
    const history = useHistory();
    
    const [userInfo, setUserInfo] = useState({
        username:"",
        email:"",
        password:""
    });

    const [account, setAccount] = useState({});

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
        API.signup(userInfo)
        .then(result => {
            setAccount(result.data)
            //res.redirect("/login");
            history.push({
                pathname:"/login"
            });
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <Navbar /> 
            <SignUpForm 
                onChange={handleSaveInfo}
                handleSubmitForm={handleSubmitForm}
            /> 
            {/* <Footer />  */}
        </div>
    )
}

export default SignUp;