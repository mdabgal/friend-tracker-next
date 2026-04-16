
"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    const chartData = [
      { name: "Call", value: counts.Call },
      { name: "Text", value: counts.Text },
      { name: "Video", value: counts.Video },
    ];

    setData(chartData);
  }, []);

  const COLORS = ["#285943", "#9254de", "#10b981"];

  return (
    <div className="bg-[#F8FAFC] ">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">
  Friendship Analytics
        </h1>

        <div className=" shadow-2xl w-full p-5 bg-white rounded-lg">
          <h2 className="text-[20px] text-[#244D3F] font-medium">
            By Interaction Type
          </h2>
          <div className="flex justify-center">
    
    <ResponsiveContainer width="100%" height={600}>
            <PieChart>
              <Pie
                data={data}
              innerRadius={120}
            outerRadius={180}
                paddingAngle={5}
            cornerRadius={10}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}