function Modal(props) {
    return (
        <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={props.style}>
            <div className="modal-dialog">
                <div className="modal-content text-bg-dark">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor: "#fff"}}></button>
                    </div>
                    <div className="modal-body">
                        {props.image !== null
                        &&   <img src={props.image} alt={props.name} style={{width: "100%", borderRadius: "10px", marginBottom: "5%"}} />  
                        }
                        {props.content}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal