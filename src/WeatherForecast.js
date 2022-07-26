import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  
  
  if (loaded) {
    
    return (
    <div className="WeatherForecast">
      <div className="bottom-section" id="forecast">
        <div className="next-5-days-container">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col-sm" id="space-left">
                    <WeatherForecastDay forecastDay={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div> 
    </div>
  );
  } else {
    let apiKey = `f7dffd4359849bb28c77fa4fe304c30f`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
    
}
