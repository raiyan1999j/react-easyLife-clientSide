import { useContext } from "react"
import { InfoProvider } from "../../ContextProvider/Context"
import { Navigate } from "react-router-dom";

export default function PrivetRoute({children}){
    const {user} = useContext(InfoProvider);

    if(!user){
        return <Navigate to='/login'/>
    }
    
    return(
        <>
            {children}
        </>
    )
}