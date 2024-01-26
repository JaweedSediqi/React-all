import {Link} from 'react-router-dom'
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
                            <Link className="nav-link" to="/">Hmome</Link>
                        </li>

                        <li className="nav-item">
                        <Link class="nav-link " to="/users">users</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/login" aria-current="page">login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/Rejester" aria-current="page">Rejester</Link>
                        </li>
                
                     
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input type="text" className="form-control me-sm-2"    placeholder="Search" />
                        <button className="btn btnn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
}
export default Nav;