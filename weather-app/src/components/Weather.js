import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather, setCity, icon, city_name, cityOptions } = useWeather();

  return (
    <div>
      <h1>Weather App</h1>
      <select
        name="city"
        value={cityOptions.city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        {cityOptions.map((city, index) => (
          <option key={index} value={city.city_name}>
            {city.city_name}
          </option>
        ))}
      </select>
      <br />
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <h2>{new Date(weather.dt * 1000).toLocaleDateString()}</h2>
      <p>
        temp: {weather.main.temp}
        <span>°c</span>{" "}
      </p>
      <h3>{weather.weather[0].main}</h3>
    </div>
  );
}

export default Weather;
