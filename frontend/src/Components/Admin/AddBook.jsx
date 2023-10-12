import React, { useEffect, useState } from "react";
import AddBookCss from "./AddBook.module.css";
import { GiCardDiscard } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../../Hooks/UseAxiosPrivate";
import { ToastContainer } from "react-toastify";
import useCustomToast from "../../Hooks/UseToast";

const AddBook = ({ bookData, clickedUpdate, setClickedUpdate }) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [isbn, setIsbn] = useState();
    const [genre, setGenre] = useState();
    const [year, setYear] = useState();
    const [bookcover, setBookcover] = useState();
    const [bookPreview, setBookPreview] = useState();
    const [clearFile, setClearFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [updateValues, setUpdateValues] = useState(clickedUpdate);
    const { toasting, setSuccessToast, setErrorToast } = useCustomToast();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title, bookcover);
        const formData = new FormData();

        formData.append("title", title);
        formData.append("author", author);
        formData.append("isbn", isbn);
        formData.append("genre", genre);
        formData.append("bookcover", bookcover);
        formData.append("year", year);

        if (clickedUpdate) {
            try {
                toasting();

                const updatedData = await axiosPrivate.put(`/books/updatebook/${id}`, formData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                setSuccessToast("book details Updated");
                setClickedUpdate(false);
                
            } catch (error) {
                console.log(error);
                if (error?.response?.status === 400) {
                    setErrorToast("Fill in All the Fields");
                } else if (error?.response?.status === 404) {
                    setErrorToast("Book does not exist");
                } else {
                    console.log(error);
                    setErrorToast("Something went wrong");
                }
            }
        } else {
            try {
                toasting();

                const data = await axiosPrivate.post(
                    "/books/add",

                    formData,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                navigate("/admindash");
            } catch (error) {
                if (error?.response?.status === 400) {
                    setErrorToast("Fill in All the Fields");
                } else {
                    console.log(error);
                    setErrorToast("Something went wrong");
                }
            }
        }
    };


    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        setBookcover(e.target.files[0]);
        setBookPreview(url);
        setIsSelected(true);
    };


    useEffect(() => {
        if (updateValues) {
            setAuthor(bookData.author);
            setGenre(bookData.genre);
            setTitle(bookData.title);
            setIsbn(bookData.isbn);
            setYear(bookData.year);
            setBookcover(bookData.bookcover);
            setBookPreview(bookData.imageUrl);
            setIsSelected(true);
        }
        return () => {
            setUpdateValues(false);
        };
    }, [updateValues]);


    const handleClearFile = () => {
        setClearFile("");
        setBookPreview(undefined);
        setBookcover(undefined);
        setIsSelected(false);
    };

    return (
        <>
            <main className={`${AddBookCss.main_container} vw-100 me-5`}>
                <article className={`row`}>
                    <section
                        className={`col-lg-6 col-md-6 col-sm-12 col-12 vh-100 d-flex flex-column justify-content-center align-items-center ${AddBookCss.cover_outer_mob}`}
                    >
                        <div
                            className={`bg-light ${AddBookCss.cover_conatiner} rounded shadow-lg d-flex justify-content-center align-items-center`}
                        >
                            <div
                                className={`${AddBookCss.cover_inner_container} d-flex justify-content-center align-items-center text-secondary `}
                            >
                                {!isSelected ? (
                                    <h2>Drag & Drop</h2>
                                ) : (
                                    <img className={`h-100  rounded w-100`} src={bookPreview} />
                                )}
                            </div>
                        </div>

                        <div className={`d-flex mt-4 col-lg-6 justify-content-between px-4 py-2`}>
                            <label
                                className={`${AddBookCss.select_label} pe-3 pe-md-0`}
                                htmlFor="imgselect"
                            >
                                {" "}
                                <input
                                    className={`my-4 mb-4 ${AddBookCss.file_input}`}
                                    id="imgselect"
                                    type="file"
                                    hidden
                                    onChange={handleFileChange}
                                    value={clearFile}
                                />
                                <span className={"btn btn-primary"}>Select Image</span>
                            </label>

                            <button
                                className={` btn outlined btn-danger`}
                                onClick={handleClearFile}
                            >
                                {" "}
                                <GiCardDiscard />
                                Cancel
                            </button>
                        </div>
                    </section>

                    {/* form */}

                    <section
                        className={`col-lg-6 col-md-6 col-sm-12 col-12  ${AddBookCss.mob_margin} d-flex justify-content-center align-items-center flex-column`}
                    >
                        <ToastContainer />
                        <h2 className={`mb-5 pb-3 ${AddBookCss.heading_style}`}>
                            Enter The Book Details
                        </h2>
                        <form className={`${AddBookCss.form_container}`} action="">
                            <div className={`row px-3 py-3`}>
                                <div className={`col-lg-6 col-sm-12 col-12 py-3`}>
                                    <label className={`${AddBookCss.form_label}`}>Book Title</label>
                                    <input
                                        className={`${AddBookCss.form_input} form-control`}
                                        style={{ display: "block" }}
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12  py-3">
                                    {" "}
                                    <label className={`${AddBookCss.form_label}`}>Author</label>
                                    <input
                                        className={`${AddBookCss.form_input} form-control`}
                                        style={{ display: "block" }}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        value={author}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12  py-3">
                                    {" "}
                                    <label className={`${AddBookCss.form_label}`}>ISBN</label>
                                    <input
                                        className={`${AddBookCss.form_input} form-control`}
                                        style={{ display: "block" }}
                                        onChange={(e) => setIsbn(e.target.value)}
                                        value={isbn}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12  py-3">
                                    {" "}
                                    <label className={`${AddBookCss.form_label}`}>Genre</label>
                                    <input
                                        className={`${AddBookCss.form_input} form-control`}
                                        style={{ display: "block" }}
                                        onChange={(e) => setGenre(e.target.value)}
                                        value={genre}
                                    />
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    {" "}
                                    <label className={`${AddBookCss.form_label}`}>Year</label>
                                    <input
                                        className={`${AddBookCss.form_input} form-control`}
                                        style={{ display: "block" }}
                                        onChange={(e) => setYear(e.target.value)}
                                        value={clickedUpdate ? new Date(year).getFullYear() : year}
                                    />
                                </div>
                            </div>

                            <div className={`col-lg-4 col-sm-6 col-5  mt-3 rounded mx-3`}>
                                {!clickedUpdate ? (
                                    <button
                                        type="submit"
                                        className="btn-success btn w-100 mb-5"
                                        onClick={handleSubmit}
                                    >
                                        Add
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn-success btn w-100 mb-5"
                                        onClick={handleSubmit}
                                    >
                                        Update
                                    </button>
                                )}
                            </div>
                        </form>
                    </section>
                </article>
            </main>
        </>
    );
};

export default AddBook;
