import React from "react";
import "./styles.css"

function Loading() {
    return(
        <div className="container imageCont">
            <h4 className="loadingMsg">Searching for flights...</h4>
            <img className="loading" src="https://i.pinimg.com/originals/43/3b/6c/433b6c5336c72a21bcfd9db8d831562a.gif"></img>
        </div>
    )
}

export default Loading;