import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// #region Sample data
const data = [
   { month: "January", a: 45, b: 30 },
  { month: "February", a: 90, b: 68 },
  { month: "March", a: 35, b: 22 },
  { month: "April", a: 65, b: 42 },
  { month: "May", a: 40, b: 28 },
  { month: "June", a: 98, b: 75 },
  { month: "July", a: 50, b: 34 },
  { month: "August", a: 85, b: 60 },
  { month: "September", a: 55, b: 38 },
  { month: "October", a: 90, b: 65 },
  { month: "November", a: 62, b: 45 },
  { month: "December", a: 95, b: 70 },
];

// #endregion
const StackedAreaChart = ({ aspect }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7b7fdc" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#7b7fdc" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b65b7c" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#b65b7c" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#555"
          strokeDasharray="2 4"
          strokeOpacity={0.18} />
        <XAxis dataKey="month" tick={{ fill: "#999" }} axisLine={false} tickLine={false} />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="a"
          stroke="#7b7fdc"
          fill="url(#blueGrad)"
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="b"
          stroke="#b65b7c"
          fill="url(#redGrad)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>

  );
};

export default StackedAreaChart;