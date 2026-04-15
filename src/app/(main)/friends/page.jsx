"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Friends List</h1>

      <div className="grid grid-cols-2 gap-4">
       {friends.map((f) => (
        <Link key={f.id} href={`/friends/${f.id}`}>
            <div className="p-4 bg-white shadow rounded cursor-pointer">
      <img src={f.picture} className="w-12 h-12 rounded-full" />
            
            
           <h2>{f.name}</h2>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}