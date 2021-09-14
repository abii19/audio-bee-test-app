import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserRepos } from "../../../store/actions/usersAction";
import Loader from "../../common/Loader";
import Details from "../repositories/Details";
import Repos from "../repositories/Repos";
import RepoOrgsTitle from "../shared/RepoOrgsTitle";
const RepositoriesPage = () => {
  const dispatch = useDispatch();
  const { getRepoCounter, getRepoLoading, repos } = useSelector(
    (state) => state.users,
  );
  const current_user = localStorage.getItem("current_user");

  const [filter, setFilter] = useState("");

  const filteredRepos = useMemo(() => {
    let filteredData = repos;
    if (filter) {
      filteredData = filteredData.filter((item) => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return filteredData;
  }, [repos, filter]);

  // Refetch repos when reloaded
  useEffect(() => {
    if (getRepoCounter === 0) {
      dispatch(getUserRepos(current_user));
    }
  }, [getRepoCounter, current_user, dispatch]);

  return (
    <>
      {!getRepoLoading ? (
        <div className="p-8 w-full overflow-y-auto">
          <RepoOrgsTitle
            title="Repositories"
            filter={filter}
            setFilter={setFilter}
          />
          {/* Repositories */}
          <div className="grid grid-cols-3 gap-4">
            <div
              className="col-span-2 pr-8 mt-6 h-full overflow-y-auto"
              style={{ height: "calc(100vh - 240px)" }}
            >
              <Repos filteredRepos={filteredRepos} />
            </div>
            <div
              className="col-span-1 bg-gray-light p-6 rounded-lg overflow-y-auto"
              style={{ height: "calc(100vh - 210px)" }}
            >
              <Details />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RepositoriesPage;
