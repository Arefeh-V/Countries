import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { SetThemeAction } from "../redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.reducer);
  const isdark = darkMode;
  return (
    <>
      <div
        className={`py-5 shadow-md mb-10 rounded-b-lg ${
          darkMode ? "bg-gray-700 text-white" : "bg-white"
        } `}
      >
        <div className="flex justify-between items-center w-full wrapper px-4 md:px-auto">
          <div className="text-xl font-semibold">Where in the world?</div>

          <Button
            color="link"
            onClick={() => {
              debugger;
              dispatch(SetThemeAction(!isdark));
            }}
          >
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
            <span className="d-lg-none d-md-block">
              {darkMode ? "dark mode" : "light mode"}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
