import { useRef } from "react";
const First = (props) => {
    const myref = useRef(null);
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3 ">
                        <div className="input-group">
                            <input ref={myref} placeholder="weire" type="text" className="form-control" />
                            <span><button onClick={()=>console.log(myref.current.value)} className="btn btn-info">Ok</button></span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  

}
export default First;