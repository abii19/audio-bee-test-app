import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrgs } from "../../../store/actions/usersAction";
import Loader from "../../common/Loader";
import Orgs from "../organizations/Orgs";
import Details from "../organizations/Details";
import RepoOrgsTitle from "../shared/RepoOrgsTitle";
const OrgnizationsPage = () => {
  const dispatch = useDispatch();
  const { getOrgsCounter, getOrgsLoading, orgs } = useSelector(
    (state) => state.users,
  );
  const current_user = localStorage.getItem("current_user");

  const [filter, setFilter] = useState("");

  const filteredOrgs = useMemo(() => {
    let filteredData = orgs;
    if (filter) {
      filteredData = filteredData.filter((item) => {
        return item.login.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return filteredData;
  }, [orgs, filter]);

  // Refetch orgs when reloaded
  useEffect(() => {
    if (getOrgsCounter === 0) {
      dispatch(getUserOrgs(current_user));
    }
  }, [getOrgsCounter, current_user, dispatch]);

  return (
    <>
      {!getOrgsLoading ? (
        <div className="p-8 w-full overflow-y-auto">
          <RepoOrgsTitle
            title="Organizations"
            filter={filter}
            setFilter={setFilter}
          />
          {/* Organizations */}
          <div className="grid grid-cols-3 gap-4">
            <div
              className="col-span-2 pr-8 mt-6 h-full overflow-y-auto"
              style={{ height: "calc(100vh - 240px)" }}
            >
              <div className="grid grid-cols-3 gap-x-6 gap-y-8 py-2">
                <Orgs filteredOrgs={filteredOrgs} />
              </div>
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

export default OrgnizationsPage;
