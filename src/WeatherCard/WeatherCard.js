const weatherConditions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/night/full-moon.svg").default,
    day: false,
    type: "full-moon",
  },
  {
    url: require("../images/night/cloudy-night.svg").default,
    day: false,
    type: "cloudy-night",
  },
  {
    url: require("../images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  { url: require("../images/night/fog.svg").default, day: false, type: "fog" },
];

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const imageSrc = weatherConditions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather_image" alt="weather" />
    </section>
  );
};

export default WeatherCard;
