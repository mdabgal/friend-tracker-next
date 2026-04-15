"use client";

import Link from "next/link";

export default function Friends({ friends }) {
  return (
    <div className="bg-[#FBFAFc] min-h-screen p-8">
      <h2 className="text-xl font-semibold mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(friends) &&
          friends.map((friend) => (
            <Link key={friend.id} href={`/friends/${friend.id}`}>
              <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition cursor-pointer">

                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />

                <h3 className="mt-3 font-semibold">{friend.name}</h3>

                <p className="text-xs text-gray-400">
                  {friend.days_since_contact}d ago
                </p>

                <div className="flex justify-center gap-2 mt-2 flex-wrap">
                  {(friend.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

          <div className="mt-3">
               <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            friend.status === "overdue"
                ? "bg-red-100 text-red-600"
                 : friend.status === "almost due"
                 ? "bg-yellow-100 text-yellow-600"
                : "bg-[#285943] text-white"
                    }`}
                  >
              {friend.status === "almost due"
                 ? "Almost Due"
                : friend.status === "on-track"
                ? "On-Track"
                   : "Overdue"}
                  </span>
                </div>

              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}