import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, getUser } from "../../../store/actions/usersAction";

const InnerLoading = () => {
  return (
    <>
      <div className="text-center mt-4">
        <div className="flex items-center justify-center text-base font-semibold text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin w-10 h-10 text-primary"
            viewBox="0 0 64 64"
          >
            <path
              fill="currentColor"
              d="M50.287,32A18.287,18.287,0,1,1,32,13.713a1.5,1.5,0,1,1,0,3A15.287,15.287,0,1,0,47.287,32a1.5,1.5,0,0,1,3,0Z"
              dataname="Loading"
            />
          </svg>
          Processing
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const { selectedUser, loading, users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = useMemo(() => {
    let filteredData = users;
    if (filter) {
      filteredData = filteredData.filter((data) => {
        return data.login.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return filteredData;
  }, [users, filter]);

  return (
    <>
      <div className="flex flex-col gap-y-8 bg-gray-light bg-opacity-40 px-4 py-5 lg:p-8 border-r border-divider overflow-y-auto">
        <div className="flex flex-col gap-y-2">
          <div className="mb-2 hidden lg:block">
            <input
              type="text"
              className="px-4 py-2 border border-gray-200 rounded-lg shadow text-sm focus:outline-none"
              placeholder="Search user"
              value={filter}
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          {loading ? (
            <InnerLoading />
          ) : !loading && filteredUsers.length > 0 ? (
            filteredUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className={`flex items-center gap-x-3 px-4 py-2 rounded-lg cursor-pointer ${
                    user.login === selectedUser
                      ? "bg-primary-light bg-opacity-80 text-dark font-bold"
                      : "font-semibold text-dark-light"
                  }`}
                  onClick={() => {
                    dispatch(getUser(user.login));
                  }}
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user.avatar_url}
                    alt=""
                  />
                  <p className="text-sm leading-5 hidden lg:block">
                    {user.login}
                  </p>
                </div>
              );
            })
          ) : (
            "No users found"
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
