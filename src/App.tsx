import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchCurrentWeather = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        const data = await response.json();
        console.log("done", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentWeather();
  }, []);

  return <div className=" bg-blue-900">Tailwind</div>;
}

export default App;
