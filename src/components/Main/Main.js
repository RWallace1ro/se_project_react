import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectedCard, clothingItems, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 299;

  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else {
        return "cold";
      }
    } else if (CurrentTemperatureUnitContext === "C") {
      if (currentTemperatureUnit === "F")
        if (temp >= 30) {
          return "hot";
        } else if (temp >= 66 && temp <= 85) {
          return "warm";
        } else {
          return "cold";
        }
    }
  }, [temp, currentTemperatureUnit]);

  const temperatureUnit = useMemo(() => {
    return currentTemperatureUnit === "F" ? "Fahrenheit" : "Celsius";
  }, [currentTemperatureUnit]);

  console.log("Temperature Unit:", temperatureUnit);
  console.log("clothing Items", clothingItems);

  const filteredItems = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy-night" weatherTemp={temp} />
      <section className="cards" id="card-section">
        <div className="weather__temp">
          Today is {temp}&deg; {currentTemperatureUnit} / You may want to wear:
        </div>
        <div className="cards__items">
          {filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectedCard={onSelectedCard}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
