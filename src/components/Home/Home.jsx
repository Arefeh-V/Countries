import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountries } from "./HomeAPI";
import Navbar from "../Navbar";
import Filters from "./Filters";

const Home = () => {
  const { darkMode } = useSelector((state) => state.reducer);
  const history = useHistory();
  const [countriesData, setcountriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    setLoading(true);
    const DATA = await getCountries();
    setLoading(false);

    // console.log("DATA:", DATA);
    setcountriesData(DATA);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div id={darkMode ? "dark" : "light"}>
      <Navbar />

      <div className="wrapper px-4 md:px-auto min-h-screen">
        <Filters setLoading={setLoading} setCountryList={setcountriesData} />

        {loading ? (
          <div className="flex justify-center items-center h-full">
            is loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
            {countriesData?.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer col-span-1 flex flex-col content-between shadow-md rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <div>
                  <img
                    className="w-full max-w-full max-h-40 h-40 rounded-t-lg"
                    src={item?.flags?.svg}
                    alt={item?.name}
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  {/* <Link
                  target={"_blank"}
                  className="font-semibold text-center mb-4 w-full"
                  to={"/detail/" + (item?.alpha3Code || item?.alpha2Code)}
                >
                  {item?.name}
                </Link> */}
                  <div
                    className="font-semibold text-center mb-4 w-full"
                    // href={"/detail/" + (item?.alpha3Code || item?.alpha2Code)}
                    onClick={() => {
                      history.push(
                        "/detail/" + (item?.alpha3Code || item?.alpha2Code)
                      );
                    }}
                  >
                    {item?.name}
                  </div>
                  <div className="font-light text-sm">
                    <div>
                      <span className="font-medium pr-2">Population:</span>
                      <span>{item?.population}</span>
                    </div>
                    <div>
                      <span className="font-medium pr-2">Region:</span>
                      <span>{item?.region}</span>
                    </div>
                    <div>
                      <span className="font-medium pr-2">Capital:</span>
                      <span>{item?.capital}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
