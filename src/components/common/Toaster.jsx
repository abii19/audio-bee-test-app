import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToaster } from "../../store/actions/toasterAction";
import { ReactComponent as Check } from "../../assests/icons/check.svg";
import { ReactComponent as Cross } from "../../assests/icons/cross.svg";
import { ReactComponent as Error } from "../../assests/icons/error.svg";
const Toaster = () => {
  const { type, message } = useSelector((state) => state.toaster);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideToaster());
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const closeToaster = () => {
    dispatch(hideToaster());
  };
  return (
    <>
      <div
        className={`alert showAlert ${message ? "show" : "hide"} ${
          type === "Success"
            ? "bg-green-100 border-green-500"
            : type === "Error"
            ? "bg-red-100 border-red-500"
            : ""
        }`}
      >
        <div className="flex">
          <div className="px-4 flex items-center">
            <div
              className={`${
                type === "Success"
                  ? "p-1 rounded-full border bg-green-100 border-green-500 text-green-500"
                  : type === "Error"
                  ? " text-red-500"
                  : ""
              }`}
            >
              {type === "Success" ? (
                <Check />
              ) : type === "Error" ? (
                <Error />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col py-2 pr-2">
            <h5>{type}</h5>
            <p>{message}</p>
          </div>
          <div
            className={`px-4 flex items-center ${
              type === "Success"
                ? "bg-green-300"
                : type === "Error"
                ? " bg-red-300"
                : ""
            }`}
          >
            <button
              className={`${
                type === "Success"
                  ? "text-green-600"
                  : type === "Error"
                  ? "text-red-600"
                  : ""
              }`}
              onClick={closeToaster}
            >
              <Cross />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toaster;
