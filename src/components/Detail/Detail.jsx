import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountriyByCode } from "./DetailAPI";
import Navbar from "../Navbar";

const Home = () => {
  // const history = useHistory();
  const { slug } = useParams();
  const [countryData, setcountryData] = useState([]);
  const loadData = async (slug) => {
    const DATA = await getCountriyByCode(slug);
    console.log("DATA:", DATA);
    setcountryData(DATA);
  };
  useEffect(() => {
    loadData(slug);
  }, [slug]);

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <button
          className="shadow-default rounded-md w-1/12 py-2 text-center cursor-pointer"
          onClick={() => {
            window.history.back();
          }}
        >
          back
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
                        <span>{item.name}, </span>
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

            <div>
              border countries:
              {countryData?.borders?.map((item) => (
                <a
                  key={item}
                  href={"/Countries/#/detail/" + item}
                  // onClick={() => {
                  //   history.replace("/detail/" + item);
                  // }}
                  className="cursor-pointer shadow-default rounded-md px-5 py-1 m-2 min-w-max"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
