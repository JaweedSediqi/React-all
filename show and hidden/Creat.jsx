import { useState } from "react";

function Creat() {
    let [pp,setpp]=useState(false);
    const king=()=>{
        let flag=true;
        if(flag){
            setpp(true);
            flag=false;
        }else{
            setpp(false);
            flag=true;
        }
    }
    const kingg=()=>{
        setpp(false);
    }
    return ( <>
    <button onClick={king} >  Add</button>
    <button onClick={kingg} >  Add</button>
    {pp&& <h1>Allah</h1>}
    </> );
}

export default Creat;