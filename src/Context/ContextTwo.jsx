import { useContext } from "react"
import { UserContext } from "./ContextOne"

const ContextTwo = () => {
    const {user, setUser} = useContext(UserContext)
    return(
        <>
        <button onClick={()=> setUser("Faiz")}>Faiz</button>
       <h1>Context2</h1> 
       <h2>name Is {user} </h2>
        </>
    )
}


export default ContextTwo