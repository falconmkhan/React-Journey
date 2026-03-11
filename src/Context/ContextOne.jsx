import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

const ContextOne = ({children}) => {

    const [user, setUser] = useState("mustajab")
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        fetch("http://192.168.100.6:8000/api/products")
        // fetch("http://192.168.0.164:8000/api/products")
            .then(response => response.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            }
            )
            .catch((e) => console.log(e))
    }, [])

    useEffect(() => {
        fetch("http://192.168.100.6:8000/api/categories")
            .then(response => response.json())
            .then((data) => {
                setCategory(data)
                setLoading(false)
            }
            )
            .catch((e) => console.log(e))
    }, [])

    return(
        <UserContext.Provider value={{user,setUser, loading,setLoading, products,setProducts, category,setCategory}}>
        {children}
        </UserContext.Provider>
    )
}

export default ContextOne
