import React from "react";
import {SiReddit, SiWhatsapp} from "react-icons/si"
import { FaInstagram, FaTwitterSquare} from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small blue pt-4 mt-5">
                <div className="container-fluid  text-left text-md-left">
                    <div className="row ">
                        <div className="col-md-6 mt-md-0 mt-3 ps-md-0 ps-lg-5">
                            <h5 className=" text-st" style={{ color: "#dc5d19" }}>
                                Readly
                            </h5>
                            <p className="fs-5">
                                Read <span>•</span> Learn <span>•</span> grow
                            </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3 mx-auto">
                            <h5 className="text-uppercase text-center">Connect with us</h5>
                            <ul className="list-unstyled d-flex  flex-wrap justify-content-between mt-4">
                                <li>
                                    <a href="/">
                                        <FaInstagram size={25} color="#c82e61" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FaTwitterSquare size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <SiWhatsapp size={25} color="#0a9127" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <SiReddit size={25} color="#dc5d19" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">
                    © 2023 Copyright:
                    <a
                        href="https://book-store-project-77se.onrender.com"
                        style={{ color: "orangered" }}
                    >
                        {" "}
                        Readly
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
