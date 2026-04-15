"use client";

import { PhoneCall, MessageSquareMore, Video } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function QuickActions({ friend }) {
  const router = useRouter();

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      date: new Date().toLocaleDateString(),
      title: `${type} with ${friend.name}`,
    };

    const existing =
      JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...existing])
    );

    toast.success(`${type} added!`);

    router.push("/timeline");
  };

  return (
    <div className="grid grid-cols-3 gap-3">

      <button
        onClick={() => handleAction("Call")}
        className="border flex justify-center items-center gap-2 p-3 rounded hover:bg-gray-100"
      >
        <PhoneCall size={18} /> Call
      </button>

      <button
        onClick={() => handleAction("Text")}
        className="border flex justify-center items-center gap-2 p-3 rounded hover:bg-gray-100"
      >
        <MessageSquareMore size={18} /> Text
      </button>

      <button
        onClick={() => handleAction("Video")}
        className="border flex justify-center items-center gap-2 p-3 rounded hover:bg-gray-100"
      >
        <Video size={18} /> Video
      </button>

    </div>
  );
}