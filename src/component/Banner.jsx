"use client";

import { UserPlus } from "lucide-react";

const stats = [
  { title: "Total Friends", value: 10 },
  { title: "On Track", value: 3 },
  { title: "Need Attention", value: 6 },
  { title: "Interactions This Month", value: 12 },
];

const Banner = () => {
  return (
    <section className="w-full bg-gray-50 py-10 sm:py-12 lg:py-16">
      
      <div className="w-full px-4 sm:px-6 lg:px-12 text-center">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Friends to keep close in your life
        </h1>

    
        <p className="text-gray-500 mt-3 sm:mt-4 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mt-5 sm:mt-6">
          <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base transition">
            <UserPlus size={18} />
            Add a Friend
          </button>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-10 w-full">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl py-5 sm:py-6 px-4 hover:shadow-md transition"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {item.value}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner;