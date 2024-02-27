import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api";
import AuthContext from "../context/AuthContext";

const Navbar = (props) => {
  const s1 =
    "bg-white-900 drop-shadow-lg mx-3 px-7 py-2 rounded-md text-base font-medium hover:drop-shadow-xl hover:px-10 dark:hover:bg-midnight dark:hover:drop-shadow-dark-lg";
  const [theme, setTheme] = useState(0);
  const { getLoggedIn } = useContext(AuthContext);
  const doc = document.documentElement.classList;
  useEffect((e) => {
    let t = localStorage.getItem("theme");
    if (!t) {
      localStorage.setItem("theme", 0);
    }
    t = localStorage.getItem("theme");
    setTheme(t);
    if (t == 1) {
      doc.add("dark");
    }
  }, []);
  return (
    <>
      <nav className="p-3 bg-white-900 sticky top-0 z-10 dark:bg-gray-bg">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center justify-between">
              {/* <img
                className="h-14 w-auto ml-6"
                src={logo}
                draggable={false}
                alt="Your Company"
              /> */}
              <div className="text-2xl font-bold ml-2 text-blood">
                BloodShare
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <>
              <DropDown
                title="About Us"
                children={["Home", "About BloodShare"]}
                links={["/", "/about", "/contactUs"]}
              ></DropDown>
              {props.logIn ? (
                <>
                  <Link to={`/${props.user}/profile`} className={s1}>
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <Link
                    to="/"
                    onClick={async () => {
                      await axios
                        .get("/auth/logout", { withCredentials: true })
                        .then((r) => {});
                      await getLoggedIn();
                    }}
                    className={s1}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <DropDown
                    title="Looking For Blood"
                    children={[
                      "Patient Login/Register",
                      "Blood Bank Directory",
                    ]}
                    links={["/register/patient", "/bloodDirect"]}
                  ></DropDown>
                  <DropDown
                    title="Want To Donate Blood"
                    children={[
                      "Donor Login/Register",
                      "Blood Donation Camps",
                      "About Blood Donation",
                    ]}
                    links={[
                      "/register/donor",
                      "/bloodCamps",
                      "/aboutBloodDonation",
                    ]}
                  ></DropDown>
                  <DropDown
                    title="Blood Bank Login"
                    children={["Login", "Add Your Bloodbank"]}
                    links={["/login/bank", "/register/bank"]}
                  ></DropDown>
                </>
              )}
              {/* <button
                className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
                onClick={() => {
                  localStorage.setItem(
                    "theme",
                    localStorage.getItem("theme") == 1 ? 0 : 1
                  );
                  setTheme(localStorage.getItem("theme"));
                  if (theme == 0) {
                    doc.add("dark");
                  } else {
                    doc.remove("dark");
                  }
                }}
              >
                <i
                  className={`dark:text-white-900 fa-solid fa-lg fa-${
                    theme == 0 ? "sun" : "moon"
                  }`}
                ></i>
              </button> */}
            </>
          </div>
        </div>
      </nav>
      <Outlet />
      {/* <section className="footer mt-20">
        <footer className="relative bg-gray-300 pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5>
                <div className="mt-6">
                  <button
                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Github
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-400" />
          </div>
        </footer>
      </section> */}
    </>
  );
};

export default Navbar;
