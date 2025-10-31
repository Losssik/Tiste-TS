import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useWeatherContext } from "../hooks/useWeatherContext";

const ChartPressure = () => {
  const { forecast } = useWeatherContext();
  if (!forecast) return <p>Loading forecast…</p>;

  const data = forecast.list.map((item) => ({
    pressure: item.main.pressure,
    dt_txt: item.dt_txt,
  }));

  return (
    <>
      <h2>Weather forecast for {forecast.city.name}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 5,
            left: 0,
          }}
        >
          <CartesianGrid stroke="rgba(173, 216, 230, 0.1)" />
          <YAxis domain={[970, 1050]} />
          <XAxis
            dataKey="dt_txt"
            hide
            ticks={[
              data[0].dt_txt,
              data[8].dt_txt,
              data[16].dt_txt,
              data[24].dt_txt,
              data[32].dt_txt,
            ]}
          />
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
          <Line
            type="monotone"
            dataKey="pressure"
            name="Pressure (hPa)"
            stroke="#8884d8"
            strokeWidth={1}
            dot={false}
          />
          <Legend verticalAlign="top" align="center" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartPressure;
