import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import image from "./logo.png";
import "./style.css";
export function NavBar() {
  return (
    <div id="myNav" class="container ">
      <nav className="flex min-h-100 bg-dark-gray justify-end-ns ">
        <div className="imgContainer">
          <div>
            <NavLink to="/home">
              <img className="imgSize" src={image} />
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/home"
              className="dim white f5 f5-ns dib pt0 no-underline"
            >
              <h3>InterSume</h3>
            </NavLink>
          </div>
        </div>
        <div className=" justify-between pa3 ">
          <NavLink
            className="textdec dim white f5 f5-ns dib mr3 no-underline "
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className=" textdec dim white f5 f5-ns dib mr3 no-underline"
            to="/aboutUs"
          >
            AboutUs
          </NavLink>
          <NavLink
            className=" textdec dim white f5 f5-ns dib mr3 no-underline"
            to="/ourServices"
          >
            OurServices
          </NavLink>
          <NavLink
            className="textdec dim white f5 f5-ns dib mr3 no-underline"
            to="/contactUs"
          >
            ContactUs
          </NavLink>
          <NavLink
            className="textdec dim white f5 f5-ns dib mr3 no-underline"
            to="/testimonial"
          >
            Testimonial
          </NavLink>
        </div>
        <div className="searchBox pa">
          <input
            className="searchText"
            type="text"
            placeholder="Type here to Search"
          />
          <i
            className="searchBtn dim gray f5 f5-ns dib  fa fa-search"
            id=""
          ></i>
        </div>
      </nav>
    </div>
  );
}
