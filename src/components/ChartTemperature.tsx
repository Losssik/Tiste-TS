import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useWeatherContext } from "../hooks/useWeatherContext";

const ChartTemperature = () => {
  const { forecast } = useWeatherContext();

  if (!forecast) return <p>loading</p>;

  const data = forecast.list.map((item) => ({
    temperature: item.main.temp.toFixed(1),
    dt_txt: item.dt_txt.slice(5, -3),
  }));

  return (
    <div>
      <h2>Temperature</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <YAxis />
          <XAxis dataKey="dt_txt" hide />
          <Line
            dataKey="temperature"
            type="monotone"
            name="temp"
            stroke="#8884d8"
            strokeWidth={1}
            dot={false}
          />
          <Legend verticalAlign="top" align="center" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.85)",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{
              color: "#fff",
            }}
            itemStyle={{
              color: "#fff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTemperature;
