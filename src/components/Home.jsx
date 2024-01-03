import React from "react";
import InputGroup from "./InputGroup";
import Blob from "./Blob";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Blob />
        <InputGroup />
      </div>
    </div>
  );
};

export default Home;
