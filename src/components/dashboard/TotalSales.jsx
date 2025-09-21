import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { totalSalesData } from '../../data/demoData';

const TotalSales = () => {
  const [activePercentage, setActivePercentage] = useState('');

  const total = totalSalesData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
      <h4 className="text-lg font-semibold mb-4">Total Sales</h4>

      <div className="w-full h-48 relative flex items-center justify-center ">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={totalSalesData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {totalSalesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                  onMouseEnter={() => {
                    const percentage = ((entry.value / total) * 100).toFixed(1);
                    setActivePercentage(`${percentage}%`);
                  }}
                  onMouseLeave={() => {
                    setActivePercentage('');
                  }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {activePercentage && ( 
          <div className="absolute flex items-center justify-center text-foreground text-lg font-semibold pointer-events-none">
            {activePercentage}
          </div>
        )}

      </div>

      <div className="mt-4 space-y-2">
        {totalSalesData.map(entry => (
          <div key={entry.name} className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              <span className="text-muted">{entry.name}</span>
            </div>
            <span className="text-foreground font-medium">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
