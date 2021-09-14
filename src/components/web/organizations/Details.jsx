import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as VisitLinkIcon } from "../../../assests/icons/visit-link.svg";
import { ReactComponent as MailIcon } from "../../../assests/icons/mail.svg";
import { ReactComponent as CalenderIcon } from "../../../assests/icons/calender.svg";
import { ReactComponent as LocationIcon } from "../../../assests/icons/location.svg";
const NullDetailsInfo = () => {
  return (
    <div className="flex flex-col space-y-12">
      {/* Info 1 */}
      <div>
        <h4 className="text-xl leading-tight font-semibold mb-3 text-red">
          More details to come
        </h4>
        <ul className="note-list space-y-1">
          <li className="pl-6 relative">
            Click{" "}
            <span className="text-green font-semibold underline">
              View Details
            </span>{" "}
            button on organizations to get more details.
          </li>
        </ul>
      </div>
    </div>
  );
};
const Details = () => {
  const { isGetOrgDetailsActive, orgDetails } = useSelector(
    (state) => state.org,
  );
  return (
    <>
      {isGetOrgDetailsActive ? (
        <>
          <div>
            <img
              src={orgDetails.avatar_url}
              alt=""
              className="w-28 h-28 rounded-full object-cover ring ring-yellow-200 ring-offset-4 mx-auto"
            />
            <div className="text-center text-2xl font-bold my-4">
              {orgDetails.name}
            </div>
            <div className="my-4">
              <h3 className="text-base text-center font-medium text-dark-light mb-2">
                {orgDetails.description}
              </h3>
              <ul className="flex items-center gap-x-6 text-base justify-center">
                <li className="" title="Email">
                  <div className="text-green flex items-center">
                    <MailIcon className="w-4 h-4 mr-1" />
                    {orgDetails.email ? orgDetails.email : "N/A"}
                  </div>
                </li>
                <li className="" title="Location">
                  <div className="text-green flex items-center">
                    <LocationIcon className="w-4 h-4 mr-1" />
                    {orgDetails.location ? orgDetails.location : "N/A"}
                  </div>
                </li>
                <li className="" title="Created at">
                  <div className="text-green flex items-center">
                    <CalenderIcon className="w-4 h-4 mr-1" />
                    on{" "}
                    {new Date(orgDetails.created_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      },
                    )}
                  </div>
                </li>
              </ul>
              <ul className="flex items-center gap-x-6 text-base justify-center mt-1">
                {orgDetails.blog && (
                  <li className="">
                    <a
                      href={orgDetails.blog}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-x-1 min-w-max text-primary"
                    >
                      View Blog <VisitLinkIcon />
                    </a>
                  </li>
                )}
                <li className="">
                  <a
                    href={orgDetails.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-x-1 min-w-max text-primary"
                  >
                    View Repo <VisitLinkIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray p-4 rounded-lg flex flex-col items-center">
                <p className="text-lg font-semibold">{orgDetails.followers}</p>
                <p>Followers</p>
              </div>
              <div className="bg-gray p-4 rounded-lg flex flex-col items-center">
                <p className="text-lg font-semibold">{orgDetails.following}</p>
                <p>Following</p>
              </div>
              <div className="bg-gray p-4 rounded-lg flex flex-col items-center">
                <p className="text-lg font-semibold">
                  {orgDetails.public_repos}
                </p>
                <p>Public Repos</p>
              </div>
              <div className="bg-gray p-4 rounded-lg flex flex-col items-center">
                <p className="text-lg font-semibold">
                  {orgDetails.public_gists}
                </p>
                <p>Public Gists</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NullDetailsInfo />
      )}
    </>
  );
};

export default Details;
