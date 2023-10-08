import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import ".././Home/Books/Books.css";
import { Link } from "react-router-dom";

const AdminView = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        axios.get("/books/")
            .then((response) => {
                console.log(response.data);
                setbooks(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <main className="ms-5">
                <article className="mt-5">
                    <div className="row g-4 ">
                        {books.map((value, index) => (
                            <div className="col-md-3 col-lg-3 mb-0" key={index}>
                                <div className="book-container">
                                    <div className="col-lg-6 mx-auto d-flex justify-content-center">
                                        <img
                                            className="img-fluid shadow cover-img"
                                            src={value.imageUrl}
                                            alt="hii"
                                        />
                                    </div>

                                    <h3 className="book-title">{value.title}</h3>
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/adminbookactions/${value._id}`}>
                                            {/* change to modal */}
                                            <button className="btn details-btn">View More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </main>
        </>
    );
};

export default AdminView;
