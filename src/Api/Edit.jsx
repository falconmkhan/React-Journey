import { useContext, useEffect, useState } from "react"
import { data, useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../Context/ContextOne"

const EditData = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [edit, setEdit] = useState({
        title: "",
        price: "",
        category: "",
        description: ""
    })
    const { products, setProducts } = useContext(UserContext)

    useEffect(() => {
        const product = products.find((item) => item.id == id)
        if (product) {
            setEdit(product)
        }
        else {
            alert("No Product")
        }
    }, [id, products])


    function change(e) {
        const { name, value } = e.target
        setEdit((values) => ({ ...values, [name]: value }))
    }

    const update = (e) => {
        e.preventDefault()
        // fetch(`https://fakestoreapi.com/products/${id}`, 
        fetch(`http://192.168.0.164:8000/api/products${id}`,     
        {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                ...edit,
                price: Number(edit.price),
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG71-twoz2sc5txz2n4IOivRckq8cuE46Fg&s"
            })
        })
            .then((res) => res.json())
            // .then((data) => {
            //     setProducts(data)
            //     navigate('/api')
            // })
            .then((data) => {
                const updatedList = products.map((item) =>
                    item.id == id ? data : item
                )

                setProducts(updatedList)
                navigate("/api")
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={update}>
                            <input type="text" name="title" value={edit.title} onChange={change} />
                            <br />

                            <input type="number" name="price" value={edit.price} onChange={change} />
                            <br />

                            <input type="text" name="description" value={edit.description} onChange={change} />
                            <br />

                            <input type="text" name="category" value={edit.category} onChange={change} />
                            <br />

                            <button className="btn" type="submit">Update</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditData