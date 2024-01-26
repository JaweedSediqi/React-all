import { useEffect, useState } from "react";

function Blog() {
    let [time,settime]=useState(new Date().toLocaleTimeString());
    useEffect(function(){
        setInterval(()=>{
            settime(new Date().toLocaleTimeString());
        },1000)
    });
    return ( <>
    <h1>{time}</h1>
    </> );
}

export default Blog;