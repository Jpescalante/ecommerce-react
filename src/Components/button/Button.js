import React from "react";
import "../button/Button.css";


function Button(props) {
  return (
   
    <button
      onClick={
        () => {props.onAdd(props.count)}}
      className='btn btn-xs addToCart col-12 mt-auto align-self-start'>
      {props.text}
    </button>
  );
}

export default Button;
