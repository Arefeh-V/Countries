import React, { useState, useEffect } from "react";
import {
  getCountriySearch,
  getCountries,
  // getCountriyByContinent,
} from "./HomeAPI";
import { useSelector } from "react-redux";
const Filters = ({ setCountryList, setLoading }) => {
  const { darkMode } = useSelector((state) => state.reducer);
  const [searchVal, setSearchVal] = useState("");
  const [openSelector, setOpenSelector] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(
    () => async () => {
      if (searchVal.trim().length === 0) {
        const data = await getCountries();
        setCountryList(data);
      }
    },
    [searchVal, setCountryList]
  );

  const search = async () => {
    let data = [];
    if (searchVal.length >= 2) {
      setLoading(true);
      data = await getCountriySearch(searchVal);
      setLoading(false);
    } else if (searchVal.length === 0) {
      data = await getCountries();
    }
    setCountryList(data);
  };

  const getByContinent = async (name) => {
    setSelectedContinent(name);
    setLoading(true);
    const data = await getCountries();
    // console.log("continent data:::   ", data);
    setCountryList(
      name === "All" ? data : data.filter((item) => item.region === name)
    );
    setOpenSelector(false);
    setLoading(false);
  };
  return (
    <>
      <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-20 w-full">
        {/* search */}
        <div className="text-xl font-semibold relative w-full md:max-w-xs">
          <input
            className={`rounded-lg shadow-default h-10 w-full  font-normal ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            placeholder="search for a country..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") search();
            }}
          />
          <img
            className="absolute w-8 right-2 top-1 cursor-pointer"
            src="/images/search.svg"
            alt="search"
            onClick={() => {
              search();
            }}
          />
        </div>

        {/* filter by region */}
        <div className={darkMode ? " text-white" : "text-black"}>
          <div
            className={`p-3 shadow-default rounded-md cursor-pointer w-40 text-center flex justify-between items-center ${
              darkMode ? "bg-gray-700 " : "bg-white"
            }`}
            onClick={() => {
              setOpenSelector((prev) => !prev);
            }}
          >
            <span>
              {selectedContinent === "All"
                ? "filter by region"
                : selectedContinent}
            </span>
            <img
              className="cursor-pointer"
              src="/images/arrow-down.svg"
              alt="search"
            />
          </div>
          {openSelector && (
            <div
              className={`absolute mt-2 z-10 p-3 shadow-default rounded-md ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            >
              <div className="grid grid-cols-1 gap-4">
                {continents.map((item) => (
                  <div
                    key={item}
                    className="cursor-pointer hover:text-gray-500"
                    onClick={() => getByContinent(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Filters;
