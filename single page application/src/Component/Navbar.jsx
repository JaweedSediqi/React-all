import { Link } from 'react-router-dom'
function Nav() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark  sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"><h1>KING OF KINGS</h1></a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon  "></span></button>
                <div className="collapse navbar-collapse"></div>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link   active " to="/">Dashword</Link>
                        </li>

                        <li className="nav-item">
                            <Link class="nav-link " to="/Posts">Posts</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/Catagory" aria-current="page">Catagory</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/Users" aria-current="page">Users</Link>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Welcome Brand</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to='/profile'  >Profile</Link>
                                <Link className="dropdown-item" to='/settings'  >Settings</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Logout" aria-current="page">Logout</Link>
                        </li>
                    </ul>

                    <form className="d-flex my-2 my-lg-0" onSubmit={king} >

                        <input type="text" className="form-control me-sm-2" placeholder="wrtte your name" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"  >Submit</button>

                    </form>


                </div>
            </div>
        </nav>
    </>

}
const king = (e) => e.preventDefault();

export default Nav;