"use client";

import { useEffect, useState } from "react";
import { friends } from "@/data/friends";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#a855f7"]; // Call, Text, Video

export default function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let all = [];

    friends.forEach((friend) => {
      const items =
        JSON.parse(localStorage.getItem(`timeline-${friend.id}`)) || [];

      all = [...all, ...items];
    });

    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    all.forEach((item) => {
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

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black">

      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      {total === 0 ? (
        <p className="text-gray-500">No interaction data yet</p>
      ) : (
        <div className="bg-white border rounded-2xl p-6 shadow-sm">

          <div className="w-full h-[350px] relative">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  innerRadius={90} 
        
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      )}

    </div>
  );
}