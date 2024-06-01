"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sat",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Chart = () => {
  return (
    <div className="mb-10">
      <ResponsiveContainer width={"100%"} minHeight={300}>
        <AreaChart data={data}>
          <defs>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient> */}
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EEF6FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#DADEFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="name" /> */}
          <XAxis
            dataKey={"name"}
            axisLine={false}
            padding={{ left: 20 }}
            tick={{ stroke: "#181A1E", fontSize: "16px", width: 1 }}
          />
          <YAxis axisLine={false} padding={{ bottom: 30 }} />
          <CartesianGrid strokeDasharray="0.01 0.1" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="#347DFD"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
