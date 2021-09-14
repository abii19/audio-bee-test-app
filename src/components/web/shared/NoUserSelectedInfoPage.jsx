import React from "react";
const NoUserSelectedInfoPage = () => {
  return (
    <>
      <div className="p-10 overflow-y-auto">
        <h2 className="text-2xl leading-sung font-bold mb-6 text-dark">
          Notes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bring into play */}
          <div className="bg-gray-50 px-6 py-5 rounded-lg">
            <h4 className="text-xl leading-tight font-semibold mb-3 text-red">
              Bring into play
            </h4>
            <ul className="note-list space-y-1">
              <li className="pl-6 relative">
                Select user from the sidebar to view user profile.
              </li>
              <li className="pl-6 relative">
                Click{" "}
                <span className="text-green font-semibold underline">
                  View Repositories
                </span>{" "}
                button to view user repositories.
              </li>
              <li className="pl-6 relative">
                Click{" "}
                <span className="text-green font-semibold underline">
                  View Organizations
                </span>{" "}
                button to view user organizations.
              </li>
              <li className="pl-6 relative">
                Can return back to{" "}
                <span className="text-green font-semibold underline">
                  Home Page
                </span>{" "}
                by clicking{" "}
                <span className="text-green font-semibold underline">
                  Go Back
                </span>{" "}
                button.
              </li>
              <li className="pl-6 relative">
                Click{" "}
                <span className="text-green font-semibold underline">
                  View Details
                </span>{" "}
                button on each repositories and organizations of corresponding
                page to get their detail view.
              </li>
            </ul>
          </div>
          {/* Information */}
          <div className="bg-gray-50 px-6 py-5 rounded-lg">
            <h4 className="text-xl leading-tight font-semibold mb-3 text-red">
              Information
            </h4>
            <ul className="note-list space-y-1">
              <li className="pl-6 relative">
                Users are pre-fetched on web-page load.
              </li>
              <li className="pl-6 relative">
                Timeout of{" "}
                <span className="text-primary font-semibold">3 seconds</span> is
                used while fetching api data to show{" "}
                <span className="text-primary font-semibold underline">
                  Loading Spinner.
                </span>
              </li>
              <li className="pl-6 relative">
                Errors from backend are catched and showed through{" "}
                <span className="text-primary font-semibold underline">
                  Toaster
                </span>{" "}
                in{" "}
                <span className="text-primary font-semibold underline">
                  Web Layout Page
                </span>{" "}
                for every api call.
              </li>
              <li className="pl-6 relative">
                <span className="text-primary font-semibold underline">
                  Current User Name
                </span>{" "}
                is stored in local storage to refetch{" "}
                <span className="text-primary font-semibold underline">
                  Repositories & Organizations Page
                </span>{" "}
                data.
              </li>
            </ul>
          </div>
          {/* Technologies Used */}
          <div className="bg-gray-50 px-6 py-5 rounded-lg">
            <h4 className="text-xl leading-tight font-semibold mb-3 text-red">
              Technologies
            </h4>
            <ul className="note-list space-y-1">
              <li className="pl-6 relative">
                CSS Framework:{" "}
                <span className="text-green font-semibold underline">
                  Tailwind CSS
                </span>
              </li>
              <li className="pl-6 relative">
                Library:{" "}
                <span className="text-green font-semibold underline">
                  Redux, React Redux & React Router
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoUserSelectedInfoPage;
