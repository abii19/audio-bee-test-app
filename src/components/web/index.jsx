import React from "react";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import Sidebar from "./layouts/Sidebar";
import Loader from "../common/Loader";
import NoUserSelectedInfoPage from "./shared/NoUserSelectedInfoPage";
const Web = () => {
  const { isUserSelected, user } = useSelector((state) => state.users);
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {Object.entries(user).length > 0 && isUserSelected ? (
          <ProfilePage />
        ) : (
          <>
            {Object.entries(user).length === 0 && isUserSelected && <Loader />}
            <NoUserSelectedInfoPage />
          </>
        )}
      </main>
    </>
  );
};

export default Web;
