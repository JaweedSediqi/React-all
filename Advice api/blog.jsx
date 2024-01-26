import { useEffect, useState } from "react";
function Blog() {
    let [count,setcount]=useState(0);
    let [advice,setAdvce]=useState('');
    async function Bing(){
        const res=await fetch('https://api.adviceslip.com/advice');
        const data= await res.json();
        setAdvce(data.slip.advice);
        setcount((c)=>c+1);
    }
    useEffect(function (){
        Bing();
    },[]);
    return ( 
        <>
        <p>{advice}</p>
        <button onClick={Bing}>Ok</button>
        <p>times that you clicked is {count}</p>

        </>
    );
}

export default Blog;
