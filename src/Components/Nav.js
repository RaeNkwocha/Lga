import React, { useState } from "react";
import "./components css/nav.css";
import Searchbar from "./Searchbar";

const Nav = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
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
          <button onClick={openModal}>Browse by State</button>
        </li>
        <li>
          <button>View on Map</button>
        </li>
        <li>
          <button>View Lgas</button>
        </li>
        <li>
          <button>View Governors</button>
        </li>
      </ul>
      <div>{modal ? <div className="modal">hey</div> : null}</div>
      <Searchbar></Searchbar>
    </nav>
  );
};

export default Nav;
