import React from "react";
import "./styles.css";

function SignUpForm(){
    return (
        <form className="form">
            <p className="form-title">SIGN UP</p>
            <div className="form-group">
                <label for="exampleInputEmail1">NAME</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">PASSWORD</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <input class="btn btn-primary" type="submit" value="SUBMIT"></input>
            <a href="#" className="changeForm">LOGIN</a>
        </form>
    )
}

export default SignUpForm