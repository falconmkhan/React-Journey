import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/ContextOne"
import { useNavigate } from "react-router-dom";

const CreateData = () => {

    const {products, setProducts} = useContext(UserContext);
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: "",
        price: "",
        description: "",
        category: ""
    })

    function check (e){
        const {name, value} = e.target

        setData((values)=>({...values, [name]: value}))
    }

    function submit (e){
        e.preventDefault()
        fetch("https://fakestoreapi.com/products", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                price: Number(data.price),
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG71-twoz2sc5txz2n4IOivRckq8cuE46Fg&s"
            })
        })
        .then((res) => res.json())
        .then((new_data) => {
            setProducts([...products, new_data])
            navigate('/api')
            alert("Form Submitted")
        })
        .catch((e) => alert(e))
        console.log(data)
    }

    return (
        <>

            <form onSubmit={submit}>


                <input type="text" name="title" onChange={check} placeholder="Title" />
                <br />

                <input type="number" name="price" onChange={check} placeholder="Price" />
                <br />

                <input type="text" name="description" onChange={check} placeholder="Description" />
                <br />

                <input type="text" name="category" onChange={check} placeholder="Category" />
                <br />

                {/* <input type="text" name="image" onChange={check} placeholder="Image"/>
                <br /> */}

                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default CreateData