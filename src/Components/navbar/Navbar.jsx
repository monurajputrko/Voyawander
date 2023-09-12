import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ isWhiteBackground, isOfferVisible }) {
  const [sideBarHidden, setSideBarHidden] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const email = undefined;
  const name = undefined;

  const location = useLocation();
  console.log(location);

  const handleShowSideMenu = () => {
    setSideBarHidden(false);
  };

  const handleBlankScreen = () => {
    setSideBarHidden(true);
  };

  return (
    <>
      <div
        className={`${styles.blank_screen} ${
          sideBarHidden || sideBarHidden === null ? "hidden" : ""
        }`}
        onClick={handleBlankScreen}></div>
      {isOfferVisible && (
        <div className={styles.discount}>
          <p>Upto 50% of on your trips</p>
        </div>
      )}
      <div
        className={`${styles.navbar} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
        <div>
          <span className="text-2xl font-semibold whitespace-nowrap">
            Voyawander
          </span>
        </div>
        <button
          onClick={handleShowSideMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${styles.desk_links} flex space-x-10 hidden w-full md:block md:w-auto`}>
          <Link
            to={"/"}
            className={`${
              location.pathname === "/" ? styles.link_active_desk : ""
            } font-semibold`}>
            Home
          </Link>

          <Link
            to={"/"}
            className={`${
              location.pathname === "/aboutus" ? styles.link_active_desk : ""
            } font-semibold`}>
            About Us
          </Link>

          <Link
            to={"/hostel"}
            className={`${
              location.pathname === "/hostel" ? styles.link_active_desk : ""
            } font-semibold`}>
            Hostels
          </Link>

          <Link
            to={"/flights"}
            className={`${
              location.pathname === "/flights" ? styles.link_active_desk : ""
            } font-semibold`}>
            Flights
          </Link>

          <Link
            to={"/contactus"}
            className={`${
              location.pathname === "/contactus" ? styles.link_active_desk : ""
            } font-semibold`}>
            Contact Us
          </Link>
        </div>

        {/* mobile sidebars */}
        <div
          className={`${styles.mobile_sidebar} ${
            !sideBarHidden && sideBarHidden !== null
              ? `${styles.sidebar_anima}`
              : sideBarHidden === null
              ? ""
              : `${styles.sidebar_backward}`
          }`}>
          <p className={`${styles.logo} font-semibold text-2xl`}>Voyawander</p>

          <Link
            to={"/"}
            className={`${
              location.pathname === "/" ? styles.mobile_active_link : ""
            } font-semibold`}>
            Home
          </Link>

          <Link
            to={"/"}
            className={`${
              location.pathname === "/aboutus" ? styles.mobile_active_link : ""
            } font-semibold`}>
            About Us
          </Link>

          <Link
            to={"/hostel"}
            className={`${
              location.pathname === "/hostel" ? styles.mobile_active_link : ""
            } font-semibold`}>
            Hostels
          </Link>

          <Link
            to={"/flights"}
            className={`${
              location.pathname === "/flights" ? styles.mobile_active_link : ""
            } font-semibold`}>
            Flights
          </Link>

          <Link
            to={"/contactus"}
            className={`${
              location.pathname === "/contactus"
                ? styles.mobile_active_link
                : ""
            } font-semibold`}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
