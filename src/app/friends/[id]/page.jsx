"use client";

import { friends } from "@/data/friends";
import { use, useState } from "react";
import { toast } from "react-toastify";

export default function FriendDetails({ params }) {
  const { id } = use(params);
  const friend = friends.find((f) => f.id === Number(id));

  const [goalDays, setGoalDays] = useState(friend?.goal || 30);
  const [isEditing, setIsEditing] = useState(false);

  if (!friend) return <p className="p-6 text-black">Friend not found</p>;

  const statusBg = {
    "on-track": "bg-green-100 text-green-700",
    overdue: "bg-red-100 text-red-700",
    "almost due": "bg-orange-100 text-orange-700",
  };


  const addTimeline = (type) => {
    const key = `timeline-${friend.id}`;

    const existing =
      JSON.parse(localStorage.getItem(key)) || [];

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleString(),
    };

    const updated = [newEntry, ...existing];

    localStorage.setItem(key, JSON.stringify(updated));


    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-8 text-black">

    
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Friend Details
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage relationship and activity
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm">

          <img
            src={friend.picture}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full"
          />

          <h2 className="mt-4 text-lg sm:text-xl font-bold">
            {friend.name}
          </h2>

          <p className="text-sm text-gray-500">
            {friend.email}
          </p>

          <span
            className={`inline-block mt-3 text-xs px-3 py-1 rounded-full font-medium ${
              statusBg[friend.status]
            }`}
          >
            {friend.status}
          </span>

    
          <p className="text-sm text-gray-600 mt-4">
            {friend.bio}
          </p>

    
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

    
          <div className="mt-6 space-y-2">
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm">
              📦 Archive
            </button>

            <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-xl text-sm">
              🗑️ Delete
            </button>
          </div>
        </div>

    
        <div className="lg:col-span-2 space-y-6">

    
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white border rounded-2xl p-5 text-center">
              <p className="text-2xl font-bold">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-5 text-center">
              <p className="text-2xl font-bold">{goalDays}</p>
              <p className="text-xs text-gray-500">Goal</p>
            </div>

            <div className="bg-white border rounded-2xl p-5 text-center">
              <p className="text-sm font-semibold">Next Due</p>
              <p className="text-xs text-gray-500">
                {friend.next_due_date}
              </p>
            </div>

          </div>

          
          <div className="bg-white border rounded-2xl p-6">

            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                Relationship Goal
              </h3>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-blue-600"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            {isEditing ? (
              <div className="flex gap-3 mt-4 items-center">
                <input
                  type="number"
                  value={goalDays}
                  onChange={(e) =>
                    setGoalDays(Number(e.target.value))
                  }
                  className="border px-3 py-2 w-24 rounded-lg text-center"
                />

                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-600 mt-3">
                Contact every{" "}
                <b className="text-black">{goalDays}</b> days
              </p>
            )}
          </div>

          
          <div className="bg-white border rounded-2xl p-6">

            <h3 className="font-semibold mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <button
                onClick={() => addTimeline("Call")}
                className="bg-green-50 hover:bg-green-100 text-green-700 py-3 rounded-xl transition"
              >
                📞 Call
              </button>

              <button
                onClick={() => addTimeline("Text")}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 rounded-xl transition"
              >
                💬 Text
              </button>

              <button
                onClick={() => addTimeline("Video")}
                className="bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 rounded-xl transition"
              >
                🎥 Video
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}