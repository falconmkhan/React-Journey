import { createContext, useState } from "react"
import { Link } from "react-router-dom"

export const UserContext = createContext()

const ContextOne = ({children}) => {

    const [user, setUser] = useState("mustajab")

    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default ContextOne
