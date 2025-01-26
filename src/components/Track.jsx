import { Fragment } from "react"
import Modal from "./Modal"
import "../css/Track.css"

function Track(props) {
    return (
        <Fragment key={props.key}>
            <Modal
                id={props.modalID}
                title={props.name}
                content={props.content}
                image={props.image}
            />

            <button className="track-button" data-bs-toggle="modal" data-bs-target={`#${props.modalID}`}>
                <h3>{props.name}</h3>
            </button>
        </Fragment>
    )
}

export default Track