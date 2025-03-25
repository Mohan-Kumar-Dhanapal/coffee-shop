import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Apple", value: 40 },
  { name: "Samsung", value: 30 },
  { name: "Xiaomi", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444"]; // Custom colors

const MoneyUsage = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100} // Donut effect
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <h2 className="text-xl font-bold text-center mb-4">Weekly Report</h2>
    </div>
  );
};

export default MoneyUsage;
