"use client";

import { useEffect, useState } from "react";
import { friends } from "@/data/friends";

// simple emoji icons (you can replace with images later)
const typeIcon = {
  Call: "📞",
  Text: "💬",
  Video: "🎥",
};

const typeColor = {
  Call: "bg-green-100 text-green-700",
  Text: "bg-blue-100 text-blue-700",
  Video: "bg-purple-100 text-purple-700",
};

export default function TimelinePage() {
  const [allTimeline, setAllTimeline] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let combined = [];

    friends.forEach((friend) => {
      const data =
        JSON.parse(localStorage.getItem(`timeline-${friend.id}`)) || [];

      const withName = data.map((item) => ({
        ...item,
        friendName: friend.name,
        friendId: friend.id,
      }));

      combined = [...combined, ...withName];
    });

    combined.sort((a, b) => b.id - a.id);
    setAllTimeline(combined);
  }, []);

  
  const filteredData = allTimeline.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.friendName.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ? true : item.type === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6 text-black">

      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Timeline
      </h1>

      
      <div className="flex flex-col sm:flex-row gap-3 mb-6">

        <input
          type="text"
          placeholder="Search timeline..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-xl"
        >
          <option value="all">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

      </div>


      {filteredData.length === 0 ? (
        <p className="text-gray-500">No activity found</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex gap-4 items-start"
            >

        
              <div
                className={`text-2xl sm:text-3xl p-3 rounded-xl ${
                  typeColor[item.type]
                }`}
              >
                {typeIcon[item.type] || "📌"}
              </div>

              
              <div className="flex-1">

                <h3 className="font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.friendName}
                </p>

                <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
                  {item.date}
                </p>

            
                <span
                  className={`inline-block mt-2 text-[11px] px-2 py-1 rounded-full font-medium ${
                    typeColor[item.type]
                  }`}
                >
                  {item.type}
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}