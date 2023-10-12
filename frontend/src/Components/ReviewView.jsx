import React, { useEffect, useState } from "react";
import Star from "./Star";
import rev from "./RevPage.module.css";

import useAxiosPrivate from "../Hooks/UseAxiosPrivate";
const ReviewView = ({ id, newReviewAdded, setNewReviewAdded }) => {
    
    const [reviews, setReviews] = useState([]);
    const [userRating, setUserRating] = useState(3);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const controller = new AbortController();

        fetchReviews();
      

        setNewReviewAdded(false);

        return () => {
            controller.abort();
        };
    }, [newReviewAdded]);

    const fetchReviews = async () => {
        try {
            const response = await axiosPrivate.get(`/review/view/${id}`);
            setReviews(response.data.review.reviews);
            setUserRating(response.data.avgRating);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className={`col-lg-6 col-12`}>
                <h3 className={`${rev.main_section_heading} ms-2  text-center`}>
                    <span className={`text-secondary`}>{userRating}/</span>5
                </h3>

                <div className="row">
                    <span className={`text-center text-warning fs-3`}>
                        {" "}
                        <Star stars={userRating} />
                    </span>
                </div>

                <div className={`${rev.review_container}  mx-3`}>
                    {/* card review */}
                    {reviews.map((revv, index) => (
                        <div key={index} className={`card mx-4 mt-4 shadow ${rev.card_style}`}>
                            <div class="card-body">
                                <h4>{revv.name}</h4>
                                <span className="text-warning">
                                    <Star stars={revv.rating} />
                                </span>
                                <p className="card-text">{revv.rev}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ReviewView;
