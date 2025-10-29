import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import { useWeatherContext } from "../hooks/useWeatherContext";

const ChartPressure = () => {
  //   const { city } = useWeatherContext();

  //   if (!city) return;

  const data = [
    {
      name: "wejherowo",
      pressure: 1011,
    },
    {
      name: "wierzchucino",
      pressure: 1032,
    },
    {
      name: "wejherowo",
      pressure: 1011,
    },
    {
      name: "wierzchucino",
      pressure: 1032,
    },
    {
      name: "brzyno",
      pressure: 951,
    },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={1.618}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pressure" name="pressure (hPa)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartPressure;
