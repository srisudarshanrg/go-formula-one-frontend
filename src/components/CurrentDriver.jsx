import "../css/CurrentDriver.css"

function CurrentDriver(props) {
    return (
        <div className="current-driver" style={{border: `3px solid ${props.team_color}`}} id={props.id}>
            {props.championship_winner === true
            ?   <h3>👑 {props.position}. <span className="driverNumber"></span> {props.name}</h3>
            :   <h3>{props.position}. <span className="driverNumber">#{props.number}</span> {props.name}</h3>
            }
            <p>{props.points} points | {props.team}</p>
        </div>
    )
}

export default CurrentDriver