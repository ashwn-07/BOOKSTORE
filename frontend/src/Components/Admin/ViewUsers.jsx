import React, { useState, useMemo, useEffect } from "react";
import Pagination from "../Pagination";
import data from "../data.json";
import "./ViewUsers.css";
import { FiEdit } from "react-icons/fi";
// import axios from "../../api/axios";
import { RiDeleteBin2Fill } from "react-icons/ri";
import UpdateRow from "./UpdateRow";
import useAxiosPrivate from "../../Hooks/UseAxiosPrivate"

let PageSize = 10;
const ViewUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdateClicked, setIsUpdateClicked] = useState(false);
    const [editId, setEditId] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await axiosPrivate.get("/user/");
                setUsers(response.data);

                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        FetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log(id);

            const response = await axiosPrivate.delete(`/user/delete/${id}`);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    };

    const updateClicked = (item) => {
        setPhone(item.phone);
        setEmail(item.email);
        setName(item.name);
        setIsUpdateClicked(true);
        setEditId(item._id);
    };
    const handleUpdate = async (id) => {
        try {
         const response =  await axiosPrivate.put(
                `/user/edit/${id}`,
                { phone, name, email },
                {
                    withCredentials: true,
                }
            );

            setIsUpdateClicked(false)
            setEditId(false)


        } catch (error) {
            console.log(error)
        }
      
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return users.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, users]);
    useEffect(() => {
        console.log(phone, name, email);
    });
    return (
        <>
            {!isLoading ? (
                <main className="d-block mt-5 vw-100 main-margin">
                    <h1 className="main-heading">USERS LIST</h1>
                    <article className="container mb-4">
                        <div className="table-inner shadow">
                            <table className="">
                                <thead>
                                    {!isUpdateClicked ? (
                                        <tr>
                                            <th>NAME</th>

                                            <th>EMAIL</th>
                                            <th>PHONE</th>
                                            <th>UPDATE</th>
                                            <th>DELETE</th>
                                        </tr>
                                    ) : (
                                        <tr>
                                            <th>NAME</th>

                                            <th>EMAIL</th>
                                            <th>PHONE</th>
                                            <th>SAVE</th>
                                            <th>CANCEL</th>
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {currentTableData.map((item) => {
                                        return !(editId === item._id) ? (
                                            <tr>
                                                <td>
                                                  
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {" "}
                                                    {item.email}
                                                  
                                                </td>
                                                <td>
                                                  
                                                    {item.phone}
                                                </td>
                                                <td>
                                                    <button
                                                        className={`btn btn-primary`}
                                                        onClick={() => updateClicked(item)}
                                                    >
                                                        <FiEdit />
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className={`btn btn-danger`}
                                                        onClick={() => handleDelete(item)}
                                                    >
                                                        <RiDeleteBin2Fill />
                                                    </button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <UpdateRow
                                                item={item}
                                                handleUpdate={handleUpdate}
                                                setName={setName}
                                                setPhone={setPhone}
                                                setEmail={setEmail}
                                                phone={phone}
                                                email={email}
                                                name={name}
                                                setIsUpdateClicked={setIsUpdateClicked}
                                                setEditId={setEditId}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={users.length}
                            pageSize={PageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </article>
                </main>
            ) : (
                "Loading....."
            )}
        </>
    );
};

export default ViewUsers;
