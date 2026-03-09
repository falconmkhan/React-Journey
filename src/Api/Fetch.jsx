import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../Context/ContextOne"
// import 'bootstrap/dist/css/bootstrap.min.css'

const FetchApi = () => {

    const { loading, products } = useContext(UserContext)


    return (
        <>
            <nav className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <h3 className="text-white m-0">Product List</h3>
                    <Link to="/api/createdata" className="btn btn-warning">
                        + Create Product
                    </Link>
                </div>
            </nav>

            {/* Table Section */}
            <div className="container mt-5">
                <div className=" shadow-lg border-0">
                    <div className="-">
                        {loading ? (
                            <h4 className="text-center text-muted">Loading products...</h4>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover table-striped align-middle">
                                    <thead className="table-dark text-center">
                                        <tr>
                                            <th>ID</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Category</th>
                                            <th>Image</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {products.map((item, key) => ( */}
                                        {Array.isArray(products) && products.map((item,key) => (
                                            <tr key={key}>
                                                <td className="fw-bold">{item.id}</td>

                                                <td style={{ maxWidth: "200px" }}>
                                                    {item.productname}
                                                </td>

                                                <td className="text-success fw-bold">
                                                    ${item.productprice}
                                                </td>

                                                <td style={{ maxWidth: "250px" }}>
                                                    {item.productdescr}
                                                    {/* {item.description.split(" ").slice(0, 10).join(" ")}... */}
                                                </td>

                                                <td>
                                                    {item.category.categoryname}
                                                </td>

                                                <td>
                                                    <img
                                                        src={item.productimage}
                                                        alt={item.productname}
                                                        style={{
                                                            width: "80px",
                                                            height: "80px",
                                                            objectFit: "contain",
                                                        }}
                                                        className="img-thumbnail"
                                                    />
                                                </td>
                                                <td>
                                                    <Link to="/api/createdata" className="btn btn-warning">
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </>
    )
}

export default FetchApi

