import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookaction from "./bookaction.module.css";
import AddBook from "./AddBook";
import rev from "../RevPage.module.css";
import Star from "../Star";
import useAxiosPrivate from "../../Hooks/UseAxiosPrivate";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axios from "../../api/axios";

const BookActions = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [update, setUpdate] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const [reviews, setReviews] = useState([]);
    const [userRating, setUserRating] = useState(3);
    const [bookDeleted, setBookDeleted] = useState(false);

    useEffect(() => {
        axios
            .get(`/books/${id}`)

            .then((response) => {
                console.log(response.data.Data);
                setBook(response.data.Data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        fetchReviews();

        return () => {
            controller.abort();
        };
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axiosPrivate.get(`/review/view/${id}`);
            setReviews(response.data.review.reviews);
            setUserRating(response.data.avgRating);
            console.log(response.data.avgRating);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDelete = async () => {
        try {
            
            const response = await axiosPrivate.delete(`/books/deletebook/${id}`);
            navigate('/admindash')
           
        } catch (error) {
            console.error(error);
        }
    };
    return (
        // ${bookaction}
        <>
            {!update ? (
                <main className={` w-100 row pt-5`}>
                    <section className={`col-lg-6  ${bookaction.main_container_admin}`}>
                        <h1 className={`${rev.main_section_heading} ms-2  text-center`}>
                            <span className={`text-secondary`}>{userRating}/</span>5
                        </h1>

                        <div className="row">
                            <span className={`text-center text-warning fs-3`}>
                                {" "}
                                <Star stars={userRating} />
                            </span>
                        </div>

                        <div className={`${rev.review_container}  mx-3`}>
                            {/* card review */}
                            {reviews.map((revv, index) => (
                                <div className={`card mx-4 mt-4 shadow`}>
                                    <div class="card-body">
                                        <h4>{revv.name}</h4>
                                        <span className="text-warning">
                                            <Star stars={revv.rating} />
                                        </span>
                                        <p class="card-text">
                                            <p class="card-text">{revv.rev}</p>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className={`col-lg-6 d-flex `}>
                        <img
                            className="col-lg-4 img-fluid cover-img"
                            src={book.imageUrl}
                            alt="hii"
                        />

                        <div className={`ms-4`}>
                            {" "}
                            <h1>{book.title}</h1>
                            <p>
                                Author: <span className="text-secondary">{book.author}</span>
                            </p>
                            <h5>
                                ISBN:<span className="text-secondary">{book.isbn}</span>
                            </h5>
                            <h5>
                                Year:
                                <span className="text-secondary">
                                    {new Date(book.year).getFullYear()}
                                </span>
                            </h5>
                            <h5>
                                Genre:<span className="text-secondary">{book.genre}</span>
                            </h5>
                            <button
                                onClick={() => setUpdate(true)}
                                className={`btn btn-primary mt-4`}
                            >
                                Edit Details
                            </button>
                            <button className={`btn btn-danger ms-3 mt-4`} onClick={handleDelete}>
                                <RiDeleteBin2Fill />
                            </button>
                        </div>
                    </div>
                </main>
            ) : (
                <AddBook bookData={book} clickedUpdate={update} />
            )}
        </>
    );
};

export default BookActions;
