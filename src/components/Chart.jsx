/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Legend } from "recharts";
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={"middle"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = ({ title, data, color }) => {
  return (
    <>
      <div className="flex flex-col mx-10">
        <h2>{title}</h2>
        <PieChart width={300} height={350}>
          <Legend layout="horizontal" verticalAlign="top" align="top" />
          <Pie
            data={data}
            dataKey="value"
            cx={120}
            cy={200}
            innerRadius={40}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index % color.length]} />
            ))}
          </Pie>
      </PieChart>
      </div>
      
      
    </>
  );
};

export default Chart;
