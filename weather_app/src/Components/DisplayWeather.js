import React from "react";
import "./DisplayWeather.css";

function DisplayWeather(props) {
  const { data } = props;
  console.log(data);
  console.log(new Date());
  
  const icon =
   "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";


  return (
  <div className="displayWeather">
      <div className="main">
        <span className="title">
          {data.name}, {data.sys.country}. Weather
        </span>
        <span className="date_time">{new Date().toLocaleTimeString()}</span>
        <h1>
          {Math.floor(data.main.temp - 273.15)}
          <sup>o</sup>C
        </h1>
        <span className="main_weather">{data.weather[0].main}</span>
        <img src={icon} className="icon" alt="icon" />
        <span>{data.weather[0].description}</span>
      </div>

      <div className="details">
        <div className="section-1">
          <table>
            <tr>
              <td>
                <h4>High/Low</h4>
              </td>
              <td>
                <span>
                  {Math.floor(data.main.temp_max - 273.15)}/{""}
                {Math.floor(data.main.temp_min - 273.15)}<sup>o</sup>C
                </span>
              </td>
              </tr>
              <tr>
              <td>
                <h4>Humidity</h4>
              </td>
              <td>
                <span>
                 {data.main.humidity} %
                </span>
              </td>
              </tr>
              <tr>
              <td>
                <h4>Pressure</h4>
              </td>
              <td>
                <span>
                 {data.main.pressure}hPa
                </span>
              </td>
              </tr>
              <tr>
              <td>
                <h4>Visibility</h4>
              </td>
              <td>
                <span>
                  {data.visibility/1000} Km
                </span>
              </td>
            </tr>
            
          </table>
        </div>
        <div className="section-2">
          <table>
            <tr>
              <td>
                <h4>Wind</h4>
              </td>
              <td>
                <span>
                 {Math.floor((data.wind.speed*18)/5)} Km/hr
                </span>
              </td>
              </tr>
              <tr>
              <td>
                <h4>Wind-Dir.</h4>
              </td>
              <td>
                <span>
                 {data.wind.deg}<sup>o</sup>C
                </span>
              </td>
              </tr>
              <tr>
              <td>
                <h4>Sunrise</h4>
              </td>
              <td>
                <span>
                {new Date(data.sys.sunrise*1000).toLocaleTimeString()}
                </span>
              </td>
              </tr>
              <tr>
              <td>
                <h4>Sunset</h4>
              </td>
              <td>
                <span>
                {new Date(data.sys.sunset*1000).toLocaleTimeString()}
                </span>
              </td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  );


 
}

export default DisplayWeather;
