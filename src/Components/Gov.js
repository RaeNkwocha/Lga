import React from "react";

const Gov = ({ lgas }) => {
  return (
    <div>
      {" "}
      {lgas.map((lga) => {
        return (
          <div key={lga.governor}>
            <p>{lga.governor}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Gov;
