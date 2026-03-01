import { useEffect, useState } from "react"

const CreateData = () => {
    const [data, setData] = useState({})

    const check = (e) => {
        // OLD 
        // const name = e.target.name
        // const value = e.target.value

        // NEW
        const { name, value } = e.target

        setData((old_val) => ({ ...old_val, [name]: value }))

        console.log(name, "\t", value)
    }




    function submit(e) {
        e.preventDefault()

        fetch("https://fakestoreapi.com/products",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        .then(response => response.json())
        .then((data) => {
            setData(data)
            alert("form submitted")
        })
        .catch((e) => console.log(e))
        
    }

    return (
        <>

            <form onSubmit={submit}>


                <input type="text" name="title" onChange={check} placeholder="Title" />
                <br />

                <input type="number" name="price" onChange={check} placeholder="Price" />
                <br />

                <input type="text" name="desc" onChange={check} placeholder="Description" />
                <br />

                <input type="text" name="category" onChange={check} placeholder="Category" />
                <br />

                <input type="text" name="img" onChange={check} placeholder="Image"/>
                <br />

                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default CreateData