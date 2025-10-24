import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { WeatherContextProvider } from "./context/WeatherContext.js";
import CurrentWeather from "./components/CurrentWeather.tsx";

createRoot(document.getElementById("root")!).render(
  <WeatherContextProvider>
    <App />
    <CurrentWeather />
  </WeatherContextProvider>
);
