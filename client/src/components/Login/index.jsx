import React, { useState, useRef } from "react";
import "./styles.css";
import API from "../../utils/API";

function LogInForm(){
    const emailRef = useRef();
    const passwordRef = useRef();

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
        <form className="form" onSubmit = {handleSubmitForm}>
            <p className="form-title">LOG IN</p>
            <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@email.com" aria-describedby="emailHelp" ref={emailRef}></input>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">PASSWORD</label>
                <input type="password" class="form-control" placeholder="Enter your password" id="exampleInputPassword1" ref={passwordRef}></input>
                <button className="btn btn-primary" type="submit" value="SUBMIT">Submit</button>
            </div>
            <a href="/" className="toLogin">Don't have an account?<span><strong> Register here</strong></span></a>
        </form>
    )
}

export default LogInForm;