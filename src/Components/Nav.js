import React, { useState } from "react";
import "./components css/nav.css";
import Gov from "./Gov";
import Lgas from "./Lgas";
import Localga from "./Localga";
import Searchbar from "./Searchbar";

const Nav = ({ lgas }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <nav className="nav">
      <div className="nav-flex">
        <h1>RaenLgaFinder</h1>
        <p>
          "Your local guide to cities, towns, neighborhoods, states, counties,
          metro areas, zip codes, area codes, and schools in Nigeria."
        </p>
      </div>
      <ul className="ul-flex">
        <li>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Search by state{" "}
          </button>{" "}
        </li>
        <li>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Search by Governor{" "}
          </button>{" "}
        </li>
        <li>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Search by LGA{" "}
          </button>{" "}
        </li>
      </ul>

      <Searchbar></Searchbar>
      <div
        style={{ color: "black" }}
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <h2>Content 1</h2>
        <hr />
        <Lgas lgas={lgas}></Lgas>
      </div>
      <div
        style={{ color: "black" }}
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <h2>Content 2</h2>
        <hr />
        <Gov lgas={lgas}></Gov>
      </div>
      <div
        style={{ color: "black" }}
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <h2>Content 3</h2>
        <hr />
        <Localga lgas={lgas}></Localga>
      </div>
    </nav>
  );
};

export default Nav;
