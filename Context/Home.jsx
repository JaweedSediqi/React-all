import { useState } from "react";
import Creat from "./Creat";
import App from "../App";
import { useContext } from "react";
import mycontext from "./Context";

const Home = (props) => {
    const myname=useContext(mycontext);
    return (
        <div className="mt-4 pt-5" >
            <p> my section name is {myname.name1}</p>
            
        </div>
    )
}
export default Home;