import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectedCard, clothingItems, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 299;
  const weatherType = weatherTemp?.weatherType || "warm";

  console.log("Temperature Unit:", currentTemperatureUnit);
  console.log("Clothing Items:", clothingItems);
  console.log("Weather Type:", weatherType);

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
