import { Fragment, useEffect, useState } from "react";
import "./css/HomePage.css"
import CurrentDriver from "./components/CurrentDriver";
import Track from "./components/Track";
import { useOutletContext } from "react-router-dom";

function HomePage() {
    const [currentDrivers, setCurrentDrivers] = useState([]);
    const [currentTeams, setCurrentTeams] = useState([]);
    const [currentTracks, setCurrrentTracks] = useState([]);

    const { developmentBackendLink } = useOutletContext();
    const { productionBackendLink } = useOutletContext();

    // get 2024 info
    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(productionBackendLink + "home", requestOptions)
            .then(response => response.json())
            .then(data => {
                setCurrentDrivers(data.current_drivers);
                setCurrentTeams(data.current_teams);
                setCurrrentTracks(data.current_tracks);
            })
            .catch((error) => {
                console.log("Error:", error)
            })
    }, [])

    return (
        <Fragment>
            <div className="this-year">
                <h1 className="this-year-h1">2024 Formula 1 Stats</h1>            

                <div className="row" style={{marginTop: "2%"}}>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 currentDrivers">
                        <h3>Driver's Championship</h3>
                        {currentDrivers.map((driver) => (
                            <div key={driver.id}>
                                <CurrentDriver
                                    id={driver.id}
                                    name={driver.name}
                                    position={driver.position}
                                    number={driver.number}
                                    points={driver.points}
                                    team={driver.team}
                                    team_color={driver.team_color}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h3>Constructor's Championship</h3>
                        <div className="current-teams-table-div">
                            <table className="table table-dark table-striped table-hover current-teams-table">
                                <thead>
                                    <tr>
                                        <th style={{color: "#fc594e", fontWeight: "normal"}}>Constructors Position</th>
                                        <th style={{color: "#fc594e", fontWeight: "normal"}}>Name</th>
                                        <th style={{color: "#fc594e", fontWeight: "normal"}}>Total Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTeams.map((team) => (
                                        <tr key={team.id}>
                                            <td>{team.constructors_position}</td>
                                            {team.championship_winner === true
                                            ?   <td>👑 {team.name}</td> 
                                            :   <td>{team.name}</td>
                                            }
                                            <td>{team.total_points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                                    
                <div className="tracks-part">
                    <h3>Tracks</h3>
                    <div className="tracks-grid">
                        {currentTracks.map((track) => {
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
                                <Track
                                    key={track.id}
                                    modalID={modalID}
                                    name={track.name}
                                    content={content}
                                    image={track.image}
                                />
                            );             
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage