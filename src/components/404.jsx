import React, { Component } from "react";
// import "../styleCss/error404.css";
// import NavBar from "./navBar";
// import Footer from "./footer";
import { Link } from "react-router-dom";

class Error404 extends Component {
  state = {};
  // componentDidMount(){
  //   var pathSegmentsToKeep = 1;

  //   var l = window.location;
  //   l.replace(
  //     l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
  //     l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
  //     l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
  //     (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
  //     l.hash
  //   );
  // }
  
  
  
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
