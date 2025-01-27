import { Link, Outlet } from 'react-router-dom';
import './css/App.css';
import Footer from './components/Footer';
import logo from "./img/logo.jpg"
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [driverSearch, setDriverSearch] = useState([]);
  const [teamSearch, setTeamSearch] = useState([]);
  const [trackSearch, setTrackSearch] = useState([]);

  const developmentBackendLink = "http://localhost:10000/"
  const productionBackendLink = "https://go-react-formula-one-backend-production.up.railway.app/"

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted")
    console.log(searchQuery)

    let payload = {
      search_query: searchQuery,
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    }

    fetch(productionBackendLink + "search", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.message)
        } else {
          setDriverSearch(data.driver_search || []);
          setTeamSearch(data.team_search || []);
          setTrackSearch(data.track_search || []);

          console.log(data.ok)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand"><img src={logo} alt="logo" width="30" /> RaptorFormula</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/drivers" className="nav-link">Drivers</Link>
                </li>

                <li className="nav-item">
                    <Link to="/teams" className="nav-link">Teams</Link>
                </li>

                <li className="nav-item">
                    <Link to="/tracks" className="nav-link">Tracks</Link>
                </li>

                <li className="nav-item">
                    <Link to="/compare" className="nav-link">Compare</Link>
                </li>
                </ul>

                <form className="d-flex" role="search" onSubmit={handleSearchFormSubmit}>
                  <input 
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                  <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </div>
      </nav>
      {(driverSearch.length > 0 || teamSearch > 0 || trackSearch > 0) &&
        <div className="search-results">
          
          <hr />
        </div>
      }
      <div className="content">
        <Outlet context={{
          productionBackendLink,
          productionBackendLink,
        }}>

        </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
