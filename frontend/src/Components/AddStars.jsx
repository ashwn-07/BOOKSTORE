import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import addstars from "./AddStars.module.css";
const AddStars = ({ rating, setRating }) => {
    const [hoverVal, setHoverVal] = useState(null);

  
    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className={`${addstars.input_radio}`}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            onMouseEnter={() => setHoverVal(ratingValue)}
                            onMouseLeave={() => setHoverVal(null)}
                            color={ratingValue <= (hoverVal || rating) ? "#f1c232" : "#E5E5E5"}
                            className={`${addstars.style_star}`}
                            size={35}
                        />
                    </label>
                );
            })}
        </>
    );
};

export default AddStars;
