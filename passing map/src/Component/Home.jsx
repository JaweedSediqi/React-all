import { useState } from "react";
import Creat from "./Creat";
const Home = () => {
    let [info, setinfo] = useState([
        { name: "Ahmad", id: 1, dep: "Software" },
        { name: "Nasir", id: 2, dep: "N" },
        { name: "Fahim", id: 3, dep: "D" },
    ])
    return (
        <div className="mt-4 pt-5" >
            <Creat mayifo={info} tittle="All of them" />

        
            
        </div>
    )
}
export default Home;