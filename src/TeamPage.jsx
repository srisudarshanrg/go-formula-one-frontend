import { Fragment, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

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
        <Fragment>
            <h1>This is the teams page</h1>
        </Fragment>
    )
}

export default TeamPage