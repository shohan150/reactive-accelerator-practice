import { weatherContext } from "../context";
import { useWeather } from "../hooks/index";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();
  // console.log(weatherData, error, loading);
  return (
    <weatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
