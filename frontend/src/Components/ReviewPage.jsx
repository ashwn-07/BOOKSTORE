import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "./User/UserDash/UserHeader";
import revStyle from "./RevPage.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewView from "./ReviewView";
import AddStars from "./AddStars";
import useAxiosPrivate from "../Hooks/UseAxiosPrivate";
import useAuth from "../Hooks/UseAuth";

const ReviewPage = () => {
    const { id } = useParams(); // book id
    const { auth } = useAuth();
    const userid = auth.id;
    const [rating, setRating] = useState(0);
    const [rev, setRev] = useState("");
    const [newReviewAdded, setNewReviewAdded] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(userid);
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

            toast.success("Review Added", {
                position: toast.POSITION.TOP_LEFT,
            });
            setNewReviewAdded(true);
        } catch (error) {
            if (error.response.status === 409) {
                toast.error("Review already added", {
                    position: toast.POSITION.TOP_LEFT,
                });
            } else if (error.response.status === 400) {
                toast.error("Please write before submission", {
                    position: toast.POSITION.TOP_LEFT,
                });
            } else {
                console.log(error);
            }
        }
    };
    return (
        <>
            <UserHeader />
            <main className={`px-5 mt-4 ${revStyle.main_padding_mob}`}>
                <article className="row">
                    <section className="col-lg-6">
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
