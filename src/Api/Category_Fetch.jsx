import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/ContextOne"
import { Link } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css'

const FetchCategory = () => {

    const { loading, category } = useContext(UserContext)


    return (
        <>
          <nav className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <h3 className="text-white m-0">Category List</h3>
                    <Link to="/api/createcategory" className="btn btn-warning">
                        + Create Category
                    </Link>
                </div>
            </nav>


            {/* Table Section */}
            <div className="container mt-5">
                <div className=" shadow-lg border-0">
                    <div className="-">
                        {loading ? (
                            <h4 className="text-center text-muted">Loading category...</h4>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover table-striped align-middle">
                                    <thead className="table-dark text-center">
                                        <tr>
                                            <th>ID</th>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {products.map((item, key) => ( */}
                                        { !loading && Array.isArray(category) && category.map((item,key) => (
                                            <tr key={key}>
                                                <td className="fw-bold">{item.id}</td>

                                                <td style={{ maxWidth: "200px" }}>
                                                    {item.categoryname}
                                                </td>

                                                <td style={{ maxWidth: "250px" }}>
                                                    {item.categorydescr}
                                                    {/* {item.description.split(" ").slice(0, 10).join(" ")}... */}
                                                </td>

                                                <td>
                                                    <img
                                                        src={item.categoryimage}
                                                        alt={item.categoryname}
                                                        style={{
                                                            width: "80px",
                                                            height: "80px",
                                                            objectFit: "contain",
                                                        }}
                                                        className="img-thumbnail"
                                                    />
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

export default FetchCategory

