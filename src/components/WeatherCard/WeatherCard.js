import { weatherOptions } from "../../utils/constants";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const weatherOption = weatherOptions.find(
    (option) => option.day === day && option.type === type
  );
  const imageSrcUrl = weatherOption ? weatherOption.url : "";

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp}&deg; {currentTemperatureUnit}{" "}
      </div>
      <img src={imageSrcUrl} className="weather_image" alt="weather" />
    </section>
  );
};

export default WeatherCard;
