import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { WeatherContextProvider } from "./context/WeatherContext.js";
// @ts-expect-error - later gonna switch it to ts
import CurrentWeather from "./components/CurrentWeather.jsx";

createRoot(document.getElementById("root")!).render(
  <WeatherContextProvider>
    <App />
    <CurrentWeather />
  </WeatherContextProvider>
);
