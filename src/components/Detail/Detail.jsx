import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountriyByCode } from "./DetailAPI";
import Navbar from "../Navbar";

const Home = () => {
  // const history = useHistory();
  const { darkMode } = useSelector((state) => state.reducer);
  const { slug } = useParams();
  const [countryData, setcountryData] = useState([]);
  const loadData = async (slug) => {
    const DATA = await getCountriyByCode(slug);
    console.log("detail DATA:", DATA);
    setcountryData(DATA);
  };
  useEffect(() => {
    loadData(slug);
    // console.log("detail theme:: ", window.localStorage.getItem("theme"));
  }, [slug]);

  return (
    <div id={darkMode ? "dark" : "light"}>
      <Navbar />

      <div className="wrapper px-16 md:px-auto h-screen">
        <button
          className={`shadow-default rounded-md w-1/12 py-2 text-center cursor-pointer flex items-center justify-center gap-4 ${
            darkMode ? "bg-gray-700" : ""
          }`}
          onClick={() => {
            window.history.back();
          }}
        >
          <span>
            <img
              className="w-4"
              src={
                darkMode
                  ? "/images/arrow-left-white.png"
                  : "/images/arrow-left.png"
              }
              alt="arrow-left"
            />
          </span>
          <span>back</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-20">
          <img
            src={countryData?.flags?.svg}
            alt={countryData?.name}
            className="h-96"
            loading="lazy"
          />
          <div className="flex flex-col justify-between my-10">
            <div>
              <div className="font-semibold mb-5 text-3xl">
                {countryData?.name}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* column 1 */}
                <div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">Nativename:</span>
                    <span>{countryData?.nativeName}</span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">Population:</span>
                    <span>{countryData?.population}</span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">region:</span>
                    <span>{countryData?.region}</span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">sub region:</span>
                    <span>{countryData?.subregion}</span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">capital:</span>
                    <span>{countryData?.capital}</span>
                  </div>
                </div>
                {/* column 2 */}
                <div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">
                      top level domain:
                    </span>
                    <span>{countryData?.topLevelDomain}</span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">currencies:</span>
                    <span>
                      {countryData?.currencies?.map((item) => (
                        <span key={item.name}>{item.name}, </span>
                      ))}
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold pr-2">languages:</span>
                    <span>
                      {countryData?.languages?.map((item) => (
                        <span>{item.name}, </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap flex-row justify-start items-center gap-2 ">
              border countries:
              {countryData?.borders?.map((item) => (

                <div className="rounded-md shadow-md px-3 py-1 cursor-pointer">
                  {" "}
                  <Link
                    key={item}
                    // tag={Link}
                    className="font-semibold text-center mb-4 w-full"
                    to={"/detail/" + item}
                  >
                    {item}
                  </Link>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
