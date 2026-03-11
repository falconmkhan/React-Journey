import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/ContextOne"
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {

    const { category, setCategory } = useContext(UserContext);
    const navigate = useNavigate()

    const [data, setData] = useState({
        categoryname: "",
        categorydescr: "",
        categoryimage: ""
    })

    function check(e) {
        const { name, value, files } = e.target

        if (name === "categoryimage") {
            setData((values) => ({ ...values, categoryimage: files[0] }))
        }
        else {
            setData((values) => ({ ...values, [name]: value }))
        }

    }

    function submit(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("categoryname", data.categoryname)
        formData.append("categorydescr", data.categorydescr)
        formData.append("categoryimage", data.categoryimage)

        fetch("http://192.168.100.6:8000/api/categories",
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
                setCategory([...category, new_data])
                // console.log(products)
                navigate('/api/category')
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


                <input type="text" name="categoryname" onChange={check} placeholder="categoryname" />
                <br />

                <input type="text" name="categorydescr" onChange={check} placeholder="categorydescr" />
                <br />

                <input type="file" name="categoryimage" onChange={check} />
                <br />

                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default CreateCategory