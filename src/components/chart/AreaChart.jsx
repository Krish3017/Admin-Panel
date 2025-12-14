import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 1800 },
  { name: "March", Total: 1100 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 400 },
    { name: "June", Total: 2100 },
   { name: "Jul", Total: 1900 },
  { name: "Aug", Total: 1500 },
  { name: "Sep", Total: 1900 },
  { name: "Oct", Total: 2700 },
  { name: "Nov", Total: 2500 },
  { name: "Dec",Total: 3000 }
];

// #endregion
const StackedAreaChart = ({aspect}) => {
    return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: aspect}}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
      <XAxis dataKey="name" stroke='gray'/>
            <Tooltip />
      <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default StackedAreaChart;