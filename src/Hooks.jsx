import { useEffect, useState } from "react"

const Hooks = () => {

    // Use State 
    const [model, setModel] = useState()

    const style = {
        color: "black",
        background: "pink"
    }

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    })

    return (
        <>
            <h1>Hooks In React</h1>
            <h2>What is a Hook ?</h2>
            <h3>Hooks allow functions to have access to state and other React features without using classes.
                They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
            </h3>
            <h3>Hooks are functions that let you "hook into" React state and lifecycle features from functional components.</h3>



            <h2>1. UseState()</h2>
            <h3>The React useState Hook allows us to track state in a function component.
                State generally refers to data or properties that need to be tracking in an applicatio
            </h3>

            <h3>Laptop is: Lenovo</h3>
            <h3>Which model you want</h3>
            <div>
                <ul>
                    <li><button style={style} onClick={() => setModel("M50")}>M50</button></li>
                    <li><button style={style} onClick={() => setModel("L440")}>L440</button></li>
                    <li><button style={style} onClick={() => setModel("T14")}>T14</button></li>
                </ul>

            </div>
            {model && <h3>You Choose: {model} Model </h3>}
            {/* <h3>You choose: {model} Model</h3> */}


            <h2>2. UseEffect()</h2>
            <h3>
                The useEffect Hook allows you to perform side effects in your components.

                Some examples of side effects are: fetching data, directly updating the DOM, and timers.

                useEffect accepts two arguments. The second argument is optional.

                useEffect(function, dependency)
            </h3>

            <h2>Fetch Data Using UseEffect</h2>
            <div className="" style={{width:"200px",display:"flex",gap:'20px'}}>
                {data.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title.substring(0, 40)}...</h3>
                            <p className="price">${item.price}</p>
                        </div>
                    ))}
            </div>





            <h2>Hook Rules</h2>
            <h3>Hook Rules
                There are 3 rules for hooks:

                Hooks can only be called inside React function components.
                Hooks can only be called at the top level of a component.
                Hooks cannot be conditional
            </h3>
            <h2>Note:</h2>
            <h3> Hooks will not work in React class components.</h3>

        </>
    )

}


export default Hooks