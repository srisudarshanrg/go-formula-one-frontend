import { useOutletContext } from "react-router-dom"
import "./css/SearchPage.css"
import Driver from "./components/Driver";
import Track from "./components/Track";

function SearchPage(props) {
    let { driverSearch, teamSearch, trackSearch, navigate } = useOutletContext();

    if (driverSearch.length === 0 && teamSearch.length === 0 && trackSearch.length === 0) {
        navigate("/")
    }

    return (
        <div className="search-results" style={{paddingTop: "1%"}}>
            <h1>Search Results</h1>
            
            <div className="category-results-div">
                <h4 style={{marginTop: "2px"}}>Drivers</h4>
                {driverSearch.length > 0 && 
                    <div className="drivers">
                        {driverSearch.map((driver) => (
                            <div key={driver.id} className="driver">                    
                                <Driver
                                    name={driver.name}
                                    age={driver.age}
                                    pole_positions={driver.pole_positions}
                                    podiums={driver.podiums}
                                    wins={driver.wins}
                                    championships={driver.championships}
                                    number_years_driven={driver.number_years_driven}
                                    style={{marginTop: "2%"}}
                                />
                            </div>
                        ))}                        
                    </div>
                }
            </div>   

            <hr style={{marginTop: "2%"}} />
            
            <div className="category-results-div">
                <h4 style={{marginTop: "2px"}}>Teams</h4>
                {teamSearch.length > 0 &&
                    <div className="teams">
                        {teamSearch.map((team) => (
                            <div key={team.id} className="team">                    
                                <h3>{team.name}</h3>
                            </div>
                        ))}
                        <hr />
                    </div>
                }
            </div>

            <hr style={{marginTop: "2%"}} />
            
            <div className="category-results-div">
                <h4 style={{marginTop: "2px"}}>Tracks</h4>
                {trackSearch.length > 0 &&
                    <div className="tracksSearchPage">
                        {trackSearch.map((track) => {
                            let content = <div style={{textAlign: "start", marginTop: "2%"}}>
                                <p>Name: {track.name}</p>
                                <p>Length: {track.length} km</p>
                                <p>Number of corners: {track.number_corners}</p>
                                <p>Number of straights: {track.number_straights}</p>
                                <p>Number of DRS Zones: {track.number_drs_zones}</p>
                                <p>Year of introduction to F1: {track.year}</p>
                                <p>Country: {track.country}</p>                            
                            </div>
                            let modalID = `trackModal${track.id}`
                            return (
                                <div key={track.id} className="track">                    
                                    <Track
                                        style={{padding: "2%"}}
                                        modalID={modalID}
                                        name={track.name}
                                        content={content}
                                        image={track.image}
                                    />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchPage