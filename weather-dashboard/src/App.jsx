import "./App.css";
import Page from "./Page";

import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    // what's the benefit of putting provider in a different .jsx file? when my application will be bigger, It will be easier to wrap only the required jsx elements inside the provider. Not need to write provider each time and pass the value. Rather wrap it using this single WeatherProvider component.
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
