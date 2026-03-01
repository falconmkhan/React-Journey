import { useContext } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import { UserContext } from "./Context/ContextOne"



const Navbar = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <nav>
                <ul>
                    <li>
                        App is Using By {user}
                    </li>
                    <li>
                        <Link to="/">Home Page</Link>

                    </li>
                    <li>
                        <Link to="/conditionals">Conditional Page</Link>

                    </li>
                    <li>
                        <Link to="/attributes">Attribute Page</Link>

                    </li>
                    <li>
                        <Link to="/propss">Props Page</Link>

                    </li>
                    <li>
                        <Link to="/parent">Props Parent Page</Link>
                    </li>
                    <li>
                        <Link to="/router">Router Page</Link>

                    </li>
                    <li>
                        <Link to="/hooks">Hooks Page</Link>

                    </li>
                    <li>
                        <Link to="/fetchdata">Fetch Data</Link>

                    </li>
                    <li>
                        <Link to="/forms">Forms </Link>
                    </li>
                    <li>
                        <Link to="/api">Api </Link>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar