import React from "react";

const Forbidden = () => {
    return (
        <>
            <div className="row vh-100 m-0 flex-column" style={{paddingTop:"120px"}}>
                <h1 className="text-center text-secondary"> <span className="text-danger" style={{fontSize:"5rem"}}>403</span> Forbidden</h1>
                <p className="text-center fs-2">
                    Oops!! you do not have the permission to access this page
                </p>
            </div>
        </>
    );
};

export default Forbidden;
