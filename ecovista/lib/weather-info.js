// external weather api gulo sob ekhane rakha hoyeche. eta mandatory navigator. ekta pattern follow kora ei r Kings. tumi chaile component eo api rakhte paro. no problem. evabe dile sob guchano thaklo j pore code review korar somoy compoenent e sudhu dekhte pabo j ki data ana hocche r shei data diye ki korchi. shei data kivabe asche, kon api k call kora hocche esob kichu e component level e thaklo navigator. keu jodi seta dekhte chai, ei file e ese dekhte parbe.
export const getWeatherData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        return data?.weather[0];
    } catch (e) {
        console.error(e.message);
    }
};

export const getTemperatureData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        return data?.main;
    } catch (e) {

        console.error(e.message);
    }
};

export const getWindData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        return data?.wind;
    } catch (e) {
        console.error(e.message);
    }
};

export const getAQIData = async (lat, lon) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
        );
        const data = await response.json();
        return data?.list[0];
    } catch (e) {
        console.error(e.message);
    }
};
