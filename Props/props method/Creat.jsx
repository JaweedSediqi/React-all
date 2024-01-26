import { useState } from "react";
import Home from "./Home";

const Creat = (props) => {
    return (
        <div className="mt-5 pt-5" >
            <button onClick={()=>{props.myfuction("Ahmad")}}>OK</button>
        </div>
    )
}
export default Creat;