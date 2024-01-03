import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [pageState, setPageState] = useState("sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("profile");
      } else {
        setPageState("sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="shadow-md bg-gray-200  border-b sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <h1
            className="  cursor-pointer text-xl"
            onClick={() => navigate("/")}
          >
            <span className="text-red-600 text-3xl ">Zella</span>Realstate
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black  border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
