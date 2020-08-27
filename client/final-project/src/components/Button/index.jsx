import React from "react";
import "./styles.css";

function Button(props) {
  return (
    <div>
       <button type="button" class="btn btn-outline-primary">{props.btnName}</button>
    </div>);
}

export default Button;