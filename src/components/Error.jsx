import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    
    return (
        <div>
            <h1>Oops, Something went wrong!</h1>
            <h2 style={{color: "red"}}>{err.status} : {err.statusText}</h2>
            <h4>{err.data}</h4>
        </div>
    )
}

export default Error;