
import { useRouteError } from "react-router-dom"

export default function Error (){
    const err = useRouteError();
    const { status, statusText, data } = err
    console.log(err)
    return (
        <>
            <h1>{status}</h1>
            <h2>{statusText}</h2>
            <p>{data}</p>
            
        </>
    )
}