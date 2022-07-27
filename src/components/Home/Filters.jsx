import React, { useState, useEffect } from "react";
import {
  getCountriySearch,
  getCountries,
  getCountriyByContinent,
} from "./HomeAPI";
const Filters = ({ setCountryList, setLoading }) => {
  const [searchVal, setSearchVal] = useState("");
  const [openSelector, setOpenSelector] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  useEffect(
    () => async () => {
      let data = [];
      if (searchVal.length >= 2) {
        setLoading(true);
        data = await getCountriySearch(searchVal);
        setLoading(false);
      } else if (searchVal.length === 0) {
        // setLoading(true);
        data = await getCountries();
        console.log(" data:::   ", data);

        // setLoading(false);
      }
      setCountryList(data);
    },
    [searchVal, setCountryList, setLoading]
  );

  const getByContinent = async (name) => {
    setSelectedContinent(name);
    setLoading(true);
    const data = await getCountries();
    console.log("continent data:::   ", data);
    setCountryList(
      name === "All" ? data : data.filter((item) => item.region === name)
    );
    setOpenSelector(false);
    setLoading(false);
  };
  return (
    <>
      <div className="py-10 flex justify-between items-center w-full">
        <div className="text-xl font-semibold">
          <input
            className="rounded-lg shadow-default h-10"
            placeholder="search for a country..."
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
          />
        </div>
        {/* filter by region */}
        <div>
          <div
            className="p-3 shadow-default rounded-md cursor-pointer w-40 text-center"
            onClick={() => {
              setOpenSelector((prev) => !prev);
            }}
          >
            {selectedContinent === "All"
              ? "filter by region"
              : selectedContinent}
          </div>
          {openSelector && (
            <div className="absolute mt-2 z-10 bg-white p-3 shadow-default rounded-md">
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
