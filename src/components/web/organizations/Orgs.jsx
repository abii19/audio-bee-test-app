import React from "react";
import { useDispatch } from "react-redux";
import {
  setGetOrgDetailsActive,
  getOrgDetails,
} from "../../../store/actions/orgAction";
import { ReactComponent as VisitLinkIcon } from "../../../assests/icons/visit-link.svg";

const Orgs = ({ filteredOrgs }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filteredOrgs.length > 0
        ? filteredOrgs.map((orgs) => {
            return (
              <div
                key={orgs.id}
                className="flex flex-col border-b-4 border-dark border-opacity-80 rounded-lg shadow pb-2"
              >
                <img
                  src={orgs.avatar_url}
                  className="max-h-48 w-full rounded-t-lg"
                  alt=""
                />
                <h3 className="text-lg font-bold pt-4 px-4">{orgs.login}</h3>
                {orgs.description && (
                  <p className="text-sm text-dark-light px-4">
                    {orgs.description}
                  </p>
                )}
                <div className="px-4 pt-2 mt-auto">
                  <button
                    onClick={() => {
                      dispatch(setGetOrgDetailsActive());
                      dispatch(getOrgDetails(orgs.url));
                    }}
                    type="button"
                    className="flex items-center gap-x-1 min-w-max text-primary "
                  >
                    View Details <VisitLinkIcon />
                  </button>
                </div>
              </div>
            );
          })
        : "No orgs found"}
    </>
  );
};

export default Orgs;
