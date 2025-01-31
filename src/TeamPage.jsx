import { Fragment, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Modal from "./components/Modal";
import "./css/TeamPage.css"

function TeamPage() {
    const { developmentBackendLink } = useOutletContext();
    const { productionBackendLink } = useOutletContext();

    const [teamsChampionships, setTeamsChampionships] = useState([]);
    const [teamsWins, setTeamsWins] = useState([]);
    const [teamsPodiums, setTeamsPodiums] = useState([]);
    const [teamsPoles, setTeamsPoles] = useState([]);
    const [currentTeams, setCurrentTeams] = useState([]);
    const [teamsSearchQuery, setTeamsSearchQuery] = useState("");
    const [teamsSearchResults, setTeamsSearchResults] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(productionBackendLink + "teams", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.log(data.message)
                } else {
                    setTeamsChampionships(data.teams_championships)
                    setTeamsWins(data.teams_wins)
                    setTeamsPodiums(data.teams_podiums)
                    setTeamsPoles(data.teams_poles)
                    setCurrentTeams(data.current_teams)

                    console.log(data.ok)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="teams-page">
            <div className="current-teams">
                <h3>Current Teams</h3>
                <div className="row">
                    {currentTeams.map((team) => {
                        let content = <div>
                            <h5>Constructor's Position: {team.constructors_position}</h5>
                            <h5>Drivers: {team.drivers}</h5>
                            <h5>Total Points Amassed: {team.total_points}</h5>
                            <h5>Highest Points Haul: {team.highest_points_haul}</h5>
                        </div>
                        return (
                            <Fragment>
                                <Modal
                                    id={`currentTeam${team.id}`}
                                    title={team.name}
                                    image={team.logo_link}
                                    content={content}
                                    style={{textAlign: "start"}}
                                />
                                
                                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                    <button data-bs-toggle="modal" data-bs-target={`#currentTeam${team.id}`} className="team-button">
                                        {team.name}
                                    </button>
                                </div>
                            </Fragment>                       
                        )
                    })}
                </div>
            </div>

            <hr />

            <div className="championship-teams">
                <h3>Teams With Championships</h3>
                <div className="row" style={{marginTop: "2%"}}>
                    {teamsChampionships.map((team) => {
                        let content = <div>
                            <h5>Championships: {team.championships}</h5>
                            <h5>Wins: {team.wins}</h5>
                            <h5>Podiums: {team.podiums}</h5>
                            <h5>Pole Positions: {team.poles}</h5>
                            <h5>Nationality: {team.nationality}</h5>
                            <h5>Year Joined: {team.year_joined}</h5>
                            <h5>Notable Cars: {team.notable_cars}</h5>
                        </div>

                        return (
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <Modal
                                    id={`championshipTeam${team.id}`}
                                    title={team.name}
                                    image={team.logo_link}
                                    content={content}
                                    style={{textAlign: "start"}}
                                />
                                <button className="team-button" data-bs-toggle="modal" data-bs-target={`#championshipTeam${team.id}`}>
                                    <p>{team.name}</p>
                                </button>
                            </div>
                        )  
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamPage