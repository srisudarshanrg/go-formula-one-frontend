function Driver(props) {
    return (
        <div className="driver" style={props.style}>
            <div className="card text-bg-dark">
                <div className="card-header">{props.name}</div>
            
                <div className="card-body">
                    <p>{props.age} years old</p>
                    <p>{props.nationality}</p>
                    <hr />
                    <h5>Race Stats</h5>
                    <p>{props.pole_positions} poles</p>
                    <p>{props.podiums} podiums</p>
                    <p>{props.wins} wins</p>
                    <p>{props.championships} championships</p>
                </div>

                <div className="card-footer">
                    <hr />
                    <p>{props.number_years_driven} years driven in Formula 1</p>
                </div>
            </div>
        </div>
    )
}

export default Driver