import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// @ts-expect-error - later gonna switch it to ts
import { WeatherContextProvider } from "./context/WeatherContext.jsx";
// @ts-expect-error - later gonna switch it to ts
import CurrentWeather from "./components/CurrentWeather";

createRoot(document.getElementById("root")!).render(
  <WeatherContextProvider>
    <App />
    <CurrentWeather />
  </WeatherContextProvider>
);
