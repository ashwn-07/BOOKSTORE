import React, { createContext, useContext, useEffect, useState } from "react";
import admstyle from "./AdminSideBar.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBarContext = createContext({});

const AdminSideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <aside className={`h-100 ${admstyle.pos_nav}`}>
                <nav
                    className={`shadow bg-light h-100 d-flex flex-column px-3 border-right rounded-right ${
                        admstyle.transition_close
                    } ${!isOpen ? "w-100" : admstyle.sidebar_nav_close}`}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <div
                            className={`title-container ${
                                !isOpen ? "w-100" : admstyle.sidebar_close
                            } ${admstyle.transition_close} `}
                        >
                            <div
                                className={`bg-light overflow-hidden  ${
                                    !isOpen ? "w-75" : admstyle.sidebar_close
                                } ${admstyle.transition_close}`}
                            >
                                <a className="navbar-brand logo-style" href="/">
                                    Readly
                                </a>
                            </div>
                        </div>

                        {!isOpen ? (
                            <FaArrowCircleLeft
                                className={admstyle.icon_style}
                                onClick={() => setIsOpen((curr) => !curr)}
                            />
                        ) : (
                            <FaArrowCircleRight
                                className={admstyle.icon_style}
                                onClick={() => setIsOpen((curr) => !curr)}
                            />
                        )}
                    </div>

                    <SideBarContext.Provider value={{ isOpen }}>
                        <ul className={``}>{children}</ul>
                    </SideBarContext.Provider>

                    <div className={"d-flex p-1 " + admstyle.proile_pos}>
                        <img
                            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                            alt=""
                            className={`rounded ${admstyle.avatar_img}`}
                        />
                        <div
                            className={`
              d-flex overflow-hidden justify-between items-center ${admstyle.transition_close}
              ${!isOpen ? "w-100" : admstyle.sidebar_close}
          `}
                        >
                            <div className={`lh-1 ps-3 b-0`}>
                                <h5 className="font-semibold lh-1">Admin</h5>
                                <span className="text-sm text-secondary">adminuser456@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export const SideBarItems = ({ icon, text, dest, signOut }) => {
    const { isOpen } = useContext(SideBarContext);

    return (
        <Link to={dest} onClick={signOut}>
            <li
                className={`fs-2 d-flex align-items-center py-3 ps-3 text-success rounded ${admstyle.hover_style}`}
            >
                {icon}

                <span
                    className={`overflow-hidden fs-5 ms-3 d-inline-block text-dark ${
                        admstyle.transition_close
                    } ${!isOpen ? "w-100" : admstyle.sidebar_close}  ${admstyle.link_text_style}`}
                >
                    {text}
                </span>
            </li>
        </Link>
    );
};

export default AdminSideBar;
