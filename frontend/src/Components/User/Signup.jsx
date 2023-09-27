import React, { useEffect, useRef, useState } from "react";
import sideimg from "../../Img/book.jpg";
import "./Signup.css";
import axios from "../../api/axios";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHN_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const REGISTER_URL = "/userSignup";

const Signup = () => {
    const emailRef = useRef();
    const errRef = useRef();
    const nameRef = useRef();
    const [nameFocus, setNameFocus] = useState(false);

    const [name, setName] = useState();

    const [email, setEmail] = useState();
    const [ValidEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [num, setNum] = useState();
    const [validNum, setValidNum] = useState(false);
    const [numFocus, setNumFocus] = useState(false);

    const [pwd, setpwd] = useState("");
    const [validPwd, setValidPwd] = useState();
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMSg, setErrMsg] = useState();
    const [success, setSuccess] = useState();

    useEffect(() => {
        nameRef.current.focus();
        setNameFocus(true);
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setValidNum(PHN_REGEX.test(num));
    }, [num]);

    useEffect(() => {
        setErrMsg("");
    }, [pwd, email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);

        if (!(pwd && num && email)) {
            setErrMsg("All feilds are required");
            return;
        } else if (!v1 || !v2) {
            setErrMsg("Please enter valid details");
            return;
        }

        try {
            const inputs = { email: email, password: pwd };
            const response = await axios.post(REGISTER_URL, inputs, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this

            setEmail("");
            setpwd("");
            setMatchPwd("");
            setName("");
            setNum("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Already Registered");
            } else {
                setErrMsg("Registration Failed, Please try again");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            <div className="row  m-0">
                <div className="col-md-6  col-sm-12 p-0 bg-primary">
                    <img className="img-fluid img-res" src={sideimg} />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="ms-5 pt-5">
                        <h1 className=" logo-style">Readly</h1>
                        <p className="main-textdesc">
                            Already a Member?
                            <span>
                                <a className="log-in" href="/login">
                                    Log in
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="signup-form pt-5 ms-5">
                        <h1 className="form-heading">Get Started</h1>
                        <form>
                            <div class="form-row">
                                <div class="col-md-6 col-sm-12 mb-4">
                                    <input
                                        value={name}
                                        ref={nameRef}
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div class="col-md-6 col-sm-12 mb-4">
                                    <input
                                        ref={emailRef}
                                        type="text"
                                        class="form-control"
                                        name="email"
                                        value={email}
                                        onFocus={(e) => setEmailFocus(true)}
                                        placeholder="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <p
                                        id="uidnote"
                                        className={
                                            emailFocus && email && !ValidEmail
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        Invalid e-mail!
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-4">
                                    <input
                                        type="password"
                                        class="form-control"
                                        name="password"
                                        placeholder="password"
                                        onChange={(e) => setpwd(e.target.value)}
                                        onFocus={(e) => setPwdFocus(true)}
                                    />

                                    <p
                                        id="confirmnote"
                                        className={
                                            pwd && pwdFocus && !validPwd
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        8 to 24 characters.
                                        <br />
                                        Must include uppercase and lowercase letters, a number and a
                                        special character.
                                        <br />
                                        Allowed special characters:{" "}
                                        <span aria-label="exclamation mark">!</span>{" "}
                                        <span aria-label="at symbol">@</span>{" "}
                                        <span aria-label="hashtag">#</span>{" "}
                                        <span aria-label="dollar sign">$</span>{" "}
                                        <span aria-label="percent">%</span>
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-4">
                                    <input
                                        type="password"
                                        class="form-control"
                                        name="confirmpassword"
                                        placeholder="Confirm password"
                                        value={matchPwd}
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        onFocus={(e) => setMatchFocus(true)}
                                    />

                                    <p
                                        id="confirmnote"
                                        className={
                                            matchFocus && !validMatch ? "instructions" : "offscreen"
                                        }
                                    >
                                        Must match the first password input field.
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-12 mb-5">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="phone"
                                        value={num}
                                        placeholder="Phone"
                                        onChange={(e) => {
                                            setNum(e.target.value);
                                        }}
                                        onFocus={(e) => setNumFocus(true)}
                                    />
                                    <p
                                        id="confirmnote"
                                        className={
                                            numFocus && num && !validNum
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        Please enter a Valid phone number
                                    </p>
                                </div>
                                <div class="col-md-6 col-sm-12 ">
                                    <button
                                        disabled={
                                            name || email || pwd || matchPwd || num
                                                ? !validPwd || !validMatch
                                                    ? true
                                                    : false
                                                : false
                                        }
                                        type="submit"
                                        className="btn btn-dark btn-fnt w-100 fs-5"
                                        onClick={handleSubmit}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <p
                                    id="confirmnote"
                                    className={errMSg ? "instructions" : "offscreen"}
                                >
                                    {errMSg}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
