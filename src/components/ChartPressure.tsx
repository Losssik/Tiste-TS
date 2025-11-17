import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { useWeatherContext } from "../hooks/useWeatherContext";

const ChartPressure = () => {
  const { forecast } = useWeatherContext();
  if (!forecast) return <p>Loading forecast…</p>;

  const data = forecast.list.map((item) => ({
    pressure: item.main.pressure,
    dt_txt: item.dt_txt.slice(5, -3),
  }));

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 5,
            left: 0,
          }}
          responsive
        >
          <CartesianGrid stroke="#13226A" />
          <YAxis domain={[970, 1050]} />
          <XAxis
            dataKey="dt_txt"
            ticks={[
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
          <ReferenceLine
            y={1015}
            stroke="green"
            strokeDasharray="3 3"
            label="optimal max pressure"
          />
          <ReferenceLine
            y={1005}
            stroke="green"
            strokeDasharray="3 3"
            label="optimal min pressure"
          />

          <Line
            type="monotone"
            dataKey="pressure"
            name="Pressure (hPa)"
            stroke="#3182BD"
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
