import { LineChart, Line, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useWeatherContext } from "../hooks/useWeatherContext";

const ChartPressure = () => {
  const { forecast } = useWeatherContext();

  if (!forecast) return <p>Loading forecast...</p>;

  const data = forecast.list.map((item) => ({
    pressure: item.main.pressure,
  }));

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">
        Weather forecast for {forecast.city.name}
      </h2>

      <ResponsiveContainer width="100%" aspect={1.6} height="600px">
        <LineChart data={data}>
          <YAxis domain={[950, 1050]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pressure"
            name="Pressure (hPa)"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartPressure;
