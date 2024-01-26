import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";

 const Hi=()=>{
     let [num,setstate]=useState(0);
     return(
        <>
        <button onClick={Add}  className="btn btn-info mx-5">Add</button>
        <span className="mx-5 bg-info  ">{num}</span>
        <button onClick={Decrease} className="btn btn-info mx-1">Dec</button>
        </>  
     )

        function Add(){
            setstate(num+1)
        }
        function Decrease(){
            setstate(num-1)
        } 
}
export default Hi