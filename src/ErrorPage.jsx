import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();

    return (
        <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
            <h1>Oops!</h1>
            <p>An unexpected error has occurred</p>
            <em>{error.statusText || error.message}</em>
        </div>
    )
}

export default ErrorPage