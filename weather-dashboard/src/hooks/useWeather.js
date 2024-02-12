//created using arrow function just for doing something different. no otherr reason.

import { useState } from "react";

const useWeather = () => {
  const [weatherData, useWeatherData] = useState({
    location: "",
    climate: "",
    temperatre: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  //this function calls data asynchronously. We don't know when we will receive the output from the api. Not going to keep the whole site stuck. So, this function is made asynchronous.
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      //first set loading to true
      setLoading({
        //...loading,
        state: true,
        message: "Fetching weather data",
      });
      //now start fetching data
      const responce = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API key}`
      );
      //checl if data has been received
      if (!responce.ok) {
        const errorMessage = `Fetching weather data failed : ${responce.status}`;
        throw new Error(errorMessage);
      }

      //if data received properly, work on the data
      const data = await responce.json();
      //Sticking to spread operator-based updates helps maintain immutability, predictability, and clarity in your code.

      //By using the spread operator (...) in your code, you ensure that a new object is created with the updated values, leaving the original object intact. React works best when you treat state as immutable. This means creating a new state object whenever you want to update it, rather than directly modifying the existing one (here by saying directly modifying it means loading.state = true. By directly modifying it does not mean setLoading({state:true, message: "text"}). this passing of new object will create new reference. But this is not recommened for several reasons mentioned below).

      //This helps React understand what has changed in the state and accurately trigger re-renders of relevant components. Making it easier to reason about and test. It also becomes clearer to someone reading your code what you're trying to achieve with the state update. Using the spread operator makes the update intention explicit and avoids unintentional side effects.

      //Using the spread operator explicitly enforces the recommended immutability pattern  in React, which promotes predictable state updates and simplifies component reasoning. The spread operator approach keeps the state update logic clear and easier to understand for yourself and others maintaining the code.

      //So, even if here the code will work without using the spread operator, it's best practice or recommended approach to use spread operator anytime you modify the object due to several reasons mentioned above.

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperatre: data?.main?.temp,
        maxTemperature: data?.main?.temp_min,
        minTemperature: data?.main?.temp_max,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        //...loading,
        state: false,
        message: "",
      });
    }
  };
};
