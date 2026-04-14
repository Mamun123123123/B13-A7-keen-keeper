"use client";

import { use, useEffect, useState } from "react";
import { friends } from "@/data/friends";

export default function TimelinePage({ params }) {
  const { id } = use(params);

  const friend = friends.find((f) => f.id === Number(id));

  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem(`timeline-${id}`)) || [];
    setTimeline(data);
  }, [id]);

  if (!friend) return <p className="p-6">Not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black">

      <h1 className="text-2xl font-bold mb-6">
        Timeline — {friend.name}
      </h1>

      {timeline.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-3">

          {timeline.map((t) => (
            <div
              key={t.id}
              className="bg-white border p-4 rounded-xl shadow-sm"
            >
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-gray-500">{t.date}</p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}