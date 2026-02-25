import { useContext, useState } from "react"

// const UserContext = useContext()
const [user, setUser] = useState("mustajab")

const Context = () => {
    return(
        <>
        <h1>{user}</h1>
        </>
    )
}

export default Context