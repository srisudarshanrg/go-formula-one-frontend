import { Fragment } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="/" className="navbar-brand">RaptorFormula</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/drivers" className="nav-link">Drivers</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/teams" className="nav-link">Teams</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/tracks" className="nav-link">Tracks</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/compare" className="nav-link">Compare</Link>
                        </li>
                        </ul>

                        <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar