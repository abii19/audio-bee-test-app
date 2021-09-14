import React from "react";

const Loader = () => {
  return (
    <>
      <div className="absolute w-full h-full grid place-items-center bg-gray-900 bg-opacity-30 z-20">
        <div className="w-24 h-24 relative transform -translate-x-1/2 loader">
          <svg className="circular-loader" viewBox="25 25 50 50">
            <circle
              className="loader-path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#70c542"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Loader;
