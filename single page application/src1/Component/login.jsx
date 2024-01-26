import { useRef } from "react";
function Login() {
    let email = useRef(null);
    let pasword = useRef(null);
    const king = (e) => {
        e.preventDefault();
        console.log('-------------------');
        console.log(email.current.value);
        console.log(pasword.current.value);

    }
    return (<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={king} >
                        <div className="mb-3">
                            <label htmlFor="email"  >Email:</label>
                            <input ref={email} type="email" id="email" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">Password:</label>
                            <input ref={pasword} type="password" id="password" className="form-control" />
                        </div>

                        <button className="btn btn-primary" >Login</button>



                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default Login;