import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";

export default function App() {
  return (
    // what's the benefit of putting provider in a different .jsx file? when my application will be bigger, It will be easier to wrap only the required jsx elements inside the provider. Not need to write provider each tme and pass the value. Rather wrap it using this single WeatherProvider component.
    <WeatherProvider>
      <div className="h-screen grid place-items-center">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}
