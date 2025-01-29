import { useOutletContext } from "react-router-dom"
import "./css/SearchPage.css"
import Driver from "./components/Driver";
import Track from "./components/Track";
import { useEffect, useState } from "react";

function SearchPage(props) {
    let { driverSearch, setDriverSearch, teamSearch, setTeamSearch, trackSearch, setTrackSearch, searchQuery, navigate } = useOutletContext();

    const [displayDrivers, setDisplayDrivers] = useState([]);
    const [displayTeams, setDisplayTeams] = useState([]);
    const [displayTracks, setDisplayTracks] = useState([]);

    useEffect(() => {
        if (driverSearch.length > 0 || teamSearch.length > 0 || trackSearch.length > 0) {
            setDisplayDrivers(driverSearch);
            setDisplayTeams(teamSearch);
            setDisplayTracks(trackSearch);

            setDriverSearch([]);
            setTeamSearch([]);
            setTrackSearch([]);
        }
    }, [driverSearch.length, teamSearch.length, trackSearch.length])

    return (
        <div className="search-results" style={{paddingTop: "1%"}}>
            <h1>Search Results</h1>

            <div className="alert alert-danger">
                Search query: {searchQuery}
            </div>

            <hr />
            
            <div className="category-results-div">
                <h4 style={{marginTop: "2px"}}>Drivers</h4>
                <h5>{displayDrivers.length} driver(s) found</h5>
                {displayDrivers.length > 0 && 
                    <div className="drivers">
                        {displayDrivers.map((driver) => (
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
                <h5>{displayTeams.length} team(s) found</h5>
                {displayTeams.length > 0 &&
                    <div className="teams">
                        {displayTeams.map((team) => (
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
                <h5>{displayTracks.length} track(s) found</h5>
                {displayTracks.length > 0 &&
                    <div className="tracksSearchPage">
                        {displayTracks.map((track) => {
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