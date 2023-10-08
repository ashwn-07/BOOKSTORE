import React from "react";
import { TiTick } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";

const UpdateRow = ({
    item,
    handleUpdate,
    setPhone,
    setEmail,
    setName,
    email,
    name,
    phone,
    setIsUpdateClicked,
    setEditId
    
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    className={`form-control `}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </td>
            <td>
                {" "}
                <input
                    type="text"
                    className={`form-control`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </td>
            <td>
                <input
                    type="text"
                    className={`form-control`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </td>
            <td>
                <button className={`btn btn-success`} onClick={() => handleUpdate(item._id)}>
                    <TiTick />
                </button>
            </td>
            <td>
                <button className={`btn btn-danger`} onClick={() =>{ setIsUpdateClicked(false); setEditId(false)}}>
                    <GiCancel />
                </button>
            </td>
        </tr>
    );
};

export default UpdateRow;
