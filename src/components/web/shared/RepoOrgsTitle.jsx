import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../../assests/icons/search.svg";
import { ReactComponent as ArrowLeftIcon } from "../../../assests/icons/arrow-left.svg";
const RepoOrgsTitle = ({ title = "Title", filter, setFilter }) => {
  const history = useHistory();
  return (
    <>
      <div className="flex flex-wrap items-start justify-between">
        <h2 className="text-2xl leading-sung font-bold mb-6 text-dark capitalize">
          {title}
        </h2>
        <button
          onClick={() => history.goBack()}
          className="flex items-center text-dark-light bg-gray-light  px-6 py-2 rounded-lg max-w-max transition duration-300 hover:bg-gray focus:outline-none hover:text-dark text-base font-semibold"
        >
          <ArrowLeftIcon /> <span className="pl-2">Go Back </span>
        </button>
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label className="text-base font-semibold text-dark opacity-80">
          Search for <span className="lowercase">{title}</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10 pr-6 py-2 bg-gray max-w-xs w-full rounded-lg focus:outline-none"
            placeholder="Search"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 pl-3 text-dark opacity-70">
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoOrgsTitle;
