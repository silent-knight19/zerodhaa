import React from "react";
import Dashboard from "./Dashboard";

import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="home-container">
      <TopBar />
      <div className="content-area">
        <Dashboard/>
      </div>
    </div>
  );
};

export default Home;