import React from "react";

const Localga = ({ lgas }) => {
  return (
    <div>
      {" "}
      {lgas.map((lga) => {
        return (
          <div key={lga.lgas}>
            <p
              style={{
                padding: "10px",
              }}
            >
              {lga.lgas}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Localga;
