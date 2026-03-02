import { createContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const UserContext = createContext()

const ContextOne = ({children}) => {

    const [user, setUser] = useState("mustajab")
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            }
            )
            .catch((e) => console.log(e))
    }, [])

    return(
        <UserContext.Provider value={{user,setUser, loading,setLoading, products,setProducts}}>
        {children}
        </UserContext.Provider>
    )
}

export default ContextOne
