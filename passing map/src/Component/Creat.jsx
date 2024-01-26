const Creat = (props) => {
    let x=props.mayifo;
    return (
        <div className="pt-5 mt-5" >  
          <h1>{props.tittle}</h1>
            {x.map((e)=>(
             <div>
               <h1>{e.dep}</h1>
               <h1>{e.name}</h1>
             </div>
         ))}
       



        </div>
    )
}
export default Creat;