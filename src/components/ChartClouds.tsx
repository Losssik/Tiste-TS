import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useWeatherContext } from "../hooks/useWeatherContext";

const ChartClouds = () => {
  const { forecast } = useWeatherContext();

  if (!forecast) return <p>Loading...</p>;

  const data = forecast.list.map((item) => ({
    clouds: item.clouds.all,
    date: item.dt_txt.slice(5, -3),
  }));

  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart data={data} responsive>
        <XAxis dataKey="date" hide />
        <YAxis />
        <Bar dataKey="clouds" fill="#8884d8" />
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
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartClouds;
