import React from "react";
import "../button/Button.css";
import {toast} from "react-toastify";


function Button(props) {
  return (
   
    <button
      onClick={
        () => {props.onAdd(props.count);toast("Producto Agregado")}}
      className='btn btn-xs addToCart col-12 mt-auto align-self-start'>
      {props.text}
    </button>
  );
}

export default Button;
