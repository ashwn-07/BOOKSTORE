import React, { createContext, useContext, useEffect, useState } from "react";
import admstyle from "./AdminSideBar.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {BsMenuUp} from "react-icons/bs"
import useLogOut from "../../Hooks/UseLogOut";

const SideBarContext = createContext({});

const AdminSideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <aside className={`h-100 ${admstyle.pos_nav} d-none d-md-block`}>
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
                                <span className="text-sm text-secondary">
                                    adminuser456@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export const SideBarItems = ({
    icon,
    text,
    dest,
    signOut,
    itemName,
    activeName,
    setActiveName,
}) => {
    const { isOpen } = useContext(SideBarContext);

    return (
        <Link to={dest} onClick={signOut}>
            <li
                className={`fs-2 d-flex align-items-center py-2 mb-3 ps-3 text-success rounded ${
                    admstyle.hover_style
                } ${itemName === activeName ? admstyle.active : ""}`}
                onClick={(e) => {
                    setActiveName(e.target.getAttribute("data-name"));
                    console.log(e.target.getAttribute("data-name"));
                }}
                data-name={itemName}
            >
                {icon}

                <span
                    className={`overflow-hidden fs-6 ms-3 d-inline-block text-dark ${
                        admstyle.transition_close
                    } ${!isOpen ? "w-100" : admstyle.sidebar_close}  ${admstyle.link_text_style}`}
                    data-name={itemName}
                >
                    {text}
                </span>
            </li>
        </Link>
    );
};

export const MobNavBar = () => {

    const [expanded, setExpanded] = useState(false)
    const logOut = useLogOut();

    const signOut = async ()=>{
     
      await logOut();
    
    }
    return (
        <header className="bg-light d-md-none">
            <nav className="">
                <div className="d-flex justify-content-between px-3">
                    {" "}
                    <a className="navbar-brand logo-style" href="/">
                        Readly
                    </a>
                    <button className={`btn logo-style fs-2`} onClick={()=>setExpanded((prev)=>!prev)}><BsMenuUp/> </button>


                </div>

                <ul className={`px-3  ${expanded?admstyle.mob_nav_height_exp:admstyle.mob_nav_height_notexp}`} >
                    <div className="h-100">
                    <li className={`fs-2`}><a href="/" className={`${admstyle.mob_link_font}`}>Home</a></li>
                    <li className={`fs-2`}><a href="/admindash" className={`${admstyle.mob_link_font}`}>Books</a></li>
                    <li className={`fs-2`}><a href="/addbook" className={`${admstyle.mob_link_font}`}>Add Books</a></li>
                    <li className={`fs-2`}><a href="/view-users" className={`${admstyle.mob_link_font}`}>Users</a></li>
                    <li className={`fs-2`}><a onClick={signOut} className={`${admstyle.mob_link_font}`}>Log Out</a></li>
                    </div>
                </ul>
            </nav>{" "}
        </header>
    );
};

export default AdminSideBar;
