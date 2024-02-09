import { weatherConditions } from "../../utils/constants";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const imageSrc = weatherConditions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const imageSrcUrl = imageSrc[0].url || "";

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
