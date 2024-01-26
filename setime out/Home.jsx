import { useState } from "react";
import Creat from "./Creat";
const Home = () => {
    let [name,setname]=useState('Ahamd');

    const King=()=>{
        setTimeout(() => {
            setname(name="Ali")
          }, 4000)
    }





    return (
        <div className="mt-4 pt-5" >
          <h2>my name is {name}</h2>
          <button onClick={King} >change</button>
        </div>
    )
}
export default Home;