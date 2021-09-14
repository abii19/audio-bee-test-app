import React from "react";
import { useDispatch } from "react-redux";
import {
  setGetRepoDetailsActive,
  getRepoTags,
  getRepoLanguages,
} from "../../../store/actions/repoAction";
import { ReactComponent as VisitLinkIcon } from "../../../assests/icons/visit-link.svg";
import { ReactComponent as CalenderIcon } from "../../../assests/icons/calender.svg";
const Repos = ({ filteredRepos }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filteredRepos.length > 0
        ? filteredRepos.map((repo) => {
            return (
              <div
                key={repo.id}
                className="py-6 flex flex-col gap-y-3 border-t border-b border-divider"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-dark opacity-70 bg-gray w-14 h-14 rounded-full capitalize text-3xl font-bold">
                    {repo.name.charAt(0)}
                  </div>
                  <div className="">
                    <h3 className="text-lg font-bold">
                      {repo.name ? repo.name : repo.full_name}
                    </h3>
                    <ul className="flex items-center gap-x-6 text-sm mt-1">
                      <li className="" title="Created at">
                        <div className="text-green flex items-center">
                          <CalenderIcon className="w-4 h-4 mr-1" />
                          on{" "}
                          {new Date(repo.created_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </div>
                      </li>
                      <li className="">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-x-1 min-w-max text-primary"
                        >
                          View Repo <VisitLinkIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-base text-dark-light">{repo.description}</p>
                <div className="flex flex-wrap justify-between items-center">
                  <ul className="flex items-center gap-x-2">
                    <li>
                      <div className="px-4 py-1 bg-primary-light text-primary rounded-lg">
                        CSS
                      </div>
                    </li>
                    <li>
                      {repo.open_issues_count > 0 ? (
                        <div className="px-4 py-1 bg-red-50 text-red rounded-lg">
                          Has Issues
                        </div>
                      ) : (
                        <span className="px-4 py-1 bg-green-100 text-green rounded-lg">
                          No Issues
                        </span>
                      )}
                    </li>
                    {repo.open_issues_count > 0 && (
                      <li>
                        <div className="px-4 py-1.5 text-sm bg-red-50 text-red rounded-lg">
                          Issues Count:{" "}
                          <span className="text-red">
                            {repo.open_issues_count}
                          </span>
                        </div>
                      </li>
                    )}
                  </ul>

                  <button
                    onClick={() => {
                      dispatch(setGetRepoDetailsActive());
                      dispatch(getRepoTags(repo.tags_url));
                      dispatch(getRepoLanguages(repo.languages_url));
                    }}
                    type="button"
                    className="min-w-max bg-gray-light transition hover:bg-primary-light text-dark font-semibold px-4 py-2 rounded-lg focus:bg-primary focus:bg-opacity-40 "
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })
        : "No repos found"}
    </>
  );
};

export default Repos;
