
"use client";

import { useEffect, useState } from "react";
import { PhoneCall, MessageSquareMore, Video } from "lucide-react";

export default function TimelinePage() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  const filteredData = timeline.filter((item) => {
  const matchFilter = filter === "All" || item.type === filter;

  const matchSearch =
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase());

  return matchFilter && matchSearch;
});

  const getIcon = (type) => {
    if (type === "Call") return <PhoneCall size={18} />;
    if (type === "Text") return <MessageSquareMore size={18} />;
    if (type === "Video") return <Video size={18} />;
  };

  return (
    <div className="bg-[#F8FAFC] ">
    <div className="max-w-3xl mx-auto p-6">
      

      <h1 className="text-2xl font-bold mb-4">Timeline</h1>


<input
  type="text"
  placeholder="Search by name or type..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border border-gray-300 px-4 py-2 rounded mb-3 w-full"
/>
    
      <select
        className="border  border-gray-300 px-22 py-2 rounded mb-5 "
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

     
      <div className="space-y-3">
        {filteredData.length === 0 ? (
          <p className="text-gray-500">No timeline found</p>
        ) : (
          filteredData.map((item) => (
            <div
       key={item.id}
              className="flex items-center gap-3 border border-gray-100 p-3 rounded-lg bg-white shadow-sm"
            >
           
              <div className="">
              {getIcon(item.type)}
              </div>

              
              <div>
                <h3 className="font-semibold">
             {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
