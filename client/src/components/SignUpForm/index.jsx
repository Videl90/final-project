import React from "react";
import "./styles.css";

//const isAuthenticated = require("../../../../config/middleware/isAuthenticated");

function SignUpForm(props){
    return (
        <div className="container">
            <form className="form" onSubmit={props.handleSubmitForm}>
                <p className="form-title">SIGN UP</p>
                <div className="form-group">
                    <label for="exampleInputEmail1">NAME</label>
                    <input type="text" className="form-control usernameInput" name="username" placeholder="Insert your username" {...props}></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">EMAIL</label>
                    <input type="email" className="form-control emailInput2" name="email" id="exampleInputEmail1" placeholder="example@email.com" aria-describedby="emailHelp" {...props}></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">PASSWORD</label>
                    <input type="password" className="form-control passwordInput2" name="password" id="exampleInputPassword1" placeholder="Password" {...props}></input>
                    <button className="signupBtn">Sign Up</button>
                    <a href="/login" className="toLogin">Already a member?<span><strong> Log In</strong></span></a>
                </div>
                {/*<input class="btn btn-primary" type="submit" value="SUBMIT"></input>*/}
                {/* aqui funcion para enviar a otro lado*/}
            </form>
        </div>
    )
}

export default SignUpForm;
