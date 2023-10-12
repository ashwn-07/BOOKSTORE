import { useState } from "react";
import { toast } from "react-toastify";

const useCustomToast = () => {


    let toastinstance = null;

    const toasting = () => {
        toastinstance = toast.loading("saving....", {
            position: toast.POSITION.TOP_LEFT,
        });
    };

    const setSuccessToast = (successmsg) => {
        return toast.update(toastinstance, {
            render: successmsg,
            type: "success",
            isLoading: false,
            autoClose:5000,
            closeButton: true,
            position: toast.POSITION.TOP_LEFT,
        });
    };

    const setErrorToast = (errMsg) => {
        return toast.update(toastinstance, {
            render: errMsg,
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
            position: toast.POSITION.TOP_LEFT,
        });
    };

    return { toasting, setSuccessToast, setErrorToast };
};

export default useCustomToast;
