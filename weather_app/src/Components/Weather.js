import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

import "./Weather.css";
function Weather() {
  const apiKey = "15598e70889f0d6415bc004db9b644a1";

  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (search.city === "") {
      alert("Add City Name");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.country}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => data);
      setWeather({
        data: data,
      });
      
    }
  }

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setSearch({ ...search, city: value });
    }
    if (name === "country") {
      setSearch({ ...search, country: value });
    }
  };
  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="input-field">
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={(e) => changeHandler(e)}
        ></input>

        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={(e) => changeHandler(e)}
        ></input>
        <button onClick={(e) => weatherData(e)}>Submit</button>
      </div>
     


      {weather.data!==undefined? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null }

      
    </div>
   
  );
}

export default Weather;
