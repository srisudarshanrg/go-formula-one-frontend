function Alert(props) {
    return (
        <div className={`alert ${props.className}`} style={props.style}>
            {props.content}
        </div>
    )
}

export default Alert