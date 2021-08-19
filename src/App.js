import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";

function App() {
  const [lgas, setLgas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-states")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setLgas(data);
      });
    console.log(lgas, "lga");
  }, []);

  return (
    <>
      <Nav></Nav>{" "}
    </>
  );
}

export default App;
