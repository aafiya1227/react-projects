import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0 rounded-0">
        <img
          src="/Images/wallpaper.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title  display-2 fw-bolder mb-0">
            New Season Arrivals
          </h5>
          <p className="card-text lead fs-2">Check Out All The TRENDS</p>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
