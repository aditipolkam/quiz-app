import React, { useEffect } from "react";
import { getQuizes } from "../api/getQuizes";

const Home = () => {
  useEffect(() => {
    getQuizes();
  });
  return <div>Home</div>;
};

export default Home;
