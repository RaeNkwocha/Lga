import React from "react";

const Lgas = ({ lgas }) => {
  return (
    <div>
      {lgas.map((lga) => {
        return (
          <div key={lga.name}>
            <p>{lga.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Lgas;
