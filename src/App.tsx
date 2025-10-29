import { useEffect } from "react";
import { useWeatherContext } from "./hooks/useWeatherContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { WeatherData } from "./types/weather";
import Conditions from "./pages/Conditions";

function App() {
  const { dispatch, coords } = useWeatherContext();

  // Fetch when coords change
  useEffect(() => {
    const fetchCurrentWeather = async (
      lat: number,
      lon: number
    ): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        const data: WeatherData = await response.json();

        if (response.ok) {
          dispatch({ type: "GET_WEATHER", payload: data });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (coords) {
      fetchCurrentWeather(coords.lat, coords.lon);
    }
  }, [coords, dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions" element={<Conditions />} />
      </Routes>
    </Router>
  );
}

export default App;
