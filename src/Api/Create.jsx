import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/ContextOne"
import { useNavigate } from "react-router-dom";

const CreateData = () => {

    const { products, setProducts } = useContext(UserContext);
    const navigate = useNavigate()

    const [data, setData] = useState({
        productname: "",
        productprice: "",
        productdescr: "",
        category_id: "",
        productimage: ""
    })

    function check(e) {
        const { name, value, files } = e.target

        if (name === "productimage") {
            setData((values) => ({ ...values, productimage: files[0] }))
        }
        else {
            setData((values) => ({ ...values, [name]: value }))
        }

    }

    function submit(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("productname", data.productname)
        formData.append("productprice", data.productprice)
        formData.append("productdescr", data.productdescr)
        formData.append("productimage", data.productimage)
        formData.append("category_id", data.category_id)

        fetch("http://192.168.100.6:8000/api/products",
        // fetch("http://192.168.0.164:8000/api/products",
            {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: formData
                // body: JSON.stringify({
                //     ...formData,
                //     productprice: Number(data.productprice),
                //     category_id: Number(data.category_id),
                //     productimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYG71-twoz2sc5txz2n4IOivRckq8cuE46Fg&s"
                // })
            })
            .then((res) => res.json())
            .then((new_data) => {
                setProducts([...products, new_data])
                // console.log(products)
                navigate('/api')
                alert("Form Submitted")
            })
            .catch((e) => console.log(e))

        // .then((response) => {

        //     if (!response.success) {
        //         alert("Validation failed")
        //         console.log(response.errors)
        //         return
        //     }

        //     setProducts([...products, response.data])

        //     navigate("/api")
        //     alert("Product Created Successfully")
        // })


        console.log(data)
    }

    return (
        <>

            <form onSubmit={submit}>


                <input type="text" name="productname" onChange={check} placeholder="productname" />
                <br />

                <input type="number" name="productprice" onChange={check} placeholder="productprice" />
                <br />

                <input type="text" name="productdescr" onChange={check} placeholder="productdescr" />
                <br />

                <input type="number" name="category_id" onChange={check} placeholder="Category" />
                <br />

                <input type="file" name="productimage" onChange={check} />
                <br />

                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default CreateData