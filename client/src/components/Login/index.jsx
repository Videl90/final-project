import React, { useState, useRef } from "react";
import "./styles.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

function LogInForm(){
    const emailRef = useRef();
    const passwordRef = useRef();

    const history = useHistory();

    const [userInfo, setUserInfo] = useState({});

    function handleSubmitForm(event) {
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        API.login({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        .then(result => {
            setUserInfo(result.data)
        })
        .catch(err => console.log(err));

        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    return (
        <div className="container">
            <form className="form" onSubmit = {handleSubmitForm}>
                <p className="form-title">LOG IN</p>
                <div className="form-group">
                    <label for="exampleInputEmail1">EMAIL</label>
                    <input type="email" className="form-control emailInput" id="exampleInputEmail1" placeholder="example@email.com" aria-describedby="emailHelp" ref={emailRef}></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">PASSWORD</label>
                    <input type="password" class="form-control passwordInput" placeholder="Enter your password" id="exampleInputPassword1" ref={passwordRef}></input>
                    <a href="/" className="toLogin">Don't have an account?<span><strong> Register here</strong></span></a>
                </div>
                <div class="form-group">
                    <button className="btn btn-primary" type="submit" value="SUBMIT">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LogInForm;