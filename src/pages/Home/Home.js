import React from "react";
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  navigate("/login")
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
};

export default Home;
