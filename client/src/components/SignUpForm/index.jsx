import React, { useState, useRef } from "react";
import "./styles.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

//const isAuthenticated = require("../../../../config/middleware/isAuthenticated");

function SignUpForm(){
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const history = useHistory();
    
    const [userInfo, setUserInfo] = useState({});

    function handleSubmitForm(event) {
        event.preventDefault();
        console.log(userRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        API.signup({
            username: userRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        .then(result => {
            setUserInfo(result.data)
            //res.redirect("/login");
            history.push({
                pathname:"/login"
            });
        })
        .catch(err => console.log(err));

        userRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    return (
        <form className="form" onSubmit = {handleSubmitForm}>
            <p className="form-title">SIGN UP</p>
            <div className="form-group">
                <label for="exampleInputEmail1">NAME</label>
                <input type="text" className="form-control" ref={userRef} placeholder="Insert your username"></input>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input type="email" className="form-control" ref={emailRef} id="exampleInputEmail1" placeholder="example@email.com" aria-describedby="emailHelp"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">PASSWORD</label>
                <input type="password" className="form-control" ref={passwordRef} id="exampleInputPassword1" placeholder="Password"></input>
                <button className="signupBtn">Sign Up</button>
            </div>
            {/*<input class="btn btn-primary" type="submit" value="SUBMIT"></input>*/}
            <a href="/login" className="toLogin">Already a member?<span><strong> Log In</strong></span></a>
            {/* aqui funcion para enviar a otro lado*/}
        </form>
    )
}

export default SignUpForm;
