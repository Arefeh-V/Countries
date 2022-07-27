import React, { Component } from "react";
// import "../styleCss/error404.css";
// import NavBar from "./navBar";
// import Footer from "./footer";
import { Link } from "react-router-dom";

class Error404 extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="change-background">
          <div className="wrapper">
            <div className="row my-5 mx-auto">
              <div className="">
                <h1>404 not found !!</h1>
                <div className="error-img"></div>
                <Link
                  tag={Link}
                  to="/"
                  className="back-home text-xs text-green-500"
                >
                  return to main page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Error404;
