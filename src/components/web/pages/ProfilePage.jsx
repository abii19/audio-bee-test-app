import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserRepos, getUserOrgs } from "../../../store/actions/usersAction";
import { setGetRepoDetailsInActive } from "../../../store/actions/repoAction";
import { setGetOrgDetailsInActive } from "../../../store/actions/orgAction";
import { ReactComponent as VisitLinkIcon } from "../../../assests/icons/visit-link.svg";
import { ReactComponent as TwitterIcon } from "../../../assests/icons/twitter.svg";
import { ReactComponent as LocationIcon } from "../../../assests/icons/location.svg";
import { ReactComponent as CalenderIcon } from "../../../assests/icons/calender.svg";
import githubImage from "../../../assests/images/github-social.png";
import Loader from "../../common/Loader";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const { getUserLoading, user } = useSelector((state) => state.users);

  return (
    <>
      {getUserLoading && <Loader />}
      <div className="relative mb-12">
        <img
          src={githubImage}
          alt=""
          className="w-full h-64  object-cover object-center shadow-sm"
        />
        <img
          src={user.avatar_url}
          className="h-24 w-24 ring-1 ring-offset-2 shadow-2xl ring-white rounded-full absolute -bottom-12 left-10"
          alt=""
        />
      </div>
      <div className="px-10 py-4">
        <div className="flex flex-wrap items-center gap-y-4 justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <h2 className="text-2xl leading-tight font-bold capitalize">
              {user.name ? user.name : user.id}
            </h2>
            <div className="px-4 py-2 rounded-2xl text-sm leading-tight font-semibold bg-primary-light text-primary">
              @ {user.login}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-2 lg:mb-0">
            <NavLink
              to="/repositories"
              onClick={() => {
                dispatch(getUserRepos(user.login));
                dispatch(setGetRepoDetailsInActive());
              }}
              className="flex items-center text-white bg-primary  px-6 py-2 rounded-lg max-w-max transition duration-300 hover:bg-primary focus:outline-none hover:text-white text-base font-semibold"
            >
              View Repositories
              <span className="pl-1 w-4 h-4">
                <VisitLinkIcon />
              </span>
            </NavLink>
            <NavLink
              to="/organizations"
              onClick={() => {
                dispatch(getUserOrgs(user.login));
                dispatch(setGetOrgDetailsInActive());
              }}
              className="flex items-center text-primary bg-primary-light  px-6 py-2 rounded-lg max-w-max transition duration-300 hover:bg-primary focus:outline-none hover:text-white text-base font-semibold"
            >
              View Organizations
              <span className="pl-1 w-4 h-4">
                <VisitLinkIcon />
              </span>
            </NavLink>
          </div>
        </div>
        {user.location && (
          <p
            title="Location"
            className="text-base leading-tight font-normal text-dark-light mb-2 flex items-center"
          >
            <LocationIcon className="h-5 w-5 mr-1.5" />
            {user.location}
          </p>
        )}
        {user.created_at && (
          <p
            title="Created at"
            className="text-base leading-tight font-normal text-dark-light mb-2 flex items-center"
          >
            <CalenderIcon className="h-5 w-5 mr-1.5" />
            {new Date(user.created_at).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
        {user.bio && (
          <p className="text-base leading-tight text-dark-light font-normal">
            {user.bio}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-4 pb-6 border-b">
          {user.html_url && (
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-primary border border-primary px-4 py-1.5 rounded-lg max-w-max transition duration-300 hover:bg-primary hover:text-white text-base font-semibold"
            >
              Visit Github
              <span className="pl-0.5">
                <VisitLinkIcon />
              </span>
            </a>
          )}
          {user.blog && (
            <a
              href={user.blog}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-primary border border-primary px-4 py-1.5 rounded-lg max-w-max transition duration-300 hover:bg-primary hover:text-white text-base font-semibold"
            >
              View Blog
              <span className="pl-0.5">
                <VisitLinkIcon />
              </span>
            </a>
          )}
          {user.twitter_username && (
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              className="flex items-center text-dark-light bg-gray-light  px-6 py-2 rounded-lg max-w-max transition duration-300 hover:bg-gray focus:outline-none hover:text-dark text-base font-semibold"
            >
              <TwitterIcon className="w-6 h-6 pr-1" />
              {user.twitter_username}
            </a>
          )}
        </div>

        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center place-items-stretch">
          <div className="bg-gray-light text-dark p-4 rounded-lg shadow">
            <div className="text-xl leading-tight font-semibold text-center mt-1">
              {user.followers}
            </div>
            <p className="text-base leading-tight font-medium text-center mt-1">
              Followers
            </p>
          </div>
          <div className="bg-gray-light text-dark p-4 rounded-lg shadow">
            <div className="text-xl leading-tight font-semibold text-center mt-1">
              {user.following}
            </div>
            <p className="text-base leading-tight font-medium text-center mt-1">
              Following
            </p>
          </div>
          <div className="bg-gray-light text-dark p-4 rounded-lg shadow">
            <div className="text-xl leading-tight font-semibold text-center mt-1">
              {user.public_repos}
            </div>
            <p className="text-base leading-tight font-medium text-center mt-1">
              Public Repos
            </p>
          </div>
          <div className="bg-gray-light text-dark p-4 rounded-lg shadow">
            <div className="text-xl leading-tight font-semibold text-center mt-1">
              {user.public_gists}
            </div>
            <p className="text-base leading-tight font-medium text-center mt-1">
              Public Gists
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
