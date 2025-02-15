import { Link, Outlet, useNavigate } from 'react-router-dom';
import './css/App.css';
import Footer from './components/Footer';
import logo from "./img/logo.jpg"
import { useEffect, useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [driverSearch, setDriverSearch] = useState([]);
  const [teamSearch, setTeamSearch] = useState([]);
  const [trackSearch, setTrackSearch] = useState([]);
  const [resultsExist, setResultsExist] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const navigate = useNavigate();

  const developmentBackendLink = "http://localhost:10000/"
  const productionBackendLink = "https://go-react-formula-one-backend-production.up.railway.app/"

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted")
    console.log(searchQuery)

    setSearchLoading(true);

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
          setResultsExist(false);
        } else {
          if ((data.driver_search && data.driver_search.length > 0) || 
              (data.team_search && data.teamSearch.length > 0) ||
              (data.track_search && data.track_search.length > 0)) {
            setDriverSearch(data.driver_search || []);
            setTeamSearch(data.team_search || []);
            setTrackSearch(data.track_search || []);
            setResultsExist(true)
          } else {
            navigate("/")
            setResultsExist(false);
          }
          console.log(data.ok)
        }
        setSearchLoading(false);
      })
      .catch(error => {
        console.log(error)
        setSearchLoading(false);
        setResultsExist(false);
      })
  }

  useEffect(() => {
    if (driverSearch.length > 0 || teamSearch.length > 0 || trackSearch.length > 0) {
      navigate("/search-results")
    }
  }, [driverSearch, teamSearch, trackSearch])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand"><img src={logo} alt="logo" width="30" /> Raptor<em style={{color: "#fe3021"}}>F1</em></Link>
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
      <div className="content">
        {!resultsExist &&
          <Alert
            className="alert-danger"
            content={`No results found for "${searchQuery}"`}
          />
        }
        {searchLoading &&
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        <Outlet context={{
          developmentBackendLink,
          productionBackendLink,
          navigate,
          driverSearch,
          setDriverSearch,
          teamSearch,
          setTeamSearch,
          trackSearch,
          setTrackSearch,
          searchQuery,
        }}>
        </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
