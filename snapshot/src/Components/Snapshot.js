import "./Snapshot.css";
import { useState } from "react";


import Navigation from "./Navigation";
import Items from "./Items";
import { Route, Routes, useNavigate } from "react-router-dom";

const Snapshot = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const searchPhotos = async (event) => {
    event.preventDefault();
    
      navigate(`/items/${searchInput}`);

    
  };
  const searchInputChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  }; 
  return (
    <div className="container">
      <h1>SnapShot</h1>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search..."
          value={searchInput}
          onChange={searchInputChange}
        ></input>

        <button type="submit" onClick={searchPhotos}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <Navigation />
      <h2>{searchInput}</h2>
     
     
      <div className="card-list">
        
        <Routes>
          <Route path="/items/:item" element={<Items />} />
        </Routes>
      </div>
    </div>
  );
};

export default Snapshot;
