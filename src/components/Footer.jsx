import { Link } from "react-router-dom"
import "../css/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <hr />
            <h1>Links</h1>
            <div className="row all-footer-links" style={{marginTop: "2%"}}>                
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-links">
                    <Link to="/drivers" style={{color: "#fe3021"}}>Drivers</Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-links">
                    <Link to="/teams" style={{color: "#fe3021"}}>Teams</Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-links">
                    <Link to="/tracks" style={{color: "#fe3021"}}>Tracks</Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-links">
                    <Link to="/compare" style={{color: "#fe3021"}}>Compare</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer