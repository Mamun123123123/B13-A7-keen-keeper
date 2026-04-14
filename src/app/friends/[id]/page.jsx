"use client";

import { friends } from "@/data/friends";
import { use, useState } from "react";

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

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 text-black">

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Friend Details
        </h1>
        <p className="text-gray-600 mt-1">
          Manage relationship and contact activity
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        
        <div className="bg-white border rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">

          <img
            src={friend.picture}
            className="w-24 h-24 mx-auto rounded-full ring-4 ring-gray-100"
          />

          <h2 className="mt-4 text-xl font-bold">{friend.name}</h2>
          <p className="text-sm text-gray-500">{friend.email}</p>

        
          <span
            className={`inline-block mt-3 text-xs px-3 py-1 rounded-full font-medium ${
              statusBg[friend.status]
            }`}
          >
            {friend.status}
          </span>

    
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            {friend.bio}
          </p>


          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
              >
                {t}
              </span>
            ))}
          </div>

          
          <div className="mt-6 space-y-2">
            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm font-medium transition">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm font-medium transition">
              📦 Archive
            </button>

            <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-xl text-sm font-medium transition">
              🗑️ Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">

          
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition">
              <p className="text-2xl font-bold">
                {friend.days_since_contact}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition">
              <p className="text-2xl font-bold">{goalDays}</p>
              <p className="text-xs text-gray-500 mt-1">Goal</p>
            </div>

            <div className="bg-white border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition">
              <p className="text-sm font-semibold">Next Due</p>
              <p className="text-xs text-gray-500 mt-1">
                {friend.next_due_date}
              </p>
            </div>

          </div>

        
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">

            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                Relationship Goal
              </h3>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-blue-600 hover:text-blue-800"
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
                  className="border rounded-lg px-3 py-2 w-24 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
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

    
          <div className="bg-white border rounded-2xl p-6 shadow-sm">

            <h3 className="font-semibold mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <button className="bg-green-50 hover:bg-green-100 text-green-700 py-3 rounded-xl font-medium transition">
                📞 Call
              </button>

              <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 rounded-xl font-medium transition">
                💬 Text
              </button>

              <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 rounded-xl font-medium transition">
                🎥 Video
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}