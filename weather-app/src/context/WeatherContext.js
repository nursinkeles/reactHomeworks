import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("istanbul");
  const [weather, setWeather] = useState([]);

  const cityOptions = [
    { city_name: "Istanbul" },
    { city_name: "Izmir" },
    { city_name: "Bursa" },
    { city_name: "Ankara" },
    { city_name: "Izmit" },
    { city_name: "Adiyaman" },
    { city_name: "Tokat" },
    { city_name: "Manisa" },
    { city_name: "Sanliurfa" },
    { city_name: "Diyarbakır" },
    { city_name: "Malatya" },
    { city_name: "Kayseri" },
  ];
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1b82211d9eae6d8964717fe8ecb5cc33`
    )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
    console.log(weather);
  }, [city]);
  const icon = weather.weather[0].icon;
  const values = {
    weather,
    city,
    setCity,
    cityOptions,
    icon,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
