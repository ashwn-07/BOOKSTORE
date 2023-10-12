import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserHeader from "./User/UserDash/UserHeader";
import revStyle from "./RevPage.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewView from "./ReviewView";
import AddStars from "./AddStars";
import useAxiosPrivate from "../Hooks/UseAxiosPrivate";
import useAuth from "../Hooks/UseAuth";
import useCustomToast from "../Hooks/UseToast";

const ReviewPage = () => {
    const { id } = useParams();
    const { auth } = useAuth();
    const userid = auth.id;
    const [rating, setRating] = useState(0);
    const [rev, setRev] = useState("");
    const [newReviewAdded, setNewReviewAdded] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const bookParams = new URLSearchParams(useLocation().search);
    const booktTitle = bookParams.get("booktitle");
    const bookImage = bookParams.get("bookurl");
    const author = bookParams.get("author");
    const { toasting, setSuccessToast, setErrorToast } = useCustomToast();
    const [test, setTest] = useState(0)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
             toasting();

            const response = await axiosPrivate.post(
                `review/add/${id}`,
                {
                    userid,
                    rating,
                    rev,
                },
                {
                    withCredentials: true,
                }
            );
         
            setSuccessToast("Review Added");

            setNewReviewAdded(true);
            
        } catch (error) {

            if (error.response.status === 409) {

                setErrorToast("Review already added");

            } else if (error.response.status === 400) {

                setErrorToast("Write before submission");

            } else {
                setErrorToast("Something went wrong at our end");
                console.log(error);
            }
        }
    };
    useEffect(()=>{
         
                setTest()
        
            },[test])
           
    return (
        <>
            <UserHeader />

            <main className={`px-5 mt-4 ${revStyle.main_padding_mob}`}>
                <article className="row">
                    <section className="col-lg-6">
                        {/* test start */}
                        <div className="row mb-3 ps-lg-0">
                            {" "}
                            <div className=" col-lg-4 d-flex">
                                <div className="d-flex justify-content-center ">
                                    <img className="img-fluid rounded" src={bookImage} />
                                </div>
                            </div>
                            <div className="col-lg-5 ms-lg-0 ms-4 mt-3 mt-sm-0">
                                <h4>{booktTitle} </h4>
                                <h4>
                                    Author:<span className="text-secondary fs-5">{author}</span>
                                </h4>
                            </div>
                        </div>

                        {/* testing end */}
                        <div className={`d-flex  justify-content-between row`}>
                            <h2
                                className={`${revStyle.main_section_heading}  col-lg-6 col-sm-12 col-12`}
                            >
                                Add your Review
                            </h2>

                            <span
                                className={`col-lg-6 col-sm-12 col-12  d-flex justify-content-end text-secondary ${revStyle.span_style}`}
                            >
                                <AddStars rating={rating} setRating={setRating} />
                            </span>
                        </div>
                        <form className={`${revStyle.custom_label}`}>
                            <div class={`${revStyle.custom_label} form-group`}>
                                <label for="exampleFormControlTextarea1"></label>
                                <textarea
                                    class={` form-control shadow ${revStyle.Custom_textarea}`}
                                    style={{
                                        borderWidth: "12px",
                                        borderColor: "rgba(218, 143, 13, 0.236)",
                                    }}
                                    id="exampleFormControlTextarea1"
                                    rows="25"
                                    value={rev}
                                    onChange={(e) => setRev(e.target.value)}
                                />
                                <button
                                    className={`btn btn-warning text-white mt-3 ms-1 fs-5`}
                                    onClick={handleSubmit}
                                >
                                    {" "}
                                    Submit
                                </button>
                                <ToastContainer />
                            </div>
                        </form>
                    </section>

                    {/* Review display */}
                    <ReviewView
                        id={id}
                        setNewReviewAdded={setNewReviewAdded}
                        newReviewAdded={newReviewAdded}
                    />
                </article>
            </main>
        </>
    );
};

export default ReviewPage;
