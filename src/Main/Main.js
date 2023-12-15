import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../components/ItemCard/ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy-night" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
