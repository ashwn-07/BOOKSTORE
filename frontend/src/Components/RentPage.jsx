import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "./User/UserDash/UserHeader";
import "./RentPage.css";
import useAxiosPrivate from "../Hooks/UseAxiosPrivate";
import axios from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RentPage = () => {
    const axiosPrivate = useAxiosPrivate();
    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState({});
    const [bookname, setBookName] = useState();
    const [libraryid, setLibraryId] = useState();
    const [author, setAuthor] = useState();
    const [phone, setPhone] = useState();
    const [Name, setName] = useState();
    const [responseMsg, setResponseMsg] = useState("");
    const [clicked, setClicked] = useState(false);

    useEffect( () => {
       fetchBook();
    }, []);

 const fetchBook = async ()=>{

    try {
        const response = await axios.get(`books/${id}`);

        console.log(response.data.Data);
        setBook(response.data.Data);

        setIsLoading(false);
       
    } catch (error) {
        console.log(error);
    }
 }



    useEffect(() => {
        setAuthor(book.author);
        setBookName(book.title);
    }, [isLoading]);



    const handleSubmit = (e) => {
        e.preventDefault();

        axiosPrivate.post(
                "/rent",
                {
                    author,
                    bookname,
                    libraryid,
                    Name,
                    phone,
                }
            )
            .then((response) => {

                toast.success("Rent Request Submitted", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            })
            .catch((err) => {
                if(err.response.status===400){

                    toast.error("Fill all the fields",  {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                }
            });
    };

    const { id } = useParams();
    return (
        <>
            <UserHeader />
            <div className="row m-0">
                <div className="col-lg-6  d-flex align-items-center">
                    <div className="row">
                        <div className="col-lg-6  d-flex justify-content-center align-items-center">
                            <div className="col-lg-10">
                                <img className="img-fluid  cover-img" src={book.imageUrl} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {" "}
                            <h2>{book.title}</h2>
                            <h5>
                                Author:&nbsp;
                                <span>
                                    <small>{book.author}</small>
                                </span>
                            </h5>
                            <h5>
                                ISBN:&nbsp;
                                <span className="text-secondary">
                                    <small>{book.isbn}</small>
                                </span>
                            </h5>
                            <h5>
                                Year:&nbsp;
                                <span>
                                    <small>{new Date(book.year).getFullYear()}</small>
                                </span>
                            </h5>
                            <h5>
                                Genre:&nbsp;
                                <span className="text-secondary">
                                    <small>{book.genre}</small>
                                </span>
                            </h5>
                            <h5>
                                Availability: &nbsp;
                                <span className="text-success">
                                    <small>{book.Status}</small>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div class="container">
                        <header class="header">
                            <h4 id="title" class="text-center h1-rent">
                                Rent Form
                            </h4>
                            <p id="description" class="text-center">
                                Submit your request for renting the book
                            </p>
                        </header>
                        <div class="form-wrap">
                            <form id="survey-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label id="name-label" for="name">
                                                Book Name
                                            </label>
                                            <h6 className="mt-3">{book.title}</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label id="email-label" for="email">
                                                Author
                                            </label>
                                            <h6 className="mt-3">{book.author}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label id="number-label" for="number">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="Name"
                                                id="user_name"
                                                class="form-control"
                                                placeholder=" Enter your Name"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Contact Number</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                id="number"
                                                class="form-control"
                                                placeholder="Phone"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Library ID</label>

                                            <input
                                                type="text"
                                                name="libraryid"
                                                id="number"
                                                class="form-control"
                                                placeholder="Library ID"
                                                onChange={(e) => setLibraryId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <p className={clicked ? "show-msg" : "hide-msg"}>
                                            {responseMsg}
                                        </p>
                                        <button
                                            type="submit"
                                            id="submit"
                                            class="btn btn-primary btn-block"
                                            onClick={handleSubmit}
                                        >
                                            Submit Request
                                        </button>
                                        <ToastContainer/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RentPage;
