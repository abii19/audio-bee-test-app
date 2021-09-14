import React from "react";
import { useSelector } from "react-redux";
import Toaster from "../../common/Toaster";
const WebLayout = (props) => {
  const { message } = useSelector((state) => state.toaster);
  return (
    <>
      {/* Show Toaster */}
      {message && <Toaster />}
      {/* Main Layout */}
      <div className="h-screen w-screen overflow-hidden">
        <section className="flex h-full">{props.children}</section>
      </div>
    </>
  );
};
export default WebLayout;
