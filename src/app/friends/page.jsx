import { friends} from "@/data/friends";
import Link from "next/link";

const statusColor = {
  overdue: "bg-red-500",
  "on-track": "bg-green-500",
  "almost due": "bg-orange-400",
};

export default function FriendsPage() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl text-black font-bold mb-6">Your Friends</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto"
            />

            
            <h2 className="text-center text-black font-semibold mt-3">
              {friend.name}
            </h2>

        
            <p className="text-center text-sm text-gray-500">
              {friend.days_since_contact} days ago
            </p>

    
            <div className="flex flex-wrap text-black justify-center gap-2 mt-2">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

    
            <div className="flex justify-center mt-3">
              <span
                className={`text-white text-xs px-3 py-1 rounded-full ${
                  statusColor[friend.status]
                }`}
              >
                {friend.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}