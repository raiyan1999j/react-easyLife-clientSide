import { useContext } from "react"
import { InfoProvider } from "../../ContextProvider/Context"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivetRoute({children}){
    const {user} = useContext(InfoProvider);
    const location = useLocation();

    if(!user){
        return <Navigate to='/login' state={location.pathname}/>
    }
    
    return(
        <>
            {children}
        </>
    )
}