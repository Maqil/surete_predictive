import React from "react";
import spinner from "../img/loading.gif";

function Spinner() {
  return (
    <div style={{ backgroundColor: "#f3f7fd", height: "100vh" }}>
      <img
        src={spinner}
        style={{
          width: 80,
          margin: "auto",
          paddingTop: 160,
          display: "block"
        }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
