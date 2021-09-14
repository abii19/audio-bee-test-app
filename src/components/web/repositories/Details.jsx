import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as TagIcon } from "../../../assests/icons/tag.svg";
import { ReactComponent as ZipIcon } from "../../../assests/icons/zip.svg";

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
            button on repositories to get more details.
          </li>
          <li className="pl-6 relative">
            <span className="text-green font-semibold underline">
              Tags & Languages
            </span>{" "}
            are shown on details.
          </li>
        </ul>
      </div>
      {/* Info 2 */}
      <div>
        <h4 className="text-xl leading-tight font-semibold mb-3 text-red">
          Further Information
        </h4>
        <ul className="note-list space-y-1">
          <li className="pl-6 relative">
            <span className="text-green font-semibold underline">
              View Repo
            </span>{" "}
            button on repositories will redirect to repository on github.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Details = () => {
  const { isGetRepoDetailsActive, tags, languages } = useSelector(
    (state) => state.repo,
  );
  return (
    <>
      {isGetRepoDetailsActive ? (
        <>
          <div className="font-sans text-lg text-dark font-semibold flex items-center">
            <TagIcon className="w-6 h-6 mr-2.5" />
            {tags.length} Tags
          </div>
          {tags.length > 0 && (
            <div className="rounded border border-gray-300 mt-3">
              {tags.map((tag, index) => {
                return (
                  <div
                    key={tag.name}
                    className={`px-6 py-2.5 border-b border-gray-300 ${
                      index % 2 === 0 ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-dark text-sm">
                        Version: &nbsp;&nbsp;
                        <span className="font-bold text-base">{tag.name}</span>
                      </p>
                      <div className="flex items-center gap-x-3">
                        <a
                          href={tag.zipball_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-dark flex items-center gap-x-1"
                        >
                          <ZipIcon className="w-4 h-4" />
                          zip
                        </a>
                        <a
                          href={tag.tarball_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-dark flex items-center gap-x-1"
                        >
                          <ZipIcon className="w-4 h-4" />
                          tar
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="font-sans text-lg text-dark font-semibold flex items-center mt-8">
            <TagIcon className="w-6 h-6 mr-2.5" />
            {Object.entries(languages).length} Languages
          </div>
          {Object.entries(languages).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {Object.keys(languages).map((key, index) => {
                return (
                  <div
                    className={` px-4 py-1.5 rounded-lg font-semibold ${
                      index % 2 === 0
                        ? "bg-yellow-200 text-dark"
                        : "bg-green-200 text-dark"
                    }`}
                  >
                    {key}
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <NullDetailsInfo />
      )}
    </>
  );
};

export default Details;
