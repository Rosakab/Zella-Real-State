import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Header = () => {
  const [pageState, setPageState] = useState("sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="shadow-md bg-black  border-b sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <h1
            className="  cursor-pointer text-xl text-white font-semibold"
            onClick={() => navigate("/")}
          >
            <span className="text-red-600 text-3xl font-bold ">Zella</span>Shop
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-white border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && " border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-white border-b-[3px] border-b-transparent ${
                pathMatchRoute("/product") && " border-b-red-500"
              }`}
              onClick={() => navigate("/product")}
            >
              Product
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-white border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                " border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>        
            <li
              className={`cursor-pointer py-3  text-white border-b-[3px] border-b-transparent ${
                pathMatchRoute("/basket") && " border-b-red-500"
              }`}
              onClick={() => navigate("/basket")}
            >
              <HiOutlineShoppingCart size={20}   />
            </li>















          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
