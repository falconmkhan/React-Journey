// JSX allows you to insert attributes into HTML elements, but there are a few important differences.
// class = className


function Attributes(){
    // class attribute 
    const a = "hello"

    // onClick even attribute
    const myFunction = ()=>{
        alert("btn clicked")
    }

    // The style Attribute
    const myStyles = {
        color: "black",
        backgroundColor: "white"
    }
    return (
        <>
        <h1>React JSX Attributes</h1>
        <h3 className="my_class">Class Attribute</h3>

        <h3 className={a}>Expressions as Attributes  "{a}"</h3>
       
        <br />
        Here its onclick. Cheack Console for Error
        <button onclick="myFunction()" >In Js "Here Wont Work"</button>  

        But in react it's onClick (camelCase)
        <button onClick={myFunction} >In React "This Will Work"</button>

        Now button becomes disabled it's called Boolean Attribute
        <button disabled>Disabled Button</button>
        <button disabled={true}>Disabled With True</button>
        <br /> <br />
        Style Attribute 
        <button style={myStyles}>Style Attribute</button>
        Inline Style Attribute 
        <button style={{color: "black", background: "Pink"}}>Inline Styling</button>
        </>
    )
}


export default  Attributes