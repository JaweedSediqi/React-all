import React from "react";
import  ReactDOM  from "react-dom";
import { Component } from "react";

function Parent(props){
    return (
        <div>
        <span className="m-4">{props.name}</span>
        <span className="m-4">{props.name}</span>
        <span className="m-4">{props.name}</span>
        </div>
    )
}
export default Parent