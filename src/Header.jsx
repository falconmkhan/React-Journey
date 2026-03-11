import reactLogo from './assets/react.svg'
import { useState } from 'react'


function Header() {
    //  State In React======================================================================= 
    // Why We Use State:
    // To create dynamic UIs: Regular JavaScript variables do not persist their values when a 
    // component re-renders, and changes to them do not trigger re-renders.
    // Key Benefits:
    // Automatic UI Updates: You don't have to manually manipulate the DOM (Document Object Model) when data changes. You simply update the state, and React efficiently handles updating the UI to match the new state.

    const [table2, setCount2] = useState(2)
    const [table5, setCount5] = useState(5)


    return (
        <>



            <nav>
                <div>
                    <a target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>First React App</h1>
                    <button onClick={() => setCount2((table2) => table2 += 2)}>
                        Table Of 2 = {table2}
                    </button>
                    <button onClick={() => setCount5((table5) => table5 += 5)}>
                        Table Of 5 =  {table5}
                    </button>
            </nav>


        </>
    )
}

export default Header